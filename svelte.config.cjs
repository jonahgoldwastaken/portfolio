const autoPreprocess = require('svelte-preprocess')
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
      style: 'scss',
    },
  }),
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: static(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    prerender: {
      enabled: true,
      pages: ['*'],
    },

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    }
  }
};