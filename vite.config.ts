import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint'; // new

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), eslint()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
  }
});
