import { mdsvex } from 'mdsvex'
import { mdsvexConfig } from './mdsvex.config.js'
import autoprefixer from 'autoprefixer'
import vpHeightFix from 'postcss-100vh-fix'
import autoPreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
    autoPreprocess({
      scss: {
        renderSync: true,
      },
      typescript: true,
      postcss: {
        plugins: [vpHeightFix(), autoprefixer()],
      },
    }),
  ],
  kit: {
    adapter: adapter(),
    target: '#svelte',
    prerender: {
      enabled: true,
      entries: ['*'],
    },
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
}

export default config
