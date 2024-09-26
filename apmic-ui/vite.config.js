import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    // Library build configuration
    return {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'APMIC-UI',
          fileName: (format) => `apmic-ui.${format}.js`,
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
      plugins: [
        vue(),
        dts({
          insertTypesEntry: true
        })
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    };
  }

  return {
    plugins: [
      vue(),
      vueDevTools(),
      dts({
        insertTypesEntry: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 9000,
      open: true,
    },
    preview: {
      port: 8000,
      open: true
    }
  };
})
