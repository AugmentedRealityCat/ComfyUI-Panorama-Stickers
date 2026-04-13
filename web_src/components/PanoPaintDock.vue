<script setup>
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";

defineProps({
  paintSwatches: { type: Array, default: () => [] },
  panes: { type: Array, default: () => [] },
});

function swatchStyle(swatch) {
  return { "--swatch": String(swatch?.cssColor || "") };
}

</script>

<template>
  <div class="pano-paint-dock is-hidden" data-paint-dock>
    <div
      v-for="pane in panes"
      :key="pane.key"
      class="pano-paint-pane"
      :data-paint-pane="pane.key"
    >
      <div v-if="pane.showColorFloat" class="pano-paint-color-float" data-paint-color-row hidden>
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
          <PanoIconButton
            v-for="tool in pane.tools"
            :key="`${pane.key}-${tool.key}`"
            :icon="tool.icon"
            :label="tool.label"
            :tip="tool.tip"
            :attrs="{ [tool.attr]: tool.key }"
          />
        </div>
        <div class="pano-paint-size-row" data-paint-size-row hidden>
          <input class="pano-paint-size-slider" data-paint-size-slider type="range" min="1" max="120" step="1" value="10">
          <span class="pano-paint-size-value" data-paint-size-value>10</span>
        </div>
        <div class="pano-paint-clear-row" data-paint-clear-row :hidden="pane.clearHidden">
          <PanoIconButton
            :icon="ICON.clear"
            :label="pane.clearLabel"
            :tip="pane.clearTip"
            extra-class="pano-paint-layer-clear"
            :attrs="{ 'data-paint-layer-clear-current': pane.clearTarget }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
