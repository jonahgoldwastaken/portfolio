/** @jsx jsx */
import { useMemo } from 'react'
import { TagCloud } from 'react-tagcloud'
import { jsx, useThemeUI } from 'theme-ui'

const renderer = (
  tag: { key: string; value: string },
  size: number,
  color: string,
) => {
  const { theme } = useThemeUI()
  const fontSize = (theme?.fontSizes as string[])[size] ?? '1rem'
  const key = tag.key || tag.value
  const style = {
    margin: '0px 0.5rem',
    verticalAlign: 'middle',
    display: 'inline-block',
    color,
    fontSize,
  }
  return (
    <li sx={style} key={key}>
      {tag.value}
    </li>
  )
}

interface CloudProps {
  data: Array<{ count: number; value: string }>
}

export const Cloud: React.FC<CloudProps> = ({ data }) => {
  const tags = useMemo(() => {
    let arr = data
    return arr
      .sort((a, b) => b.count - a.count)
      .filter((_, i) => i % 2 === 0)
      .reverse()
      .concat(arr.filter((_, i) => i % 2 === 1))
  }, [data])

  return (
    <TagCloud
      minSize={0}
      maxSize={3}
      tags={tags}
      shuffle={false}
      sx={{ all: 'unset', textAlign: 'center', display: 'block' }}
      colorOptions={{
        luminosity: 'dark',
        hue: '#e89241',
      }}
      renderer={renderer}
    />
  )
}
