<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { ICON } from "../icons.js";
import Inspector from "./Inspector.vue";
import PanoCanvas from "./PanoCanvas.vue";
import ToolBar from "./ToolBar.vue";

const props = defineProps({
  open:           { type: Boolean, default: true },
  dof:            { type: String,  default: "3" },
  tools:          { type: Array,   default: () => [] },
  panels:         { type: Array,   default: () => [] },
  viewModes:      { type: Array,   default: () => [] },
  activeViewMode: { type: String,  default: "panorama" },
  activeToolId:   { type: String,  default: "" },
  fov:            { type: Number,  default: 100 },
  gridVisible:    { type: Boolean, default: true },
  backgroundSource: { type: Object, default: null },
  scene:          { type: Object,  default: () => ({ stickers: [], selectedId: null, hoveredId: null }) },
  textures:       { type: Array,   default: () => [] },
});

const emit = defineEmits([
  "close", "ready", "tool-select", "view-select", "interaction",
  "reset-view", "toggle-grid", "toggle-fullscreen",
]);

let previousOverflow = "";

function onKeydown(e) {
  if (e.key === "Escape") emit("close");
}
function lockBody() {
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
}
function unlockBody() {
  document.body.style.overflow = previousOverflow;
}

onMounted(() => {
  if (props.open) lockBody();
  document.addEventListener("keydown", onKeydown);
});
onBeforeUnmount(() => {
  unlockBody();
  document.removeEventListener("keydown", onKeydown);
});
watch(() => props.open, (next) => next ? lockBody() : unlockBody());

function viewToggleSelected(modeId) {
  return modeId === "panorama" ? "pano" : modeId;
}
function viewDataAttr(modes) {
  return String(modes.length);
}
</script>

<template>
  <div v-if="open" class="pano-modal-overlay" @click.self="emit('close')">
    <section class="pano-modal" role="dialog" aria-modal="true">

      <!-- 左: キャンバスエリア -->
      <div class="pano-stage-wrap">

        <!-- ビュートグル (左上 / floating-top) -->
        <div v-if="viewModes.length" class="pano-floating-top">
          <div
            class="pano-view-toggle"
            :data-view-count="viewDataAttr(viewModes)"
            :data-selected="viewToggleSelected(activeViewMode)"
          >
            <button
              v-for="vm in viewModes"
              :key="vm.id"
              type="button"
              class="pano-view-btn"
              :data-view="viewToggleSelected(vm.id)"
              :aria-pressed="vm.id === activeViewMode"
              :aria-label="vm.label"
              @click="emit('view-select', vm.id)"
            >
              <span v-if="vm.icon" v-html="vm.icon" />
              <span class="label">{{ vm.label }}</span>
            </button>
          </div>
        </div>

        <!-- ツールバー (左中央 / floating-left) -->
        <ToolBar
          :tools="tools"
          :active-tool-id="activeToolId"
          @select="emit('tool-select', $event)"
        />

        <!-- キャンバス本体 -->
        <PanoCanvas
          :dof="dof"
          :mode="activeViewMode"
          :background-source="backgroundSource"
          :scene="scene"
          :textures="textures"
          @ready="emit('ready', $event)"
          @interaction="emit('interaction', $event)"
        />

        <!-- FOV + リセット (右下 / floating-right) -->
        <div class="pano-floating-right">
          <span class="pano-fov-value" aria-label="Field of view">{{ Math.round(fov) }}°</span>
          <button
            type="button"
            class="pano-btn pano-btn-icon"
            aria-label="Reset View"
            data-tip="Reset view"
            v-html="ICON.reset"
            @click="emit('reset-view')"
          />
          <button
            type="button"
            class="pano-btn pano-btn-icon"
            :aria-label="gridVisible ? 'Hide Grid' : 'Show Grid'"
            :aria-pressed="gridVisible"
            data-tip="Toggle grid"
            v-html="ICON.eye"
            @click="emit('toggle-grid')"
          />
          <button
            type="button"
            class="pano-btn pano-btn-icon"
            aria-label="Fullscreen"
            data-tip="Fullscreen"
            v-html="ICON.fullscreen"
            @click="emit('toggle-fullscreen')"
          />
        </div>

      </div>

      <!-- 右: インスペクタ -->
      <Inspector :panels="panels" @close="emit('close')">
        <template #title>
          <slot name="inspector-title">Stickers</slot>
        </template>
      </Inspector>

    </section>
  </div>
</template>
