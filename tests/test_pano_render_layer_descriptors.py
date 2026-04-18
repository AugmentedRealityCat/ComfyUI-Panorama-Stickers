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


class TestPanoRenderLayerDescriptors(unittest.TestCase):
    def test_paint_mask_raster_descriptors_are_not_coverage_aware(self):
        script = textwrap.dedent(
            """
            import {
              buildPaintLayerDescriptor,
              buildMaskLayerDescriptor,
              buildRasterLayerDescriptor,
            } from "./web_src/pano_render_layer_descriptors.js";

            const paint = buildPaintLayerDescriptor({ id: "paint-src" }, "p1");
            const mask = buildMaskLayerDescriptor({ id: "mask-src" }, "m1");
            const raster = buildRasterLayerDescriptor({ id: "raster-src" }, "r1");
            console.log(JSON.stringify({
              paint,
              mask,
              raster,
            }));
            """
        )
        result = run_node_json(script)
        self.assertEqual(result["paint"]["type"], "paint")
        self.assertEqual(result["mask"]["type"], "mask")
        self.assertEqual(result["raster"]["type"], "raster")
        self.assertFalse(result["paint"]["coverageAware"])
        self.assertFalse(result["mask"]["coverageAware"])
        self.assertFalse(result["raster"]["coverageAware"])

    def test_panorama_layer_descriptors_sort_by_zindex(self):
        script = textwrap.dedent(
            """
            import { buildPanoramaLayerDescriptors } from "./web_src/pano_render_layer_descriptors.js";

            const layers = buildPanoramaLayerDescriptors({
              paintSource: { id: "paint" },
              paintRevision: "p1",
              rasterEntries: [
                { id: "r-high", source: { id: "rh" }, revision: "r2", zIndex: 120 },
                { id: "r-low", source: { id: "rl" }, revision: "r1", zIndex: 80 },
              ],
            });

            console.log(JSON.stringify(layers.map((item) => ({ id: item.id, z: item.zIndex, type: item.type }))));
            """
        )
        result = run_node_json(script)
        self.assertEqual(result[0]["id"], "r-low")
        self.assertEqual(result[1]["id"], "paint_layer")
        self.assertEqual(result[2]["id"], "r-high")


if __name__ == "__main__":
    unittest.main()
