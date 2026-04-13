<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";

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
    <PanoIconButton
      v-for="button in buttons"
      :key="button.action"
      :icon="button.icon"
      :label="button.label"
      :tip="button.tip"
      :pressed="button.pressed"
      :attrs="{ 'data-action': button.action }"
    />
  </div>
</template>
