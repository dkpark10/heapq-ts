import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      // https://ko.vitejs.dev/config/build-options#build-minify  es 빌드는 트리쉐이킹 불가
      formats: process.env.VITE_MODULE === 'cjs' ? ['cjs'] : ['iife', 'umd'],
      name: 'heapqTs',
      entry: path.resolve(__dirname, 'src/index.ts'),
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `${process.env.VITE_MODULE === 'cjs' ? 'cjs' : 'es'}/[name].js`,
      },
    },
  },
  plugins: [dts()],
});
