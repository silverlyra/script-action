import {resolve} from 'path'

import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: ['index.ts', 'main.ts'].map(filename =>
        resolve(__dirname, `src/${filename}`)
      ),
      fileName: (format, entryName) =>
        `${entryName}.${format === 'cjs' || format === 'commonjs' ? 'c' : ''}${
          format === 'es' || format === 'esm' ? 'm' : ''
        }js`,
      formats: ['es', 'cjs']
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        'assert',
        'buffer',
        'child_process',
        'crypto',
        'events',
        'fs',
        'fs/promises',
        'http',
        'https',
        'net',
        'os',
        'path',
        'perf_hooks',
        'string_decoder',
        'stream',
        'timers',
        'tls',
        'url',
        'util',
        'worker_threads',
        'zlib',
        'node:buffer',
        'node:fs',
        'node:http',
        'node:https',
        'node:net',
        'node:path',
        'node:process',
        'node:stream',
        'node:stream/web',
        'node:url',
        'node:util',
        'node:zlib'
      ]
    }
  },
  esbuild: {
    format: 'esm',
    target: 'esnext',
    define: {self: 'globalThis'}
  },
  plugins: [dts()]
})
