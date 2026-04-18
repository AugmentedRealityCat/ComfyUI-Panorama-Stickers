import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderPreviewConsumers(unittest.TestCase):
    def test_runtime_preview_uses_render_core_descriptor(self):
        runtime_js = (REPO_ROOT / "web_src" / "pano_preview_runtime.js").read_text(encoding="utf-8")
        assert 'import { createPanoramaRenderCore } from "./pano_render_core.js";' in runtime_js
        assert 'import { buildStickerRenderDescriptor } from "./pano_render_descriptors.js";' in runtime_js
        assert "if (!node.__panoRuntimeCore) node.__panoRuntimeCore = createPanoramaRenderCore();" in runtime_js
        assert "if (!node.__panoDomRuntimeCore) node.__panoDomRuntimeCore = createPanoramaRenderCore();" in runtime_js
        assert "if (!node.__panoStandaloneRuntimeCore) node.__panoStandaloneRuntimeCore = createPanoramaRenderCore();" in runtime_js
        assert "function buildStickerPreviewDescriptor(" in runtime_js
        assert "return buildStickerRenderDescriptor({" in runtime_js
        assert "node.__panoRuntimeCore.syncState(descriptor)" in runtime_js
        assert "node.__panoRuntimeCore.renderToContext(ctx, rect, view" in runtime_js
        assert "node.__panoDomRuntimeCore.syncState(" in runtime_js
        assert "node.__panoStandaloneRuntimeCore.syncState(descriptor)" in runtime_js

    def test_preview_node_uses_render_core_descriptor(self):
        preview_js = (REPO_ROOT / "web_src" / "pano_preview_previewnode.js").read_text(encoding="utf-8")
        assert 'import { createPanoramaRenderCore } from "./pano_render_core.js";' in preview_js
        assert 'import { buildStickerRenderDescriptor } from "./pano_render_descriptors.js";' in preview_js
        assert "if (!node.__panoStandaloneCore) node.__panoStandaloneCore = createPanoramaRenderCore();" in preview_js
        assert "const descriptor = buildStickerRenderDescriptor({" in preview_js
        assert "node.__panoStandaloneCore.syncState(descriptor)" in preview_js
        assert "node.__panoStandaloneCore.renderToContext(" in preview_js


if __name__ == "__main__":
    unittest.main()
