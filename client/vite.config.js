import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions:{
      input: {
        app: '../client/build/index.html'
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", 
        changeOrigin: true
      },
    },
  },
  plugins: [react()],
});