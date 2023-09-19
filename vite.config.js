import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), react()],

  build: {
    // Add .JPG files to assetsInclude to treat them as assets.
    assetsInclude: ["**/*.JPG"],
  },
});
