import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


class TestVueModalBoundary(unittest.TestCase):
    def test_editor_no_longer_builds_side_panel_or_selection_menu_html(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        self.assertNotIn("side.innerHTML =", editor_js)
        self.assertNotIn("selectionMenu.innerHTML =", editor_js)
        self.assertNotIn('layer.className = "pano-canvas-confirm"', editor_js)
        self.assertNotIn("installTooltipHandlers(", editor_js)
        self.assertNotIn("selectionMenu.addEventListener(", editor_js)
        self.assertNotIn(".onclick =", editor_js)
        self.assertIn("uiState.sidePanel =", editor_js)
        self.assertIn("uiState.selectionMenu =", editor_js)
        self.assertIn("uiState.tooltip", editor_js)
        self.assertIn("uiState.confirmDialog =", editor_js)

    def test_modal_shell_uses_vue_components_for_side_panel_and_selection_menu(self):
        modal_vue = (REPO_ROOT / "web_src" / "components" / "PanoModal.vue").read_text(encoding="utf-8")
        self.assertIn('import PanoSelectionMenu from "./PanoSelectionMenu.vue";', modal_vue)
        self.assertIn('import PanoConfirmDialog from "./PanoConfirmDialog.vue";', modal_vue)
        self.assertIn('import PanoTooltip from "./PanoTooltip.vue";', modal_vue)
        self.assertIn('<PanoSelectionMenu :model="uiState.selectionMenu || {}" />', modal_vue)
        self.assertIn('<PanoConfirmDialog :model="uiState.confirmDialog || {}" />', modal_vue)
        self.assertIn('<PanoTooltip :model="uiState.tooltip || {}" />', modal_vue)
        self.assertIn('<PanoSidePanel v-if="!hideSidebar" :node-title="nodeTitle" :model="uiState.sidePanel || {}" />', modal_vue)

    def test_editor_uses_dedicated_ui_state_builder_module(self):
        editor_js = (REPO_ROOT / "web_src" / "pano_editor.js").read_text(encoding="utf-8")
        builder_js = (REPO_ROOT / "web_src" / "pano_editor_ui_state.js").read_text(encoding="utf-8")
        self.assertIn('from "./pano_editor_ui_state.js"', editor_js)
        self.assertIn("export function buildPaintDockModel(", builder_js)
        self.assertIn("export function buildEditorSidePanelModel(", builder_js)
        self.assertIn("export function buildSelectionMenuModel(", builder_js)


if __name__ == "__main__":
    unittest.main()
