<script setup>
import { computed, onBeforeUnmount, onMounted, watch } from "vue";
import { ICON } from "../icons.js";
import PanoFloatingRight from "./PanoFloatingRight.vue";
import PanoPaintDock from "./PanoPaintDock.vue";
import PanoSidePanel from "./PanoSidePanel.vue";
import PanoToolRail from "./PanoToolRail.vue";
import PanoViewToggle from "./PanoViewToggle.vue";
import { buildModalShellPreset } from "../modal_shell_presets.js";

const props = defineProps({
  open: { type: Boolean, default: true },
  type: { type: String, default: "stickers" },
  readOnly: { type: Boolean, default: false },
  hideSidebar: { type: Boolean, default: false },
  nodeTitle: { type: String, default: "Panorama Stickers" },
  paintSwatches: { type: Array, default: () => [] },
  shellPreset: { type: Object, default: null },
});

const emit = defineEmits(["close"]);
let previousOverflow = "";

const previewMode = computed(() => props.readOnly === true);
const shellPreset = computed(() => props.shellPreset || buildModalShellPreset(props.type));
const floatingButtons = computed(() => {
  const base = Array.isArray(shellPreset.value?.floatingButtons) ? shellPreset.value.floatingButtons.slice() : [];
  if (previewMode.value) {
    base.push({
      action: "toggle-fullscreen",
      label: "Fullscreen",
      tip: "Fullscreen",
      pressed: null,
      icon: ICON.fullscreen,
    });
  }
  return base;
});

function onKeydown(event) {
  if (event.key === "Escape") emit("close");
}

function lockBody() {
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
}

function unlockBody() {
  document.body.style.overflow = previousOverflow;
}

function setOpenSideEffects(isOpen) {
  document.removeEventListener("keydown", onKeydown);
  if (isOpen) {
    lockBody();
    document.addEventListener("keydown", onKeydown);
  } else {
    unlockBody();
  }
}

onMounted(() => {
  setOpenSideEffects(props.open);
});

onBeforeUnmount(() => {
  unlockBody();
  document.removeEventListener("keydown", onKeydown);
});

watch(() => props.open, (nextOpen) => {
  setOpenSideEffects(nextOpen);
});
</script>

<template>
  <div v-if="open" class="pano-modal-overlay" @click.self="emit('close')">
    <section class="pano-modal" role="dialog" aria-modal="true" :aria-label="nodeTitle">
      <div class="pano-stage-wrap">
        <canvas class="pano-stage" width="1600" height="800" />
      <div class="pano-stage-drop-hint" aria-hidden="true">
        <div class="pano-stage-drop-hint-text">Drag and drop image here</div>
      </div>

        <template v-if="!previewMode">
          <PanoToolRail :buttons="shellPreset.toolButtons || []" />
          <PanoPaintDock :paint-swatches="paintSwatches" :panes="shellPreset.paintPanes || []" />
        </template>

        <PanoViewToggle :buttons="shellPreset.viewButtons || []" />

        <PanoFloatingRight :buttons="floatingButtons" />

        <div class="pano-selection-menu" data-selection-menu />
        <button class="pano-btn pano-btn-icon pano-output-preview-toggle" data-action="toggle-output-preview-size" aria-label="Expand Preview" data-tip="Expand preview" style="display:none" v-html="ICON.fullscreen" />
        <div class="pano-tooltip" data-tooltip />
      </div>

      <PanoSidePanel v-if="!hideSidebar" :node-title="nodeTitle" />
    </section>
  </div>
</template>
