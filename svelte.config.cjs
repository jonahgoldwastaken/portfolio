const autoPreprocess = require('svelte-preprocess')
const static = require('@sveltejs/adapter-static')
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
      style: 'scss',
    },
  }),
  kit: {
    adapter: static(),
    target: '#svelte',
    prerender: {
      enabled: true,
      pages: ['*'],
    },
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
}
