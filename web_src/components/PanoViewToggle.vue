<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

const props = defineProps({
  type: { type: String, default: "stickers" },
});

const isCutout = computed(() => props.type === "cutout");
</script>

<template>
  <div class="pano-floating-top">
    <div class="pano-view-toggle" data-selected="pano" :data-view-count="isCutout ? '3' : '2'">
      <button class="pano-view-btn" data-view="pano" aria-pressed="true" aria-label="Panorama"><span v-html="ICON.pano" /><span class="label">Panorama</span></button>
      <button class="pano-view-btn" data-view="unwrap" aria-pressed="false" aria-label="Unwrap"><span v-html="ICON.unwrap" /><span class="label">Unwrap</span></button>
      <button v-if="isCutout" class="pano-view-btn pano-view-btn-icon" data-view="frame" aria-pressed="false" aria-label="Frame"><span v-html="ICON.camera" /><span>Frame</span></button>
    </div>
  </div>
</template>
