export { colourBrightness }

// Code from https://awik.io/determine-color-bright-dark-using-javascript/, altered to fit my code style
function colourBrightness(colour: string): 'dark' | 'light' {
  if (colour.match(/^rgb/)) return parseRGBColour(colour)
  return parseHexColour(colour)
}

function parseRGBColour(colour: string) {
  const rgbMatch = colour.match(
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
  )

  const r = +rgbMatch[1]
  const g = +rgbMatch[2]
  const b = +rgbMatch[3]

  return brightnessFromRGB({ r, g, b })
}

function parseHexColour(colour: string) {
  const hex = +(
    '0x' + colour.slice(1).replace(colour.length < 5 && /./g, '$&$&')
  )

  const r = hex >> 16
  const g = (hex >> 8) & 255
  const b = hex & 255

  return brightnessFromRGB({ r, g, b })
}

function brightnessFromRGB({ r, g, b }: { r: number; g: number; b: number }) {
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
  return hsp > 127.5 ? 'light' : 'dark'
}
