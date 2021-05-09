import { writable } from 'svelte/store'

export const headerSettings = writable<{
  compact: boolean
  transparent: boolean
  padding: boolean
}>({
  compact: false,
  transparent: false,
  padding: true,
})
