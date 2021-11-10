/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

type ArticleMetadata = {
	index: number
	title: string
	slug: string
	description: string
	year: number
	client: string
	image: string
	link: [string, string]
}
