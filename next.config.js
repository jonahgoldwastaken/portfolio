const withMDX = require('@next/mdx')()
module.exports = withMDX({ pageExtensions: ['tsx', 'ts', 'mdx', 'md'] })
