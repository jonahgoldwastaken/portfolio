import { browser } from '$app/env'
import observer from './intersectionObserver'

const rafCallbacks = new Set<() => void>()

let id = browser ? requestAnimationFrame(rafLoop) : null

interface rafProps {
  cb: () => void
  enabled: boolean
}

export function raf(
  _: HTMLElement,
  { cb, enabled }: rafProps
): { update: (update: rafProps) => void; destroy: () => void } {
  let updatedCb = cb
  if (enabled) rafCallbacks.add(cb)
  return {
    update({ cb: newCb, enabled: animate }) {
      if (!animate) {
        rafCallbacks.delete(updatedCb)
        return updateRafLoop()
      }
      rafCallbacks.delete(updatedCb)
      updatedCb = newCb
      rafCallbacks.add(updatedCb)
      updateRafLoop()
    },
    destroy() {
      rafCallbacks.delete(updatedCb)
    },
  }
}

export function iObservedRaf(
  node: HTMLElement,
  cb: () => void
): { update: (cb: () => void) => void; destroy: () => void } {
  node.classList.add('raf')
  node.classList.add('visible')
  let enabled = true
  let callback = cb
  const rafAction = raf(node, { cb, enabled })
  const observeAction = observer(node, bool => {
    if (bool !== enabled) {
      enabled = bool
      node.classList[enabled ? 'add' : 'remove']('visible')
      rafAction.update({ cb: callback, enabled })
      return
    }
  })
  return {
    update(cb) {
      callback = cb
      rafAction.update({
        enabled,
        cb: callback,
      })
    },
    destroy() {
      rafAction.destroy()
      observeAction.destroy()
    },
  }
}

function rafLoop() {
  rafCallbacks.forEach(cb => cb())
  updateRafLoop()
  if (!id) return
  requestAnimationFrame(rafLoop)
}

function updateRafLoop() {
  if (rafCallbacks.size && !id) {
    id = requestAnimationFrame(rafLoop)
    return
  }
  if (rafCallbacks.size && id) return
  cancelAnimationFrame(id)
  id = null
}
