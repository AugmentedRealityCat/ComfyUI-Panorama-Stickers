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
  viewModes: {
    type: Array,
    default: () => [],
  },
  activeViewMode: {
    type: String,
    default: "panorama",
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

const emit = defineEmits(["close", "ready", "tool-select", "view-select", "interaction"]);
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
            <span class="pano-side-title-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 18h16" />
                <path d="M6 15l3-6 3 6 3-9 3 9" />
              </svg>
            </span>
            <span class="label">{{ title }}</span>
          </button>
          <div
            v-if="viewModes.length"
            class="pano-view-toggle pano-vue-view-toggle"
            :data-view-count="String(viewModes.length)"
            :data-selected="activeViewMode"
          >
            <button
              v-for="viewMode in viewModes"
              :key="viewMode.id"
              type="button"
              class="pano-view-btn"
              @click="emit('view-select', viewMode.id)"
            >
              <span>{{ viewMode.label }}</span>
            </button>
          </div>
          <button type="button" class="pano-btn pano-btn-icon" @click="emit('close')">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>

        <ToolBar
          :tools="tools"
          :active-tool-id="activeToolId"
          @select="emit('tool-select', $event)"
        />

        <PanoCanvas
          :dof="dof"
          :mode="activeViewMode"
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
