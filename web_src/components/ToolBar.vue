<script setup>
function iconName(tool) {
  const id = String(tool?.icon || tool?.id || "");
  if (id === "brush") return "brush";
  if (id === "erase") return "erase";
  if (id === "view") return "view";
  return "select";
}

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
      <svg v-if="iconName(tool) === 'select'" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 4v14l4-4 4 6 2-1-4-6h6z" />
      </svg>
      <svg v-else-if="iconName(tool) === 'brush'" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 5l5 5" />
        <path d="M12 7l5 5" />
        <path d="M4 20c2 0 4-1 5-3l6-6-4-4-6 6c-2 1-3 3-3 5 0 1 1 2 2 2z" />
      </svg>
      <svg v-else-if="iconName(tool) === 'erase'" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 15l7-7 6 6-4 4H9z" />
        <path d="M4 18h16" />
      </svg>
      <svg v-else viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    </button>
  </div>
</template>
