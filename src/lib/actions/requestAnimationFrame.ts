import { browser } from '$app/env'

const rafCallbacks = new Set<() => void>()

let id = browser ? requestAnimationFrame(rafLoop) : null

interface rafProps {
  cb: () => void
  animate: boolean
}

export function raf(
  _: HTMLElement,
  { cb, animate }: rafProps
): { update: (update: rafProps) => void; destroy: () => void } {
  let updatedCb = cb
  if (animate) rafCallbacks.add(cb)
  return {
    update({ cb: newCb, animate }) {
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
