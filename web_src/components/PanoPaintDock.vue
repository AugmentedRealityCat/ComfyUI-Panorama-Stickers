<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

defineProps({
  paintSwatches: { type: Array, default: () => [] },
});

function swatchStyle(swatch) {
  return { "--swatch": String(swatch?.cssColor || "") };
}

const paneDefs = computed(() => [
  {
    key: "paint",
    footer: "paint",
    group: "paint",
    clearTarget: "paint",
    clearLabel: "Clear paint",
    clearTip: "Clear paint",
    clearHidden: true,
    tools: [
      { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ICON.pencil_tool },
      { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ICON.spray_can_tool },
      { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ICON.highlighter_tool },
      { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ICON.paintbrush_vertical_tool },
      { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ICON.eraser_tool },
      { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ICON.lasso_tool },
    ],
  },
  {
    key: "mask",
    footer: "mask",
    group: "mask",
    clearTarget: "mask",
    clearLabel: "Clear mask",
    clearTip: "Clear mask",
    clearHidden: false,
    tools: [
      { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ICON.pencil_tool },
      { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ICON.eraser_tool },
      { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ICON.lasso_tool },
    ],
  },
]);
</script>

<template>
  <div class="pano-paint-dock is-hidden" data-paint-dock>
    <div
      v-for="pane in paneDefs"
      :key="pane.key"
      class="pano-paint-pane"
      :data-paint-pane="pane.key"
    >
      <div v-if="pane.key === 'paint'" class="pano-paint-color-float" data-paint-color-row hidden>
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
      <div class="pano-paint-footer" :data-paint-footer="pane.footer">
        <div class="pano-paint-footer-group" :data-paint-group="pane.group">
          <button
            v-for="tool in pane.tools"
            :key="`${pane.key}-${tool.key}`"
            class="pano-btn pano-btn-icon"
            type="button"
            :[tool.attr]="tool.key"
            :aria-label="tool.label"
            :data-tip="tool.tip"
            v-html="tool.icon"
          />
        </div>
        <div class="pano-paint-size-row" data-paint-size-row hidden>
          <input class="pano-paint-size-slider" data-paint-size-slider type="range" min="1" max="120" step="1" value="10">
          <span class="pano-paint-size-value" data-paint-size-value>10</span>
        </div>
        <div class="pano-paint-clear-row" data-paint-clear-row :hidden="pane.clearHidden">
          <button
            class="pano-btn pano-btn-icon pano-paint-layer-clear"
            type="button"
            data-paint-layer-clear-current
            :data-paint-layer-clear-current="pane.clearTarget"
            :aria-label="pane.clearLabel"
            :data-tip="pane.clearTip"
            v-html="ICON.clear"
          />
        </div>
      </div>
    </div>
  </div>
</template>
