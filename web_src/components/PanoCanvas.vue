<script setup>
import { onBeforeUnmount, onMounted, watch } from "vue";
import { ref } from "vue";
import { useWebGL } from "../composables/useWebGL.js";

const props = defineProps({
  dof: { type: String, default: "3" },
  backgroundSource: { type: Object, default: null },
  scene: { type: Object, default: () => ({ stickers: [], selectedId: null, hoveredId: null }) },
  textures: { type: Array, default: () => [] },
  mode: { type: String, default: "panorama" },
});

const emit = defineEmits(["ready", "interaction"]);

const canvasEl = ref(null);
const rootEl = ref(null);
let resizeObserver = null;

const webgl = useWebGL({ dof: props.dof });

function localPoint(e) {
  const rect = canvasEl.value?.getBoundingClientRect?.();
  return {
    x: Number(e.clientX || 0) - Number(rect?.left || 0),
    y: Number(e.clientY || 0) - Number(rect?.top || 0),
  };
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
  if (typeof ResizeObserver !== "undefined" && rootEl.value) {
    resizeObserver = new ResizeObserver(() => webgl.requestRender?.());
    resizeObserver.observe(rootEl.value);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
});

watch(() => props.backgroundSource, (v) => webgl.setBackgroundSource?.(v));
watch(() => props.scene, (v) => webgl.setScene?.(v), { deep: true });
watch(() => props.textures, (v) => webgl.setTextures?.(v), { deep: true });
watch(() => props.mode, (v) => webgl.setMode?.(v));

defineExpose({ requestRender: () => webgl.requestRender?.(), view: webgl.view });
</script>

<template>
  <div ref="rootEl" class="pano-stage-wrap">
    <canvas
      ref="canvasEl"
      class="pano-stage"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @wheel.prevent="onWheel"
    />
  </div>
</template>
