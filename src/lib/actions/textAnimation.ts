import './textAnimation.scss'

import observer from './intersectionObserver'

interface BaseTAProps {
  text?: string
  readonly delay?: boolean
  readonly splitOn: 'letters' | 'words'
  animate?: boolean
}

interface TAProps extends BaseTAProps {}

interface iObservedTAProps extends BaseTAProps {
  readonly threshold: number
  animate?: never
}

export default function textAnimation(
  node: HTMLElement,
  { splitOn, text, delay, animate = true }: TAProps
) {
  const cssClasses = [
    'text-animate',
    delay ? 'delay' : '',
    animate ? 'animate' : '',
  ].filter(s => !!s)

  node.classList.add(...cssClasses)

  node.innerHTML =
    splitOn === 'letters'
      ? splitTextIntoLetterSpans(text || node.innerText)
      : splitTextIntoWordSpans(text || node.innerText)

  return {
    update({ text }: TAProps) {
      node.innerHTML =
        splitOn === 'letters'
          ? splitTextIntoLetterSpans(text || node.innerText)
          : splitTextIntoWordSpans(text || node.innerText)
    },

    destroy() {
      Array.from(node.children).forEach(node => node.remove())
    },
  }
}

export function iObservedTextAnimation(
  node: HTMLElement,
  { splitOn, threshold, delay, text }: iObservedTAProps
) {
  const cssClasses = ['text-animate', delay ? 'delay' : ''].filter(s => !!s)
  node.classList.add(...cssClasses)
  const iObserver = observer(node, (bool, amount) => {
    if (node.classList.contains('animate')) return
    if (bool && amount >= threshold) node.classList.add('animate')
  })

  node.innerHTML =
    splitOn === 'letters'
      ? splitTextIntoLetterSpans(text || node.innerText)
      : splitTextIntoWordSpans(text || node.innerText)

  return {
    update({ text }: iObservedTAProps) {
      node.innerHTML =
        splitOn === 'letters'
          ? splitTextIntoLetterSpans(text || node.innerText)
          : splitTextIntoWordSpans(text || node.innerText)
    },
    destroy() {
      iObserver.destroy()
    },
  }
}

function splitTextIntoLetterSpans(text: string) {
  let currCh = 0
  return text.split(' ').reduce(
    (acc, curr) =>
      acc +
      `<span class="w">${curr
        .split('')
        .map(ch => `<span class="ch-${++currCh}">${ch}</span>`)
        .join('')}</span>
`,
    ''
  )
}

function splitTextIntoWordSpans(text: string) {
  let currCh = 0
  return text.split(' ').reduce((acc, curr) => {
    if (!curr) return acc
    return (
      acc +
      `<span style="--index: ${++currCh};">${curr}</span>
`
    )
  }, '')
}
