import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, "index.html"),
        ecosystem: resolve(import.meta.dirname, "ecosystem/index.html"),
        products: resolve(import.meta.dirname, "products/index.html"),
        principles: resolve(import.meta.dirname, "principles/index.html"),
        notFound: resolve(import.meta.dirname, "404.html")
      }
    }
  }
});
