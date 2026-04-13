<script setup>
import { ICON } from "../icons.js";

const props = defineProps({
  tools: { type: Array, default: () => [] },
  activeToolId: { type: String, default: "" },
});

const emit = defineEmits(["select"]);

const TOOL_ICONS = {
  cursor:  ICON.cursor_tool,
  paint:   ICON.palette_tool,
  mask:    ICON.circle_dashed_tool,
  add:     ICON.image,
  clear:   ICON.clear,
  undo:    ICON.undo,
  redo:    ICON.redo,
};
</script>

<template>
  <div class="pano-floating-left">
    <button
      v-for="tool in tools"
      :key="tool.id"
      type="button"
      class="pano-btn pano-btn-icon"
      :class="{
        active: tool.id === activeToolId,
        'pano-btn-icon-accent': tool.accent,
      }"
      :aria-label="tool.label"
      :aria-pressed="tool.id === activeToolId"
      :disabled="tool.disabled"
      :data-tip="tool.label"
      @click="emit('select', tool.id)"
      v-html="TOOL_ICONS[tool.icon ?? tool.id] ?? TOOL_ICONS.cursor"
    />
  </div>
</template>
