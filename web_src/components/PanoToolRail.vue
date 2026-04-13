<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

const props = defineProps({
  type: { type: String, default: "stickers" },
});

const isCutout = computed(() => props.type === "cutout");
const toolButtons = computed(() => {
  const base = [
    {
      key: "cursor",
      actionType: "mode",
      attr: "data-tool-mode",
      value: "cursor",
      label: "Cursor",
      tip: "Cursor",
      active: true,
      accent: false,
      icon: ICON.cursor_tool,
      pressed: "true",
    },
    {
      key: "paint",
      actionType: "mode",
      attr: "data-tool-mode",
      value: "paint",
      label: "Paint",
      tip: "Paint",
      active: false,
      accent: false,
      icon: ICON.palette_tool,
      pressed: "false",
    },
    {
      key: "mask",
      actionType: "mode",
      attr: "data-tool-mode",
      value: "mask",
      label: "Mask",
      tip: "Mask",
      active: false,
      accent: false,
      icon: ICON.circle_dashed_tool,
      pressed: "false",
    },
  ];
  const insert = isCutout.value
    ? [
        {
          key: "add-image",
          actionType: "ui",
          attr: "data-tool-ui-action",
          value: "add-image",
          label: "Add Image",
          tip: "Add image",
          accent: false,
          icon: ICON.image,
        },
        {
          key: "add-or-look",
          actionType: "ui",
          attr: "data-tool-ui-action",
          value: "add-or-look",
          label: "Add Frame",
          tip: "Add frame",
          accent: true,
          icon: ICON.plus_circle,
        },
      ]
    : [
        {
          key: "add",
          actionType: "ui",
          attr: "data-tool-ui-action",
          value: "add",
          label: "Add Image",
          tip: "Add image",
          accent: true,
          icon: ICON.image,
        },
      ];
  const tail = [
    {
      key: "clear",
      actionType: "ui",
      attr: "data-tool-ui-action",
      value: "clear",
      label: "Clear All",
      tip: "Clear all",
      accent: false,
      icon: ICON.clear,
    },
    {
      key: "undo",
      actionType: "ui",
      attr: "data-tool-ui-action",
      value: "undo",
      label: "Undo",
      tip: "Undo",
      accent: false,
      icon: ICON.undo,
    },
    {
      key: "redo",
      actionType: "ui",
      attr: "data-tool-ui-action",
      value: "redo",
      label: "Redo",
      tip: "Redo",
      accent: false,
      icon: ICON.redo,
    },
  ];
  return [...base, ...insert, ...tail];
});
</script>

<template>
  <div class="pano-floating-left" data-tool-rail>
    <button
      v-for="button in toolButtons"
      :key="button.key"
      class="pano-btn pano-btn-icon"
      :class="{
        active: button.active,
        'pano-btn-icon-accent': button.accent,
      }"
      type="button"
      :[button.attr]="button.value"
      :aria-label="button.label"
      :aria-pressed="button.pressed"
      :data-tip="button.tip"
      v-html="button.icon"
    />
  </div>
</template>
