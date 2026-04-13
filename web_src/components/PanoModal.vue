<script setup>
import { computed, onBeforeUnmount, onMounted, watch } from "vue";
import { ICON } from "../icons.js";
import PanoPaintDock from "./PanoPaintDock.vue";
import PanoSidePanel from "./PanoSidePanel.vue";
import PanoToolRail from "./PanoToolRail.vue";
import PanoViewToggle from "./PanoViewToggle.vue";

const props = defineProps({
  open: { type: Boolean, default: true },
  type: { type: String, default: "stickers" },
  readOnly: { type: Boolean, default: false },
  hideSidebar: { type: Boolean, default: false },
  nodeTitle: { type: String, default: "Panorama Stickers" },
  paintSwatches: { type: Array, default: () => [] },
});

const emit = defineEmits(["close"]);
let previousOverflow = "";

const previewMode = computed(() => props.readOnly === true);

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

onMounted(() => {
  if (props.open) lockBody();
  document.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  unlockBody();
  document.removeEventListener("keydown", onKeydown);
});

watch(() => props.open, (nextOpen) => (nextOpen ? lockBody() : unlockBody()));
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
          <PanoToolRail :type="type" />
          <PanoPaintDock :paint-swatches="paintSwatches" />
        </template>

        <PanoViewToggle :type="type" />

        <div class="pano-floating-right">
          <span class="pano-fov-value" data-fov-value aria-label="Field of view">100°</span>
          <button class="pano-btn pano-btn-icon" data-action="reset-view" aria-label="Reset View" data-tip="Reset view" v-html="ICON.reset" />
          <button class="pano-btn pano-btn-icon" data-action="toggle-grid" aria-label="Hide Grid" data-tip="Hide grid" aria-pressed="true" v-html="ICON.eye" />
          <button v-if="previewMode" class="pano-btn pano-btn-icon" data-action="toggle-fullscreen" aria-label="Fullscreen" data-tip="Fullscreen" v-html="ICON.fullscreen" />
        </div>

        <div class="pano-selection-menu" data-selection-menu />
        <button class="pano-btn pano-btn-icon pano-output-preview-toggle" data-action="toggle-output-preview-size" aria-label="Expand Preview" data-tip="Expand preview" style="display:none" v-html="ICON.fullscreen" />
        <div class="pano-tooltip" data-tooltip />
      </div>

      <PanoSidePanel v-if="!hideSidebar" :node-title="nodeTitle" />
    </section>
  </div>
</template>
