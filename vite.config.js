import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
//export default defineConfig({
  //plugins: [react()],

//})

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/textrazor": {
        target: "https://api.textrazor.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/textrazor/, ""),
      },
    },
  },
});



