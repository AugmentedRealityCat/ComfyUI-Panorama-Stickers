import { ref, shallowRef } from "vue";
import { createPaintEngineManager } from "../pano_paint_engine.js";
import { createHistoryController } from "../pano_paint_history.js";

export function usePaint(options = {}) {
  const manager = shallowRef(createPaintEngineManager(options.engineOptions || {}));
  const history = shallowRef(createHistoryController(
    options.limit ?? 80,
    options.initialState ?? null,
    options.serializeLimit ?? 8,
  ));
  const activeTool = ref(String(options.initialTool || "select"));

  function setActiveTool(toolId) {
    activeTool.value = String(toolId || "select");
  }

  function serializeHistory() {
    return history.value.serialize();
  }

  return {
    manager,
    history,
    activeTool,
    setActiveTool,
    serializeHistory,
  };
}
