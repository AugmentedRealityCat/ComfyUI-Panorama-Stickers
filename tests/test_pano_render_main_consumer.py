import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderMainConsumer(unittest.TestCase):
    def test_modal_background_core_is_wired_for_stickers_only(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        assert 'import { createPanoramaRenderCore } from "./pano_render_core.js";' in editor_js
        assert 'import { buildPanoramaCompositeDescriptor, buildStickerRenderDescriptor } from "./pano_render_descriptors.js";' in editor_js
        assert "const modalBackgroundCore = createPanoramaRenderCore({ targetCanvas: backgroundCanvas });" in editor_js
        assert 'if (type === "stickers") return !!modalBackgroundCore?.isSupported?.();' in editor_js
        assert 'if (type === "stickers") {' in editor_js
        assert "const synced = modalBackgroundCore.syncState(buildStickerRenderDescriptor({" in editor_js
        assert "const rendered = modalBackgroundCore.renderToContext(" in editor_js


if __name__ == "__main__":
    unittest.main()
