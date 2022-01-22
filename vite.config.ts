import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

const config = defineConfig({
  optimizeDeps: {
    include: [],
    exclude: []
  },

  plugins: [
    vue(),
    vueJsx()
  ],

  build: {
    minify: true,
    lib: {
      entry: resolve('./src/components/index.ts'),
      name: 'vuite'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue'
      ],
      treeshake: true,
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

export default config
