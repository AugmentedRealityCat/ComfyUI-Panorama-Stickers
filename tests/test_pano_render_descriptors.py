import json
import subprocess
import textwrap
import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent


def run_node_json(script: str):
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        cwd=REPO_ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    if proc.returncode != 0:
        raise AssertionError(f"node failed\nSTDOUT:\n{proc.stdout}\nSTDERR:\n{proc.stderr}")
    return json.loads(proc.stdout.strip())


class TestPanoRenderDescriptors(unittest.TestCase):
    def test_build_sticker_render_descriptor_keeps_coverage_on_background_only(self):
        script = textwrap.dedent(
            """
            import { buildStickerRenderDescriptor } from "./web_src/pano_render_descriptors.js";

            const descriptor = buildStickerRenderDescriptor({
              stateRevision: "rev-1",
              backgroundSource: { id: "bg", width: 1024, height: 512, src: "bg.png" },
              coverageDeg: 180,
              scene: {
                selectedId: "sticker-1",
                hoveredId: null,
                stickers: [{
                  id: "sticker-1",
                  assetId: "asset-1",
                  yawDeg: 10,
                  pitchDeg: 0,
                  rollDeg: 0,
                  hFovDeg: 40,
                  vFovDeg: 20,
                  crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
                  opacity: 1,
                  zIndex: 5,
                }],
              },
              textures: [{
                assetId: "asset-1",
                source: { id: "img" },
                revision: "tex-1",
              }],
            });

            console.log(JSON.stringify({
              coverageDeg: descriptor.background.coverageDeg,
              type: descriptor.objectPass.objects[0].type,
              coverageAware: descriptor.objectPass.objects[0].coverageAware,
              selectedId: descriptor.objectPass.selectedId,
            }));
            """
        )
        result = run_node_json(script)
        self.assertEqual(result["coverageDeg"], 180)
        self.assertEqual(result["type"], "sticker")
        self.assertTrue(result["coverageAware"])
        self.assertEqual(result["selectedId"], "sticker-1")

    def test_build_panorama_composite_descriptor_merges_stickers_and_layers(self):
        script = textwrap.dedent(
            """
            import { buildPanoramaCompositeDescriptor } from "./web_src/pano_render_descriptors.js";

            const descriptor = buildPanoramaCompositeDescriptor({
              stateRevision: "rev-2",
              backgroundSource: { id: "bg" },
              backgroundRevision: "bg-rev",
              coverageDeg: 180,
              scene: {
                selectedId: "sticker-1",
                hoveredId: null,
                stickers: [{
                  id: "sticker-1",
                  assetId: "asset-1",
                  yawDeg: 0,
                  pitchDeg: 0,
                  rollDeg: 0,
                  hFovDeg: 30,
                  vFovDeg: 20,
                  crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
                  opacity: 1,
                  zIndex: 5,
                }],
              },
              textures: [{ assetId: "asset-1", source: { id: "img" }, revision: "tex-1" }],
              paintSource: { id: "paint" },
              paintRevision: "p1",
              maskSource: { id: "mask" },
              maskRevision: "m1",
            });

            console.log(JSON.stringify({
              coverageDeg: descriptor.background.coverageDeg,
              selectedId: descriptor.objectPass.selectedId,
              types: descriptor.objectPass.objects.map((item) => item.type).sort(),
            }));
            """
        )
        result = run_node_json(script)
        self.assertEqual(result["coverageDeg"], 180)
        self.assertEqual(result["selectedId"], "sticker-1")
        self.assertEqual(result["types"], ["mask", "paint", "sticker"])


if __name__ == "__main__":
    unittest.main()
