<script setup>
import { ICON } from "../icons.js";

defineProps({
  paintSwatches: { type: Array, default: () => [] },
});

function swatchStyle(swatch) {
  return { "--swatch": String(swatch?.cssColor || "") };
}
</script>

<template>
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
