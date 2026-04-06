import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "web_src/pano_editor.js",
      formats: ["es"],
      // The canonical ComfyUI runtime bundle is produced by tools/build_panorama_bundle.mjs.
      // Keep the Vite output separate so it does not overwrite the wrapped test/runtime artifact.
      fileName: () => "panorama_suite.vite.js",
    },
    outDir: "web",
    emptyOutDir: false,
    rollupOptions: {
      external: [/^\.\.\/\.\.\/scripts\//],
    },
    assetsInlineLimit: 0,
  },
});
