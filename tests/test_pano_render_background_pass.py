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


class TestPanoRenderBackgroundPass(unittest.TestCase):
    def test_gl_pass_receives_normalized_coverage(self):
        script = textwrap.dedent(
            """
            import { createPanoramaBackgroundPass } from "./web_src/pano_render_background_pass.js";

            let payload = null;
            const render = createPanoramaBackgroundPass({
              renderErpViewToContext2D(options) {
                payload = options;
                return true;
              },
            });

            const ok = render({
              owner: {},
              ctx: {},
              rect: { x: 0, y: 0, w: 320, h: 160 },
              img: { width: 1024, height: 512, complete: true },
              coverageDeg: 999,
              yawDeg: 12,
              pitchDeg: -3,
              fovDeg: 70,
            });

            console.log(JSON.stringify({ ok, coverageDeg: payload.coverageDeg, mode: payload.mode }));
            """
        )
        result = run_node_json(script)
        self.assertTrue(result["ok"])
        self.assertEqual(result["coverageDeg"], 360)
        self.assertEqual(result["mode"], "panorama")

    def test_fallback_uses_wrapped_source_only_for_360(self):
        script = textwrap.dedent(
            """
            import { createPanoramaBackgroundPass, buildViewBasis } from "./web_src/pano_render_background_pass.js";

            function makeCtx(log) {
              return {
                save() { log.push("save"); },
                restore() { log.push("restore"); },
                beginPath() {},
                moveTo() {},
                lineTo() {},
                closePath() {},
                clip() {},
                setTransform() {},
                drawImage(img) { log.push(img.tag || "img"); },
              };
            }

            const wrappedCalls = [];
            const render = createPanoramaBackgroundPass({
              renderErpViewToContext2D() { return false; },
            });

            const log360 = [];
            render({
              owner: {},
              ctx: makeCtx(log360),
              rect: { x: 0, y: 0, w: 32, h: 16 },
              img: { width: 64, height: 32, complete: true, tag: "base" },
              coverageDeg: 360,
              viewBasis: buildViewBasis(0, 0, 0),
              tanHalfY: 1,
              mesh: { Nu: 4, Nv: 4 },
              resolveWrappedSource(img) {
                wrappedCalls.push(img.tag);
                return { width: 64, height: 32, complete: true, tag: "wrapped" };
              },
            });

            const log180 = [];
            render({
              owner: {},
              ctx: makeCtx(log180),
              rect: { x: 0, y: 0, w: 32, h: 16 },
              img: { width: 64, height: 32, complete: true, tag: "base180" },
              coverageDeg: 180,
              viewBasis: buildViewBasis(0, 0, 0),
              tanHalfY: 1,
              mesh: { Nu: 4, Nv: 4 },
              resolveWrappedSource(img) {
                wrappedCalls.push(img.tag);
                return { width: 64, height: 32, complete: true, tag: "wrapped180" };
              },
            });

            console.log(JSON.stringify({
              wrappedCalls,
              usedWrapped360: log360.includes("wrapped"),
              usedWrapped180: log180.includes("wrapped180"),
              usedBase180: log180.includes("base180"),
            }));
            """
        )
        result = run_node_json(script)
        self.assertEqual(result["wrappedCalls"], ["base"])
        self.assertTrue(result["usedWrapped360"])
        self.assertFalse(result["usedWrapped180"])
        self.assertTrue(result["usedBase180"])

    def test_missing_view_basis_fails_when_gl_path_misses(self):
        script = textwrap.dedent(
            """
            import { createPanoramaBackgroundPass } from "./web_src/pano_render_background_pass.js";

            const render = createPanoramaBackgroundPass({
              renderErpViewToContext2D() { return false; },
            });

            const ok = render({
              owner: {},
              ctx: {},
              rect: { x: 0, y: 0, w: 100, h: 50 },
              img: { width: 256, height: 128, complete: true },
              coverageDeg: 360,
            });

            console.log(JSON.stringify({ ok }));
            """
        )
        result = run_node_json(script)
        self.assertFalse(result["ok"])


if __name__ == "__main__":
    unittest.main()
