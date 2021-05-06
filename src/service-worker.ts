/// <reference lib="webworker" />

import { build, files, timestamp } from '$service-worker'

const cacheName = `cache-v1-${timestamp}`
const pageHtmlCacheName = `html-v1-${timestamp}`

declare var self: ServiceWorkerGlobalScope & typeof globalThis

self.addEventListener('install', e => {
  e.waitUntil(
    Promise.all([
      caches
        .open(cacheName)
        .then(cache =>
          cache.addAll([
            ...build,
            ...files.filter(
              file =>
                file.includes('.jpg') ||
                file.includes('.png') ||
                file.includes('.svg')
            ),
          ])
        ),
      caches
        .open(pageHtmlCacheName)
        .then(cache => cache.addAll(['/offline', '/'])),
    ])
      .catch(console.error)
      .finally(self.skipWaiting.bind(self))
  )
})

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim)
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== cacheName)
          .filter(key => key !== pageHtmlCacheName)
          .map(caches.delete.bind(caches))
      )
        .catch(console.error)
        .finally(self.skipWaiting.bind(self))
    )
  )
})

self.addEventListener('fetch', e => {
  if (
    e.request.method === 'GET' &&
    e.request.url.includes(self.location.origin) &&
    e.request.mode !== 'navigate'
  )
    e.respondWith(
      e.preloadResponse.then(
        res =>
          res ||
          caches.match(e.request).then(
            res =>
              res ||
              fetch(e.request).then(res => {
                if (res.type !== 'basic') return res
                const clone = res.clone()
                e.waitUntil(
                  caches
                    .open(cacheName)
                    .then(cache => cache.put(e.request, clone))
                )
                return res
              })
          )
      )
    )
})

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate')
    e.respondWith(
      e.preloadResponse
        .then(
          res =>
            res ||
            caches.match(e.request).then(
              res =>
                res ||
                fetch(e.request).then(res => {
                  if (!res.ok) return caches.match('/offline')
                  const clone = res.clone()
                  e.waitUntil(
                    caches
                      .open(pageHtmlCacheName)
                      .then(cache => cache.put(e.request, clone))
                  )
                  return res
                })
            )
        )
        .catch(() => caches.match('/offline') as Promise<Response>)
    )
})
