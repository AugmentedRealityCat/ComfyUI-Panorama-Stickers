<script setup>
import { onBeforeUnmount, onMounted, watch } from "vue";
import Inspector from "./Inspector.vue";
import PanoCanvas from "./PanoCanvas.vue";
import ToolBar from "./ToolBar.vue";

const props = defineProps({
  open: { type: Boolean, default: true },
  dof: { type: String, default: "3" },
  tools: { type: Array, default: () => [] },
  panels: { type: Array, default: () => [] },
  viewModes: { type: Array, default: () => [] },
  activeViewMode: { type: String, default: "panorama" },
  activeToolId: { type: String, default: "" },
  backgroundSource: { type: Object, default: null },
  scene: { type: Object, default: () => ({ stickers: [], selectedId: null, hoveredId: null }) },
  textures: { type: Array, default: () => [] },
});

const emit = defineEmits(["close", "ready", "tool-select", "view-select", "interaction"]);

let previousOverflow = "";

function onKeydown(e) {
  if (e.key === "Escape") emit("close");
}

function lockBody() {
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
}

function unlockBody() {
  document.body.style.overflow = previousOverflow;
}

onMounted(() => {
  if (props.open) lockBody();
  document.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  unlockBody();
  document.removeEventListener("keydown", onKeydown);
});

watch(() => props.open, (next) => next ? lockBody() : unlockBody());

function viewToggleSelected(mode) {
  return mode === "panorama" ? "pano" : mode;
}
</script>

<template>
  <div v-if="open" class="pano-modal-overlay" @click.self="emit('close')">
    <section class="pano-modal" role="dialog" aria-modal="true">

      <!-- 左: キャンバスエリア -->
      <div class="pano-stage-wrap">

        <!-- ビュートグル (左上) -->
        <div
          v-if="viewModes.length"
          class="pano-floating-top"
        >
          <div
            class="pano-view-toggle"
            :data-view-count="String(viewModes.length)"
            :data-selected="viewToggleSelected(activeViewMode)"
          >
            <button
              v-for="vm in viewModes"
              :key="vm.id"
              type="button"
              class="pano-view-btn"
              :data-view="viewToggleSelected(vm.id)"
              @click="emit('view-select', vm.id)"
            >
              <span class="label">{{ vm.label }}</span>
            </button>
          </div>
        </div>

        <!-- ツールバー (左中央) -->
        <ToolBar
          :tools="tools"
          :active-tool-id="activeToolId"
          @select="emit('tool-select', $event)"
        />

        <!-- キャンバス本体 -->
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

      <!-- 右: インスペクタ -->
      <Inspector
        :panels="panels"
        @close="emit('close')"
      />

    </section>
  </div>
</template>
