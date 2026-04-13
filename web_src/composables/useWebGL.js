import { computed, onBeforeUnmount, ref, shallowRef, watch } from "vue";
import { renderSceneToContext2D } from "../pano_gl_viewport.js";
import { createPanoInteractionController, PANO_INITIAL_FOV } from "../pano_interaction_controller.js";

function normalizeMode(mode, dof) {
  const requested = String(mode || "panorama");
  if (requested === "unwrap") return "unwrap";
  if (requested === "cutout" && String(dof || "3") === "6") return "cutout";
  return "panorama";
}

export function useWebGL(options = {}) {
  const canvasRef = shallowRef(null);
  const owner = options.owner || {};
  const dof = options.dof || ref("3");
  const backgroundSource = shallowRef(options.backgroundSource?.value ?? options.backgroundSource ?? null);
  const scene = shallowRef(options.scene?.value ?? options.scene ?? { stickers: [], selectedId: null, hoveredId: null });
  const textures = shallowRef(options.textures?.value ?? options.textures ?? []);
  const renderToken = ref(0);
  const rafId = ref(0);
  const isMounted = ref(false);
  const view = ref({
    yaw: Number(options.initialView?.yaw ?? 0),
    pitch: Number(options.initialView?.pitch ?? 0),
    fov: Number(options.initialView?.fov ?? PANO_INITIAL_FOV),
  });
  const mode = ref(normalizeMode(options.initialMode, dof.value));

  const controller = createPanoInteractionController({
    getView: () => view.value,
    setView: (nextView) => {
      view.value = {
        yaw: Number(nextView?.yaw ?? 0),
        pitch: Number(nextView?.pitch ?? 0),
        fov: Number(nextView?.fov ?? PANO_INITIAL_FOV),
      };
    },
    onInteraction: () => requestRender(),
  });

  function setCanvas(element) {
    canvasRef.value = element || null;
    if (element) requestRender();
  }

  function setBackgroundSource(source) {
    backgroundSource.value = source || null;
    requestRender();
  }

  function setScene(nextScene) {
    scene.value = nextScene || { stickers: [], selectedId: null, hoveredId: null };
    requestRender();
  }

  function setTextures(nextTextures) {
    textures.value = Array.isArray(nextTextures) ? nextTextures : [];
    requestRender();
  }

  function setMode(nextMode) {
    mode.value = normalizeMode(nextMode, dof.value);
    requestRender();
  }

  function resizeCanvas() {
    const canvas = canvasRef.value;
    if (!canvas) return false;
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    if (canvas.width === width && canvas.height === height) return false;
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  function renderNow() {
    const canvas = canvasRef.value;
    if (!canvas || !isMounted.value) return false;
    resizeCanvas();
    const ctx = canvas.getContext("2d");
    if (!ctx) return false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return renderSceneToContext2D({
      owner,
      ctx,
      rect: { x: 0, y: 0, w: canvas.width, h: canvas.height },
      backgroundSource: backgroundSource.value,
      scene: scene.value,
      textures: textures.value,
      view: computedView.value,
      cacheKey: "vue_modal_base",
    });
  }

  function tickInertia() {
    if (!controller.stepInertia()) return;
    renderNow();
    rafId.value = window.requestAnimationFrame(tickInertia);
  }

  function requestRender() {
    renderToken.value += 1;
    if (!isMounted.value) return;
    if (rafId.value) window.cancelAnimationFrame(rafId.value);
    rafId.value = window.requestAnimationFrame(() => {
      rafId.value = 0;
      renderNow();
    });
  }

  function startInertia() {
    if (rafId.value) window.cancelAnimationFrame(rafId.value);
    rafId.value = window.requestAnimationFrame(tickInertia);
  }

  const computedView = computed(() => {
    if (mode.value === "unwrap") return { mode: "unwrap" };
    if (mode.value === "cutout") {
      return {
        mode: "cutout",
        yawDeg: Number(view.value.yaw || 0),
        pitchDeg: Number(view.value.pitch || 0),
        rollDeg: 0,
        hFovDeg: Number(view.value.fov || PANO_INITIAL_FOV),
        vFovDeg: Math.max(1, Number(view.value.fov || PANO_INITIAL_FOV) * 0.6667),
      };
    }
    return {
      mode: "panorama",
      yawDeg: Number(view.value.yaw || 0),
      pitchDeg: Number(view.value.pitch || 0),
      fovDeg: Number(view.value.fov || PANO_INITIAL_FOV),
    };
  });

  watch(() => dof.value, (nextDof) => {
    mode.value = normalizeMode(mode.value, nextDof);
    requestRender();
  });

  onBeforeUnmount(() => {
    isMounted.value = false;
    if (rafId.value) window.cancelAnimationFrame(rafId.value);
  });

  function mount() {
    isMounted.value = true;
    requestRender();
  }

  return {
    canvasRef,
    view,
    mode,
    controller,
    computedView,
    setCanvas,
    setMode,
    setScene,
    setTextures,
    setBackgroundSource,
    requestRender,
    startInertia,
    mount,
  };
}
