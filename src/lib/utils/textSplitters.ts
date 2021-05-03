export { splitTextIntoLetters, splitTextIntoWords }

function splitTextIntoLetters(text: string) {
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

function splitTextIntoWords(text: string) {
  let currCh = 0
  return text.split(' ').reduce((acc, curr) => {
    if (!curr) return acc
    return curr.includes('**')
      ? acc +
          `<strong class="ch-${++currCh}">${
            curr.replace('**', '').split('**')[0]
          }</strong>${
            curr.replace('**', '').split('**').length === 2
              ? `<span class="ch-${++currCh}">${
                  curr.replace('**', '').split('**')[1]
                }</span>
`
              : ''
          }`
      : acc +
          `<span class="ch-${++currCh}">${curr}</span>
`
  }, '')
}
