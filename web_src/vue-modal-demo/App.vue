<script setup>
import { computed, onMounted, ref } from "vue";
import PanoModal from "../components/PanoModal.vue";
import { useComfyBridge } from "../composables/useComfyBridge.js";
import { usePaint } from "../composables/usePaint.js";

const bridge = useComfyBridge({
  stateJson: JSON.stringify({
    stickers: [],
    active: {
      selected_sticker_id: null,
    },
  }, null, 2),
});
const paint = usePaint();
const isOpen = ref(true);
const backgroundSource = ref(null);
const viewState = ref({ yaw: 0, pitch: 0, fov: 100 });
const activeViewMode = ref("panorama");
const activeToolId = computed(() => paint.activeTool.value);

const tools = [
  { id: "select", label: "Select", glyph: "S" },
  { id: "brush", label: "Brush", glyph: "B" },
  { id: "erase", label: "Erase", glyph: "E" },
  { id: "view", label: "View", glyph: "V" },
];

const viewModes = [
  { id: "panorama", label: "Pano" },
  { id: "unwrap", label: "Unwrap" },
];

const panels = computed(() => [
  {
    id: "session",
    title: "Session",
    meta: "Standalone",
    fields: [
      { id: "dof", label: "DOF", value: "3DOF shell", wide: true },
      { id: "tool", label: "Tool", value: tools.find((tool) => tool.id === activeToolId.value)?.label || "Select", wide: true },
      { id: "mode", label: "Mode", value: viewModes.find((mode) => mode.id === activeViewMode.value)?.label || "Pano", wide: true },
      { id: "history", label: "Undo", value: String(paint.history.value.entries.length), wide: true },
    ],
    note: "ComfyUI bridge is stubbed in this PR. registerExtension integration stays for the next branch.",
  },
  {
    id: "view",
    title: "View",
    meta: "Read-only",
    fields: [
      { id: "yaw", label: "Yaw", kind: "range", min: -180, max: 180, step: 1, value: Math.round(viewState.value.yaw) },
      { id: "pitch", label: "Pitch", kind: "range", min: -90, max: 90, step: 1, value: Math.round(viewState.value.pitch) },
      { id: "fov", label: "FOV", kind: "range", min: 35, max: 140, step: 1, value: Math.round(viewState.value.fov), wide: false },
      { id: "json", label: "State", kind: "textarea", value: bridge.stateJson.value, wide: true },
    ],
  },
]);

const scene = computed(() => ({
  stickers: bridge.parsedState.value.stickers || [],
  selectedId: bridge.parsedState.value.active?.selected_sticker_id || null,
  hoveredId: null,
}));

function setTool(toolId) {
  paint.setActiveTool(toolId);
}

function syncView(nextView) {
  viewState.value = {
    yaw: Number(nextView?.yaw ?? 0),
    pitch: Number(nextView?.pitch ?? 0),
    fov: Number(nextView?.fov ?? 100),
  };
}

function setViewMode(nextMode) {
  activeViewMode.value = String(nextMode || "panorama");
}

function createDemoBackground() {
  const tokenSource = document.querySelector(".pano-modal") || document.documentElement;
  const style = window.getComputedStyle(tokenSource);
  const surface0 = style.getPropertyValue("--pano-surface-0").trim();
  const surface2 = style.getPropertyValue("--pano-surface-2").trim();
  const surface3 = style.getPropertyValue("--pano-surface-3").trim();
  const accent = style.getPropertyValue("--pano-accent").trim();
  if (!surface0 || !surface2 || !surface3 || !accent) return;

  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, surface0);
  gradient.addColorStop(0.55, surface2);
  gradient.addColorStop(1, accent);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = surface3;
  for (let i = 0; i < 32; i += 1) {
    const x = (canvas.width / 32) * i;
    ctx.fillRect(x, 0, 2, canvas.height);
  }
  ctx.globalAlpha = 0.45;
  ctx.fillStyle = accent;
  for (let i = 0; i < 12; i += 1) {
    const y = (canvas.height / 12) * i;
    ctx.fillRect(0, y, canvas.width, 2);
  }
  ctx.globalAlpha = 1;
  backgroundSource.value = canvas;
}

onMounted(() => {
  createDemoBackground();
});
</script>

<template>
  <div class="pano-vue-app">
    <PanoModal
      :open="isOpen"
      title="Panorama Stickers"
      dof="3"
      :tools="tools"
      :view-modes="viewModes"
      :active-view-mode="activeViewMode"
      :panels="panels"
      :active-tool-id="activeToolId"
      :background-source="backgroundSource"
      :scene="scene"
      @close="isOpen = false"
      @interaction="syncView"
      @tool-select="setTool"
      @view-select="setViewMode"
    />

    <div v-if="!isOpen" class="pano-vue-launch">
      <button type="button" class="pano-btn pano-btn-primary pano-btn-texticon" @click="isOpen = true">
        <span class="label">Reopen Vue modal</span>
      </button>
    </div>
  </div>
</template>
