import type { RequestHandler } from '@sveltejs/kit'
import { fetchArticles } from './_api'

export const get: RequestHandler<null, null, ArticleMetadata[]> = async ({
	query,
}) => {
	const articleNames = query.getAll('articles')
	try {
		return {
			status: 200,
			body: await fetchSelectArticles(articleNames),
		}
	} catch (err) {
		return {
			status: 400,
			body: err,
		}
	}
}

async function fetchSelectArticles(names: string[]) {
	const articles = await fetchArticles()
	return articles.filter(article =>
		names.includes(article.slug.replace('article/', ''))
	)
}
