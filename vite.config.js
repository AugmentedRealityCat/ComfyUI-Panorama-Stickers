import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
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
