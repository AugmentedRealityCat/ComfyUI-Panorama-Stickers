<script setup>
import { computed, onBeforeUnmount, onMounted, watch } from "vue";
import { ICON } from "../icons.js";

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
const isCutout = computed(() => props.type === "cutout");
const sideTitleHtml = computed(() => (
  `<span class="pano-side-title-icon" aria-hidden="true">${ICON.globe}</span><span>${String(props.nodeTitle || "")}</span>`
));

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

function swatchStyle(swatch) {
  return { "--swatch": String(swatch?.cssColor || "") };
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
          <div class="pano-floating-left" data-tool-rail>
            <button class="pano-btn pano-btn-icon active" type="button" data-tool-mode="cursor" aria-label="Cursor" aria-pressed="true" data-tip="Cursor" v-html="ICON.cursor_tool" />
            <button class="pano-btn pano-btn-icon" type="button" data-tool-mode="paint" aria-label="Paint" aria-pressed="false" data-tip="Paint" v-html="ICON.palette_tool" />
            <button class="pano-btn pano-btn-icon" type="button" data-tool-mode="mask" aria-label="Mask" aria-pressed="false" data-tip="Mask" v-html="ICON.circle_dashed_tool" />
            <template v-if="isCutout">
              <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="add-image" aria-label="Add Image" data-tip="Add image" v-html="ICON.image" />
              <button class="pano-btn pano-btn-icon pano-btn-icon-accent" type="button" data-tool-ui-action="add-or-look" aria-label="Add Frame" data-tip="Add frame" v-html="ICON.plus_circle" />
            </template>
            <template v-else>
              <button class="pano-btn pano-btn-icon pano-btn-icon-accent" type="button" data-tool-ui-action="add" aria-label="Add Image" data-tip="Add image" v-html="ICON.image" />
            </template>
            <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="clear" aria-label="Clear All" data-tip="Clear all" v-html="ICON.clear" />
            <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="undo" aria-label="Undo" data-tip="Undo" v-html="ICON.undo" />
            <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="redo" aria-label="Redo" data-tip="Redo" v-html="ICON.redo" />
          </div>

          <div class="pano-paint-dock is-hidden" data-paint-dock>
            <div class="pano-paint-pane" data-paint-pane="paint">
              <div class="pano-paint-color-float" data-paint-color-row hidden>
                <button
                  v-for="swatch in paintSwatches"
                  :key="swatch.id"
                  class="pano-paint-color-dot"
                  type="button"
                  :data-paint-color-swatch="swatch.id"
                  :aria-label="swatch.label"
                  :style="swatchStyle(swatch)"
                />
                <button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color" />
                <div class="pano-paint-color-pop" data-paint-color-pop hidden>
                  <div class="pano-paint-color-pop-head">
                    <span class="pano-paint-color-preview" data-paint-color-preview />
                    <span class="pano-paint-color-pop-label">Custom Color</span>
                  </div>
                  <div class="pano-paint-color-field">
                    <div class="pano-paint-sv-panel" data-paint-color-sv>
                      <div class="pano-paint-sv-cursor" data-paint-color-sv-cursor />
                    </div>
                    <div class="pano-paint-hue-strip" data-paint-hue-strip>
                      <div class="pano-paint-hue-handle" data-paint-hue-handle />
                    </div>
                  </div>
                  <label class="pano-paint-color-field">
                    <span>Opacity</span>
                    <div class="pano-paint-alpha-wrap">
                      <input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider>
                      <span data-paint-alpha-value>100%</span>
                    </div>
                  </label>
                  <div class="pano-paint-color-history" data-paint-color-history-wrap>
                    <div class="pano-paint-color-history-list" data-paint-color-history />
                  </div>
                </div>
              </div>
              <div class="pano-paint-footer" data-paint-footer="paint">
                <div class="pano-paint-footer-group" data-paint-group="paint">
                  <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="pen" aria-label="Pen" data-tip="Pen" v-html="ICON.pencil_tool" />
                  <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="brush" aria-label="Soft Brush" data-tip="Soft Brush" v-html="ICON.spray_can_tool" />
                  <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="marker" aria-label="Marker" data-tip="Marker" v-html="ICON.highlighter_tool" />
                  <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="crayon" aria-label="Pastel" data-tip="Pastel" v-html="ICON.paintbrush_vertical_tool" />
                  <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="eraser" aria-label="Eraser" data-tip="Eraser" v-html="ICON.eraser_tool" />
                  <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="lasso_fill" aria-label="Lasso" data-tip="Lasso" v-html="ICON.lasso_tool" />
                </div>
                <div class="pano-paint-size-row" data-paint-size-row hidden>
                  <input class="pano-paint-size-slider" data-paint-size-slider type="range" min="1" max="120" step="1" value="10">
                  <span class="pano-paint-size-value" data-paint-size-value>10</span>
                </div>
                <div class="pano-paint-clear-row" data-paint-clear-row hidden>
                  <button class="pano-btn pano-btn-icon pano-paint-layer-clear" type="button" data-paint-layer-clear-current="paint" aria-label="Clear paint" data-tip="Clear paint" v-html="ICON.clear" />
                </div>
              </div>
            </div>

            <div class="pano-paint-pane" data-paint-pane="mask">
              <div class="pano-paint-footer" data-paint-footer="mask">
                <div class="pano-paint-footer-group" data-paint-group="mask">
                  <button class="pano-btn pano-btn-icon" type="button" data-mask-tool="pen" aria-label="Mask Pen" data-tip="Mask pen" v-html="ICON.pencil_tool" />
                  <button class="pano-btn pano-btn-icon" type="button" data-mask-tool="eraser" aria-label="Mask Eraser" data-tip="Mask eraser" v-html="ICON.eraser_tool" />
                  <button class="pano-btn pano-btn-icon" type="button" data-mask-tool="lasso_fill" aria-label="Mask Lasso" data-tip="Mask lasso" v-html="ICON.lasso_tool" />
                </div>
                <div class="pano-paint-size-row" data-paint-size-row hidden>
                  <input class="pano-paint-size-slider" data-paint-size-slider type="range" min="1" max="120" step="1" value="10">
                  <span class="pano-paint-size-value" data-paint-size-value>10</span>
                </div>
                <div class="pano-paint-clear-row" data-paint-clear-row>
                  <button class="pano-btn pano-btn-icon pano-paint-layer-clear" type="button" data-paint-layer-clear-current="mask" aria-label="Clear mask" data-tip="Clear mask" v-html="ICON.clear" />
                </div>
              </div>
            </div>
          </div>
        </template>

        <div class="pano-floating-top">
          <div class="pano-view-toggle" data-selected="pano" :data-view-count="isCutout ? '3' : '2'">
            <button class="pano-view-btn" data-view="pano" aria-pressed="true" aria-label="Panorama"><span v-html="ICON.pano" /><span class="label">Panorama</span></button>
            <button class="pano-view-btn" data-view="unwrap" aria-pressed="false" aria-label="Unwrap"><span v-html="ICON.unwrap" /><span class="label">Unwrap</span></button>
            <button v-if="isCutout" class="pano-view-btn pano-view-btn-icon" data-view="frame" aria-pressed="false" aria-label="Frame"><span v-html="ICON.camera" /><span>Frame</span></button>
          </div>
        </div>

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

      <div v-if="!hideSidebar" class="pano-side" data-side>
        <div class="pano-side-head">
          <div class="pano-side-title" v-html="sideTitleHtml" />
          <div class="pano-side-actions" />
        </div>
        <div class="pano-divider" />
      </div>
    </section>
  </div>
</template>
