/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
  optimize: {
    entrypoints: ({ files }) =>
      files.filter(file => file.includes('index.html')),
    splitting: true,
    minify: true,
    treeshake: true,
    sourcemap: 'external',
  },
}
