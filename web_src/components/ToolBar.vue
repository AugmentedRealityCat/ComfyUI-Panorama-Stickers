<script setup>
defineProps({
  tools: {
    type: Array,
    default: () => [],
  },
  activeToolId: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["select"]);
</script>

<template>
  <div class="pano-floating-left" aria-label="Tool palette">
    <button
      v-for="tool in tools"
      :key="tool.id"
      type="button"
      class="pano-btn pano-btn-icon"
      :class="{ active: tool.id === activeToolId }"
      :title="tool.label"
      @click="emit('select', tool.id)"
    >
      <span class="pano-vue-tool-glyph">{{ tool.glyph || tool.label?.slice?.(0, 1) || "?" }}</span>
    </button>
  </div>
</template>
