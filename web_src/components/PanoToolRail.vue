<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

const props = defineProps({
  type: { type: String, default: "stickers" },
});

const isCutout = computed(() => props.type === "cutout");
</script>

<template>
  <div class="pano-floating-left" data-tool-rail>
    <button class="pano-btn pano-btn-icon active" type="button" data-tool-mode="cursor" aria-label="Cursor" aria-pressed="true" data-tip="Cursor" v-html="ICON.cursor_tool" />
    <button class="pano-btn pano-btn-icon" type="button" data-tool-mode="paint" aria-label="Paint" aria-pressed="false" data-tip="Paint" v-html="ICON.palette_tool" />
    <button class="pano-btn pano-btn-icon" type="button" data-tool-mode="mask" aria-label="Mask" aria-pressed="false" data-tip="Mask" v-html="ICON.circle_dashed_tool" />
    <template v-if="isCutout">
      <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="add-image" aria-label="Add Image" data-tip="Add image" v-html="ICON.image" />
      <button class="pano-btn pano-btn-icon pano-btn-icon-accent" type="button" data-tool-ui-action="add-or-look" aria-label="Add Frame" data-tip="Add frame" v-html="ICON.plus_circle" />
    </template>
    <template v-else>
      <button class="pano-btn pano-btn-icon pano-btn-icon-accent" type="button" data-tool-ui-action="add" aria-label="Add Image" data-tip="Add image" v-html="ICON.image" />
    </template>
    <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="clear" aria-label="Clear All" data-tip="Clear all" v-html="ICON.clear" />
    <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="undo" aria-label="Undo" data-tip="Undo" v-html="ICON.undo" />
    <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="redo" aria-label="Redo" data-tip="Redo" v-html="ICON.redo" />
  </div>
</template>
