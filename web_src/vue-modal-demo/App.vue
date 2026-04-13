<script setup>
import { computed, onMounted, ref } from "vue";
import { ICON } from "../icons.js";
import PanoModal from "../components/PanoModal.vue";

// --- ビュー状態 ---
const isOpen       = ref(true);
const activeViewMode = ref("panorama");
const activeTool   = ref("cursor");
const fov          = ref(100);
const gridVisible  = ref(true);

// --- ビューモード ---
const viewModes = [
  { id: "panorama", label: "Panorama", icon: ICON.pano },
  { id: "unwrap",   label: "Unwrap",   icon: ICON.unwrap },
];

// --- ツール (Stickersノード用) ---
const tools = [
  { id: "cursor", label: "Cursor",     icon: "cursor" },
  { id: "paint",  label: "Paint",      icon: "paint" },
  { id: "mask",   label: "Mask",       icon: "mask" },
  { id: "add",    label: "Add Image",  icon: "add", accent: true },
  { id: "clear",  label: "Clear All",  icon: "clear" },
  { id: "undo",   label: "Undo",       icon: "undo" },
  { id: "redo",   label: "Redo",       icon: "redo" },
];

// --- インスペクタパネル (Stickersノード用) ---
const selectedSticker = ref(null);

const panels = computed(() => {
  const base = [
    {
      id: "output",
      title: "Output",
      fields: [
        { id: "preset",  label: "Preset",  kind: "picker", value: "2048 × 1024", wide: true },
        { id: "bgcolor", label: "BG Color",kind: "picker", value: "Green (#00ff00)", wide: true },
      ],
    },
    {
      id: "paint",
      title: "Paint",
      fields: [
        { id: "opacity",  label: "Opacity",  kind: "range", min: 0, max: 100, step: 1, value: 100 },
        { id: "hardness", label: "Hardness", kind: "range", min: 0, max: 100, step: 1, value: 80 },
        { id: "flow",     label: "Flow",     kind: "range", min: 1, max: 100, step: 1, value: 100 },
      ],
    },
  ];

  if (selectedSticker.value) {
    base.unshift({
      id: "sticker",
      title: "Sticker",
      meta: selectedSticker.value.id,
      fields: [
        { id: "yaw",   label: "Yaw",   kind: "range", min: -180, max: 180, step: 0.1, value: Math.round(selectedSticker.value.yaw) },
        { id: "pitch", label: "Pitch", kind: "range", min: -90,  max: 90,  step: 0.1, value: Math.round(selectedSticker.value.pitch) },
        { id: "scale", label: "Scale", kind: "range", min: 0.1,  max: 4,   step: 0.01, value: selectedSticker.value.scale ?? 1 },
      ],
    });
  }

  return base;
});

// --- デモ用背景 ---
const backgroundSource = ref(null);

function createDemoBackground() {
  const canvas = document.createElement("canvas");
  canvas.width  = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  // 単色ベース
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // グリッド線
  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 64) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 64) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }
  // 地平線ヒント
  ctx.strokeStyle = "rgba(0,112,243,0.18)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
  backgroundSource.value = canvas;
}

onMounted(() => { createDemoBackground(); });

// --- イベントハンドラ ---
function onInteraction(view) {
  if (view?.fov != null) fov.value = view.fov;
}
</script>

<template>
  <div class="pano-vue-app">
    <PanoModal
      :open="isOpen"
      dof="3"
      :tools="tools"
      :view-modes="viewModes"
      :active-view-mode="activeViewMode"
      :active-tool-id="activeTool"
      :panels="panels"
      :fov="fov"
      :grid-visible="gridVisible"
      :background-source="backgroundSource"
      @close="isOpen = false"
      @tool-select="activeTool = $event"
      @view-select="activeViewMode = $event"
      @interaction="onInteraction"
      @reset-view="fov = 100"
      @toggle-grid="gridVisible = !gridVisible"
    >
      <template #inspector-title>Stickers</template>
    </PanoModal>

    <div v-if="!isOpen" style="position:fixed;right:12px;bottom:12px;">
      <button type="button" class="pano-btn pano-btn-primary pano-btn-texticon" @click="isOpen = true">
        <span class="label">Open Modal</span>
      </button>
    </div>
  </div>
</template>
