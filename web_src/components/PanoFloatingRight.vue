<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

const props = defineProps({
  previewMode: { type: Boolean, default: false },
});

const buttons = computed(() => {
  const items = [
    {
      action: "reset-view",
      label: "Reset View",
      tip: "Reset view",
      pressed: null,
      icon: ICON.reset,
    },
    {
      action: "toggle-grid",
      label: "Hide Grid",
      tip: "Hide grid",
      pressed: "true",
      icon: ICON.eye,
    },
  ];
  if (props.previewMode) {
    items.push({
      action: "toggle-fullscreen",
      label: "Fullscreen",
      tip: "Fullscreen",
      pressed: null,
      icon: ICON.fullscreen,
    });
  }
  return items;
});
</script>

<template>
  <div class="pano-floating-right">
    <span class="pano-fov-value" data-fov-value aria-label="Field of view">100°</span>
    <button
      v-for="button in buttons"
      :key="button.action"
      class="pano-btn pano-btn-icon"
      :data-action="button.action"
      :aria-label="button.label"
      :data-tip="button.tip"
      :aria-pressed="button.pressed"
      v-html="button.icon"
    />
  </div>
</template>
