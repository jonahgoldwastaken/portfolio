/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
  optimize: {
    entrypoints: 'auto',
    bundle: true,
    splitting: true,
    minify: true,
    treeshake: true,
  },
}
