<script setup>
defineProps({
  model: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div
    v-if="model.visible === true"
    class="pano-canvas-confirm"
    data-confirm-overlay
    role="presentation"
  >
    <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" :aria-label="model.title || 'Confirm'">
      <div class="pano-canvas-confirm-title">{{ model.title }}</div>
      <div class="pano-canvas-confirm-text">{{ model.text }}</div>
      <div class="pano-canvas-confirm-actions">
        <button class="pano-btn" type="button" data-action="confirm-cancel">Cancel</button>
        <button class="pano-btn pano-btn-primary" type="button" data-action="confirm-accept">{{ model.confirmLabel || "Confirm" }}</button>
      </div>
    </div>
  </div>
</template>
