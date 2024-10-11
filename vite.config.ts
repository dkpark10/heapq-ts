import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['umd'],
      name: 'heapqTs',
      entry: path.resolve(__dirname, 'src/index.ts'),
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js'
      },
    },
  },
  plugins: [dts()],
});
