import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src/Assets", // Adjust the path as needed
    },
  },
  plugins: [react()],
  server: {
    host: "192.168.1.107",
    port: "3000",
  },
});
