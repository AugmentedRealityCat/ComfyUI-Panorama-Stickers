<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import Inspector from "./Inspector.vue";
import PanoCanvas from "./PanoCanvas.vue";
import ToolBar from "./ToolBar.vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "Panorama Modal",
  },
  dof: {
    type: String,
    default: "3",
  },
  tools: {
    type: Array,
    default: () => [],
  },
  panels: {
    type: Array,
    default: () => [],
  },
  activeToolId: {
    type: String,
    default: "",
  },
  backgroundSource: {
    type: Object,
    default: null,
  },
  scene: {
    type: Object,
    default: () => ({ stickers: [], selectedId: null, hoveredId: null }),
  },
  textures: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["close", "ready", "tool-select", "interaction"]);
const modalEl = ref(null);
let previousOverflow = "";

function onKeydown(event) {
  if (event.key === "Escape") emit("close");
}

function syncBodyLock(nextOpen) {
  if (!nextOpen) return;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
}

onMounted(() => {
  if (props.open) syncBodyLock(true);
  document.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  document.body.style.overflow = previousOverflow;
  document.removeEventListener("keydown", onKeydown);
});

watch(() => props.open, (nextOpen) => {
  if (nextOpen) {
    syncBodyLock(true);
    return;
  }
  document.body.style.overflow = previousOverflow;
});
</script>

<template>
  <div
    v-if="open"
    class="pano-modal-overlay"
    @click.self="emit('close')"
  >
    <section
      ref="modalEl"
      class="pano-modal"
      role="dialog"
      aria-modal="true"
      :aria-label="title"
    >
      <div class="pano-vue-modal-stage">
        <div class="pano-floating-top">
          <button type="button" class="pano-btn pano-btn-texticon">
            <span class="label">{{ title }}</span>
          </button>
          <button type="button" class="pano-btn pano-btn-icon" @click="emit('close')">
            <span class="pano-vue-tool-glyph">X</span>
          </button>
        </div>

        <ToolBar
          :tools="tools"
          :active-tool-id="activeToolId"
          @select="emit('tool-select', $event)"
        />

        <PanoCanvas
          :dof="dof"
          :background-source="backgroundSource"
          :scene="scene"
          :textures="textures"
          @ready="emit('ready', $event)"
          @interaction="emit('interaction', $event)"
        />
      </div>

      <Inspector :panels="panels" />
    </section>
  </div>
</template>
