import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestPanoRenderCutoutConsumer(unittest.TestCase):
    def test_editor_passes_descriptor_into_cutout_preview(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        assert 'import { buildPanoramaCompositeDescriptor } from "./pano_render_descriptors.js";' in editor_js
        assert "const descriptor = buildPanoramaCompositeDescriptor({" in editor_js
        assert "const cutoutView = buildCutoutViewParamsFromShot(shot);" in editor_js
        assert "const synced = cutoutPreviewCore.syncState(descriptor);" in editor_js
        assert "cutoutPreviewCore.renderToTarget(" in editor_js
        assert "paintSource: erpTarget?.displayPaint?.canvas || null," in editor_js
        assert "maskSource: erpTarget?.committedMask?.canvas || null," in editor_js

    def test_cutout_preview_surface_uses_core_target_pool(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        assert "function renderCutoutPreviewToTarget(" in editor_js
        assert 'return cutoutPreviewCore.renderToTarget(' in editor_js
        assert '"cutout_preview"' in editor_js
        assert "node.__panoCutoutPreviewCanvas = document.createElement(\"canvas\")" not in editor_js

    def test_cutout_preview_resource_revision_does_not_include_whole_shot(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        assert "JSON.stringify(shot || null)" not in editor_js
        assert "forceRedraw" in editor_js
        assert "isCutoutTransformInteractionActive()" in editor_js


if __name__ == "__main__":
    unittest.main()
