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
    margin: '0 1rem',
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

const randomSizeGenerator = () => Math.floor(Math.random() * 100)

export const Cloud = () => {
  const data = useMemo(
    () => [
      { value: 'HTML', count: randomSizeGenerator() },
      { value: 'CSS', count: randomSizeGenerator() },
      { value: 'SASS', count: randomSizeGenerator() },
      { value: 'JavaScript', count: randomSizeGenerator() },
      { value: 'React', count: randomSizeGenerator() },
      { value: 'Next.JS', count: randomSizeGenerator() },
      { value: 'Styled Components', count: randomSizeGenerator() },
      { value: 'Theme-UI', count: randomSizeGenerator() },
      { value: 'Storybook', count: randomSizeGenerator() },
      { value: 'Serverless', count: randomSizeGenerator() },
      { value: 'NodeJS', count: randomSizeGenerator() },
      { value: 'Express.JS', count: randomSizeGenerator() },
      { value: 'Koa.JS', count: randomSizeGenerator() },
      { value: 'MongoDB', count: randomSizeGenerator() },
      { value: 'Mongoose', count: randomSizeGenerator() },
      { value: 'TypeScript', count: randomSizeGenerator() },
      { value: 'Interaction Design', count: randomSizeGenerator() },
      { value: 'Animation', count: randomSizeGenerator() },
      { value: 'Information Architecture', count: randomSizeGenerator() },
      { value: 'Sitemaps', count: randomSizeGenerator() },
      { value: 'Graphic Design', count: randomSizeGenerator() },
      { value: 'Flowcharts', count: randomSizeGenerator() },
      { value: 'Job stories', count: randomSizeGenerator() },
      { value: 'Wireframes', count: randomSizeGenerator() },
    ],
    [],
  )

  return (
    <TagCloud
      minSize={0}
      maxSize={3}
      tags={data}
      sx={{ all: 'unset', textAlign: 'center', display: 'block' }}
      colorOptions={{
        luminosity: 'dark',
        hue: '#e89241',
      }}
      renderer={renderer}
    />
  )
}
