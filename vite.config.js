import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        register: resolve(__dirname, "src/register.html"),
        signUp: resolve(__dirname, "src/signUp.html"),
      },
    },
  },
});
