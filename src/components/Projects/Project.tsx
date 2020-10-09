import { Card } from 'theme-ui'

interface ProjectProps {
  backgroundImage?: string
}

export const Project: React.FC<ProjectProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <Card
      sx={{
        '::before': backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              opacity: 0.2,
            }
          : null,
      }}
      as="article"
      variant="primary"
    >
      {children}
    </Card>
  )
}
