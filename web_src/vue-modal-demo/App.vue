<script setup>
import { computed, onMounted, ref } from "vue";
import { ICON } from "../icons.js";
import PanoModal from "../components/PanoModal.vue";

const isOpen         = ref(true);
const activeViewMode = ref("panorama");
const activeTool     = ref("cursor");
const fov            = ref(100);
const gridVisible    = ref(true);

// SVGを直接渡す
const viewModes = [
  { id: "panorama", label: "Panorama", icon: ICON.pano   },
  { id: "unwrap",   label: "Unwrap",   icon: ICON.unwrap },
];

const tools = [
  { id: "cursor", label: "Cursor",    icon: ICON.cursor_tool        },
  { id: "paint",  label: "Paint",     icon: ICON.palette_tool       },
  { id: "mask",   label: "Mask",      icon: ICON.circle_dashed_tool },
  { id: "add",    label: "Add Image", icon: ICON.image, accent: true },
  { id: "clear",  label: "Clear All", icon: ICON.clear              },
  { id: "undo",   label: "Undo",      icon: ICON.undo               },
  { id: "redo",   label: "Redo",      icon: ICON.redo               },
];

// インスペクタ: 選択中のスティッカープロパティのみ
const selectedSticker = ref(null);

const panels = computed(() => {
  if (!selectedSticker.value) return [];
  return [
    {
      id: "sticker",
      title: "Sticker",
      meta: selectedSticker.value.id,
      fields: [
        { id: "yaw",     label: "Yaw",     kind: "range", min: -180, max: 180, step: 0.1, value: Math.round(selectedSticker.value.yaw   ?? 0) },
        { id: "pitch",   label: "Pitch",   kind: "range", min: -90,  max: 90,  step: 0.1, value: Math.round(selectedSticker.value.pitch ?? 0) },
        { id: "scale",   label: "Scale",   kind: "range", min: 0.1,  max: 4,   step: 0.01, value: selectedSticker.value.scale ?? 1          },
        { id: "opacity", label: "Opacity", kind: "range", min: 0,    max: 100, step: 1,  value: selectedSticker.value.opacity ?? 100        },
      ],
    },
  ];
});

// デモ用背景（単純グリッド）
const backgroundSource = ref(null);

function createDemoBackground() {
  const c = document.createElement("canvas");
  c.width = 2048; c.height = 1024;
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.strokeStyle = "rgba(255,255,255,0.04)";
  ctx.lineWidth = 1;
  for (let x = 0; x < c.width; x += 64) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,c.height); ctx.stroke(); }
  for (let y = 0; y < c.height; y += 64) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(c.width,y); ctx.stroke(); }
  ctx.strokeStyle = "rgba(0,112,243,0.2)"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, c.height/2); ctx.lineTo(c.width, c.height/2); ctx.stroke();
  backgroundSource.value = c;
}

onMounted(() => { createDemoBackground(); });

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
