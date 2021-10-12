/// <reference lib="webworker" />

import { build, files, timestamp } from '$service-worker'

const cacheVersion = 'v2'

const buildCache = `build-${cacheVersion}-${timestamp}`
const pageHtmlCache = `html-${cacheVersion}-${timestamp}`
const assetsCache = `assets-${cacheVersion}`

declare var self: ServiceWorkerGlobalScope & typeof globalThis

self.addEventListener('install', e => {
	e.waitUntil(
		Promise.all([
			caches.open(buildCache).then(cache => cache.addAll(build)),
			caches.open(pageHtmlCache).then(cache => cache.addAll(['/offline', '/'])),
			caches
				.open(assetsCache)
				.then(cache =>
					cache.addAll(
						files.filter(
							file => !file.includes('.txt') && !file.includes('.webmanifest')
						)
					)
				),
		])
			.catch(console.error)
			.finally(self.skipWaiting.bind(self))
	)
})

self.addEventListener('activate', e => {
	e.waitUntil(self.clients.claim)
	e.waitUntil(
		caches
			.keys()
			.then(keys =>
				Promise.all(
					keys
						.filter(key => key !== buildCache)
						.filter(key => key !== pageHtmlCache)
						.filter(key => key !== assetsCache)
						.map(caches.delete.bind(caches))
				)
			)
			.then(() => caches.open(assetsCache))
			.then(cache =>
				cache
					.keys()
					.then(keys =>
						keys
							.map(key => new URL(key.url))
							.filter(url => !files.includes(url.pathname))
					)
					.then(urls => urls.map(url => cache.delete(url.toString())))
			)
			.catch(console.error)
			.finally(self.skipWaiting.bind(self))
	)
})

// Asset fetcher
self.addEventListener('fetch', e => {
	if (
		e.request.method !== 'GET' ||
		!e.request.url.includes(self.location.origin) ||
		e.request.mode === 'navigate'
	)
		return
	e.respondWith(
		'preloadResponse' in e
			? e['preloadResponse'].then(res => res || fetchAsset(e))
			: fetchAsset(e)
	)
})

// Page fetcher
self.addEventListener('fetch', e => {
	if (e.request.mode !== 'navigate') return
	e.respondWith(
		'preloadResponse' in e
			? e['preloadReponse']
					.then(res => res || fetchPage(e))
					.catch(() => caches.match('/offline') as Promise<Response>)
			: fetchPage(e).catch(() => caches.match('/offline') as Promise<Response>)
	)
})

function fetchAsset(e: FetchEvent) {
	return caches.match(e.request).then(
		res =>
			res ||
			fetch(e.request).then(res => {
				if (res.type !== 'basic') return res
				if (res.headers.get('Content-Type') !== 'application/json') return res
				const clone = res.clone()
				e.waitUntil(
					caches.open(buildCache).then(cache => cache.put(e.request, clone))
				)
				return res
			})
	)
}

function fetchPage(e: FetchEvent) {
	return caches.match(e.request).then(
		res =>
			res ||
			fetch(e.request).then(res => {
				if (!res.ok) return caches.match('/offline')
				const clone = res.clone()
				e.waitUntil(
					caches.open(pageHtmlCache).then(cache => cache.put(e.request, clone))
				)
				return res
			})
	)
}
