import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderCutoutConsumer(unittest.TestCase):
    def test_editor_passes_descriptor_into_cutout_preview(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn('import { buildPanoramaCompositeDescriptor } from "./pano_render_descriptors.js";', editor_js)
        self.assertIn("const descriptor = buildPanoramaCompositeDescriptor({", editor_js)
        self.assertIn("const cutoutView = buildCutoutViewParamsFromShot(shot);", editor_js)
        self.assertIn("const synced = cutoutPreviewCore.syncState(descriptor);", editor_js)
        self.assertIn("cutoutPreviewCore.renderToTarget(", editor_js)
        self.assertIn("paintSource: erpTarget?.displayPaint?.canvas || null,", editor_js)
        self.assertIn("maskSource: erpTarget?.committedMask?.canvas || null,", editor_js)

    def test_cutout_preview_surface_uses_core_target_pool(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertIn("function renderCutoutPreviewToTarget(", editor_js)
        self.assertIn('return cutoutPreviewCore.renderToTarget(', editor_js)
        self.assertIn('"cutout_preview"', editor_js)
        self.assertNotIn('node.__panoCutoutPreviewCanvas = document.createElement("canvas")', editor_js)

    def test_cutout_preview_resource_revision_does_not_include_whole_shot(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertNotIn("JSON.stringify(shot || null)", editor_js)
        self.assertIn("forceRedraw", editor_js)
        self.assertIn("isCutoutTransformInteractionActive()", editor_js)


if __name__ == "__main__":
    unittest.main()
