<script setup>
defineProps({
  buttons: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="pano-floating-top">
    <div class="pano-view-toggle" data-selected="pano" :data-view-count="String(buttons.length)">
      <button
        v-for="button in buttons"
        :key="button.key"
        class="pano-view-btn"
        :class="button.extraClass"
        :data-view="button.key"
        :aria-pressed="button.pressed"
        :aria-label="button.label"
      >
        <span v-html="button.icon" />
        <span class="label">{{ button.label }}</span>
      </button>
    </div>
  </div>
</template>
