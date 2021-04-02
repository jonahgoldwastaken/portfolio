export function letterAnimation(node: HTMLElement, text: string) {
  node.innerHTML = splitTextIntoLetterSpans(text)
  return {
    update(text: string) {
      node.innerHTML = splitTextIntoLetterSpans(text)
    },
  }
}

function splitTextIntoLetterSpans(text: string) {
  let currCh = 0
  return text.split(' ').reduce(
    (acc, curr) =>
      (acc += `<span class="w">${curr
        .split('')
        .map(ch => `<span class="ch-${++currCh}">${ch}</span>`)
        .join('')}</span>&nbsp;`),
    ''
  )
}

export function wordAnimation(node: HTMLElement, text: string) {
  node.innerHTML = splitTextIntoWordSpans(text)
  return {
    update(text: string) {
      node.innerHTML = splitTextIntoWordSpans(text)
    },
  }
}

function splitTextIntoWordSpans(text: string) {
  let currCh = 0
  return text.split(' ').reduce((acc, curr) => {
    if (!curr) return acc
    return curr.includes('**')
      ? acc +
          `<strong class="ch-${++currCh}">${curr.replace(
            /\*\*/g,
            ''
          )}</strong>&nbsp;`
      : acc + `<span class="ch-${++currCh}">${curr}</span>&nbsp;`
  }, '')
}
