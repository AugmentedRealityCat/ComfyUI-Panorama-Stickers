import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "web_src/pano_editor.js",
      formats: ["es"],
      fileName: () => "panorama_suite.js",
    },
    outDir: "web",
    emptyOutDir: false,
    rollupOptions: {
      external: [/^\.\.\/\.\.\/scripts\//],
    },
    assetsInlineLimit: 0,
  },
});
