<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useWebGL } from "../composables/useWebGL.js";

const props = defineProps({
  dof:              { type: String, default: "3" },
  backgroundSource: { type: Object, default: null },
  scene:            { type: Object, default: () => ({ stickers: [], selectedId: null, hoveredId: null }) },
  textures:         { type: Array,  default: () => [] },
  mode:             { type: String, default: "panorama" },
});

const emit = defineEmits(["ready", "interaction"]);

const canvasEl = ref(null);
let resizeObserver = null;
const webgl = useWebGL({ dof: props.dof });

function localPoint(e) {
  const r = canvasEl.value?.getBoundingClientRect?.();
  return { x: e.clientX - (r?.left ?? 0), y: e.clientY - (r?.top ?? 0) };
}

function onPointerDown(e) {
  canvasEl.value?.setPointerCapture?.(e.pointerId);
  webgl.controller?.startDrag?.(localPoint(e).x, localPoint(e).y, e.pointerId, e.timeStamp);
}
function onPointerMove(e) {
  if (!webgl.controller?.state?.drag?.active) return;
  const p = localPoint(e);
  webgl.controller?.moveDrag?.(p.x, p.y, props.mode, e.timeStamp);
  webgl.requestRender?.();
  emit("interaction", webgl.view?.value);
}
function onPointerUp(e) {
  canvasEl.value?.releasePointerCapture?.(e.pointerId);
  webgl.controller?.endDrag?.(e.timeStamp);
  webgl.startInertia?.();
  emit("interaction", webgl.view?.value);
}
function onWheel(e) {
  e.preventDefault();
  webgl.controller?.applyWheelEvent?.(e);
  webgl.requestRender?.();
  emit("interaction", webgl.view?.value);
}

onMounted(() => {
  webgl.setCanvas?.(canvasEl.value);
  webgl.mount?.();
  emit("ready", canvasEl.value);
  if (typeof ResizeObserver !== "undefined") {
    resizeObserver = new ResizeObserver(() => webgl.requestRender?.());
    resizeObserver.observe(canvasEl.value);
  }
});
onBeforeUnmount(() => { resizeObserver?.disconnect(); });

watch(() => props.backgroundSource, (v) => webgl.setBackgroundSource?.(v));
watch(() => props.scene,            (v) => webgl.setScene?.(v), { deep: true });
watch(() => props.textures,         (v) => webgl.setTextures?.(v), { deep: true });
watch(() => props.mode,             (v) => webgl.setMode?.(v));

defineExpose({ requestRender: () => webgl.requestRender?.(), view: webgl.view });
</script>

<template>
  <canvas
    ref="canvasEl"
    class="pano-stage"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
    @wheel.prevent="onWheel"
  />
</template>
