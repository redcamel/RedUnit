import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vitePluginString from 'vite-plugin-string';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/RedUnit.ts'),
      name: 'RedUnit',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    vitePluginString({
      include: '**/*.wgsl',
    }),
    cssInjectedByJsPlugin(),
  ],
});
