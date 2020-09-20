import { useEffect, useState } from 'react'
import { Card, SxProps } from 'theme-ui'

interface ProjectProps {
  backgroundImage?: string
}

export const Project: React.FC<ProjectProps> = ({
  children,
  backgroundImage,
}) => {
  const [styling, setStyling] = useState<SxProps['sx']>()

  useEffect(() => {
    let styleObject: SxProps['sx']
    if (backgroundImage) {
      styleObject = {
        ...styleObject,
        '::before': {
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.2,
        },
      }
    }
    setStyling(styleObject)
  }, [])

  return (
    <Card sx={styling} as="article" variant="primary">
      {children}
    </Card>
  )
}
