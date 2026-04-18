<script setup>
import PanoIconButton from "./PanoIconButton.vue";

defineProps({
  buttons: { type: Array, default: () => [] },
  fovValue: { type: String, default: "100°" },
});
</script>

<template>
  <div class="pano-floating-right">
    <span class="pano-fov-value" data-fov-value aria-label="Field of view">{{ fovValue }}</span>
    <PanoIconButton
      v-for="button in buttons"
      :key="button.action"
      :icon="button.icon"
      :label="button.label"
      :tip="button.tip"
      :pressed="button.pressed"
      :attrs="{ 'data-action': button.action, disabled: button.disabled === true }"
    />
  </div>
</template>
