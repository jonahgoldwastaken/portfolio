export function clampToPercentageRange(max: number, min: number = 0) {
  return createRangeFromDomain({
    rangeMin: 0,
    rangeMax: 100,
    domainMin: min,
    domainMax: max,
  })
}

export function createRangeFromDomain({
  rangeMin = 0,
  rangeMax,
  domainMin = 0,
  domainMax,
}: {
  rangeMin?: number
  rangeMax: number
  domainMin?: number
  domainMax: number
}) {
  return (value: number) =>
    value >= domainMax
      ? rangeMax
      : value <= domainMin
      ? rangeMin
      : ((value - domainMin) / (domainMax - domainMin)) *
          (rangeMax - rangeMin) +
        rangeMin
}
