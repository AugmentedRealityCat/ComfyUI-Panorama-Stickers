import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderMainConsumer(unittest.TestCase):
    def test_modal_background_core_is_wired_for_stickers_only(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn('import { createPanoramaRenderCore } from "./pano_render_core.js";', editor_js)
        self.assertIn(
            'import { buildPanoramaCompositeDescriptor, buildStickerRenderDescriptor } from "./pano_render_descriptors.js";',
            editor_js,
        )
        self.assertIn("const modalBackgroundCore = createPanoramaRenderCore({ targetCanvas: backgroundCanvas });", editor_js)
        self.assertIn('if (type === "stickers") return !!modalBackgroundCore?.isSupported?.();', editor_js)
        self.assertIn('if (type === "stickers") {', editor_js)
        self.assertIn("const synced = modalBackgroundCore.syncState(buildStickerRenderDescriptor({", editor_js)
        self.assertIn("const rendered = modalBackgroundCore.renderToContext(", editor_js)


if __name__ == "__main__":
    unittest.main()
