<script setup>
import PanoIconButton from "./PanoIconButton.vue";

defineProps({
  buttons: { type: Array, default: () => [] },
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
