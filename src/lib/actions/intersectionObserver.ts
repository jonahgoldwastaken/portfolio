let iObserver: IntersectionObserver

type observeObject = {
  el: HTMLElement
  cb: (isIntersecting: boolean, intersectionRatio: number) => void
}

const observeArray: observeObject[] = []

function callback(entries: IntersectionObserverEntry[]): void {
  entries.forEach(entry => {
    const obj = observeArray.find(
      obj => obj.el === entry.target
    ) as observeObject

    obj.cb(entry.isIntersecting, entry.intersectionRatio)
  })
}

export default function observer(
  el: HTMLElement,
  cb: observeObject['cb']
): {
  destroy: () => void
} {
  if (!iObserver)
    iObserver = new IntersectionObserver(callback, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '0px',
    })
  let i = observeArray.push({ cb, el }) - 1
  iObserver.observe(el)

  return {
    destroy: () => {
      iObserver.unobserve(el)
      observeArray.splice(i, 1)
    },
  }
}
