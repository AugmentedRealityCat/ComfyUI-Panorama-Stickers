<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

const props = defineProps({
  type: { type: String, default: "stickers" },
});

const isCutout = computed(() => props.type === "cutout");
const viewButtons = computed(() => {
  const items = [
    { key: "pano", label: "Panorama", icon: ICON.pano, pressed: "true" },
    { key: "unwrap", label: "Unwrap", icon: ICON.unwrap, pressed: "false" },
  ];
  if (isCutout.value) {
    items.push({ key: "frame", label: "Frame", icon: ICON.camera, pressed: "false" });
  }
  return items;
});
</script>

<template>
  <div class="pano-floating-top">
    <div class="pano-view-toggle" data-selected="pano" :data-view-count="isCutout ? '3' : '2'">
      <button
        v-for="button in viewButtons"
        :key="button.key"
        class="pano-view-btn"
        :class="{ 'pano-view-btn-icon': button.key === 'frame' }"
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
