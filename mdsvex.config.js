import headingId from 'remark-heading-id'

export const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		_: './src/lib/components/templates/Article.svelte',
	},
	smartypants: {
		dashes: 'oldschool',
	},
	remarkPlugins: [headingId],
}
