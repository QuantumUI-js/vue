import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts', // Entry point of your library
      name: 'quantum-vue', // Name of your library
      fileName: (format) => `quantum-vue.${format}.js`, // Output file name
    },
    rollupOptions: {
      // Externalize dependencies that should not be bundled
      external: ['vue'],
      output: {
        // Global variable name for your library when used as a <script> tag
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});
