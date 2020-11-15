import { Card, Heading } from 'theme-ui'

interface ProjectProps {
  backgroundImage?: string
  name: string
  link: string
}

export const Project: React.FC<ProjectProps> = ({
  name,
  link,
  backgroundImage,
}) => {
  return (
    <Card
      as="a"
      href={link}
      sx={{
        '::before': backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
            }
          : undefined,
      }}
      variant="primary"
    >
      <span>{name}</span>
    </Card>
  )
}
