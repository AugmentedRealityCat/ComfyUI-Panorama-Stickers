<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

const props = defineProps({
  nodeTitle: { type: String, default: "Panorama Stickers" },
});

const sideTitleHtml = computed(() => (
  `<span class="pano-side-title-icon" aria-hidden="true">${ICON.globe}</span><span>${String(props.nodeTitle || "")}</span>`
));
</script>

<template>
  <div class="pano-side" data-side>
    <div class="pano-side-head">
      <div class="pano-side-title" v-html="sideTitleHtml" />
      <div class="pano-side-actions" />
    </div>
    <div class="pano-divider" />
  </div>
</template>
