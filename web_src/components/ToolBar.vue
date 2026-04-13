<script setup>
defineProps({
  tools:        { type: Array,  default: () => [] },
  activeToolId: { type: String, default: "" },
});
defineEmits(["select"]);
</script>

<template>
  <div class="pano-floating-left">
    <button
      v-for="tool in tools"
      :key="tool.id"
      type="button"
      class="pano-btn pano-btn-icon"
      :class="{ active: tool.id === activeToolId, 'pano-btn-icon-accent': tool.accent }"
      :aria-label="tool.label"
      :aria-pressed="tool.id === activeToolId"
      :disabled="tool.disabled ?? false"
      :data-tip="tool.label"
      v-html="tool.icon"
      @click="$emit('select', tool.id)"
    />
  </div>
</template>
