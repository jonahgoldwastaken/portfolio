const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg(
  withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    include: path.resolve(__dirname, 'assets/svg'),
    webpack(config, options) {
      return config
    },
  }),
)
