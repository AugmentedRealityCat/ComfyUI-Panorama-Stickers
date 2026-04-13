<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useWebGL } from "../composables/useWebGL.js";

const props = defineProps({
  dof: {
    type: String,
    default: "3",
  },
  backgroundSource: {
    type: Object,
    default: null,
  },
  scene: {
    type: Object,
    default: () => ({ stickers: [], selectedId: null, hoveredId: null }),
  },
  textures: {
    type: Array,
    default: () => [],
  },
  initialMode: {
    type: String,
    default: "panorama",
  },
});

const emit = defineEmits(["ready", "interaction"]);

const canvasEl = ref(null);
const rootEl = ref(null);
let resizeObserver = null;
const dofRef = computed(() => props.dof);
const webgl = useWebGL({
  dof: dofRef,
  backgroundSource: props.backgroundSource,
  scene: props.scene,
  textures: props.textures,
  initialMode: props.initialMode,
});

function localPoint(event) {
  const rect = canvasEl.value?.getBoundingClientRect?.();
  return {
    x: Number(event.clientX || 0) - Number(rect?.left || 0),
    y: Number(event.clientY || 0) - Number(rect?.top || 0),
  };
}

function onPointerDown(event) {
  const point = localPoint(event);
  canvasEl.value?.setPointerCapture?.(event.pointerId);
  webgl.controller.startDrag(point.x, point.y, event.pointerId, event.timeStamp);
}

function onPointerMove(event) {
  if (!webgl.controller.state.drag.active) return;
  const point = localPoint(event);
  webgl.controller.moveDrag(point.x, point.y, webgl.mode.value, event.timeStamp);
  webgl.requestRender();
  emit("interaction", webgl.view.value);
}

function onPointerUp(event) {
  canvasEl.value?.releasePointerCapture?.(event.pointerId);
  webgl.controller.endDrag(event.timeStamp);
  webgl.startInertia();
  emit("interaction", webgl.view.value);
}

function onWheel(event) {
  webgl.controller.applyWheelEvent(event);
  event.preventDefault();
  webgl.requestRender();
  emit("interaction", webgl.view.value);
}

onMounted(() => {
  webgl.setCanvas(canvasEl.value);
  webgl.mount();
  emit("ready", canvasEl.value);
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(() => webgl.requestRender());
    if (rootEl.value) resizeObserver.observe(rootEl.value);
    watch(rootEl, (next, prev) => {
      if (prev) resizeObserver?.unobserve(prev);
      if (next) resizeObserver?.observe(next);
    });
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
});

watch(() => props.backgroundSource, (nextValue) => webgl.setBackgroundSource(nextValue));
watch(() => props.scene, (nextValue) => webgl.setScene(nextValue), { deep: true });
watch(() => props.textures, (nextValue) => webgl.setTextures(nextValue), { deep: true });

defineExpose({
  requestRender: webgl.requestRender,
  setMode: webgl.setMode,
  view: webgl.view,
});
</script>

<template>
  <div ref="rootEl" class="pano-stage-wrap pano-vue-stage-wrap">
    <canvas
      ref="canvasEl"
      class="pano-stage pano-vue-canvas"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @wheel="onWheel"
    />
    <div class="pano-vue-canvas-hud">
      <div class="pano-stage-drop-hint-text">
        {{ props.dof === "6" ? "6DOF-ready canvas shell" : "3DOF canvas shell" }}
      </div>
    </div>
  </div>
</template>
