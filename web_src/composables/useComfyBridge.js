import { computed, ref } from "vue";

function safeParseState(rawValue) {
  const text = typeof rawValue === "string" ? rawValue.trim() : "";
  if (!text) return {};
  try {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed;
  } catch {
    return {};
  }
}

export function useComfyBridge(options = {}) {
  const stateJson = ref(String(options.stateJson || ""));
  const inputImage = ref(options.inputImage || null);
  const metadata = ref(options.metadata || {});

  const parsedState = computed(() => safeParseState(stateJson.value));

  function setState(nextState) {
    if (typeof nextState === "string") {
      stateJson.value = nextState;
      return;
    }
    stateJson.value = JSON.stringify(nextState || {}, null, 2);
  }

  function updateInputImage(nextImage) {
    inputImage.value = nextImage || null;
  }

  function emitPayload(extra = {}) {
    return {
      state_json: stateJson.value,
      input_image: inputImage.value,
      metadata: metadata.value,
      ...extra,
    };
  }

  return {
    stateJson,
    parsedState,
    inputImage,
    metadata,
    setState,
    updateInputImage,
    emitPayload,
  };
}
