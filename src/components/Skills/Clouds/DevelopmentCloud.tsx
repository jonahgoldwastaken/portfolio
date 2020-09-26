import { Cloud } from './Cloud'

export const DevelopmentCloud: React.FC = () => (
  <Cloud
    data={[
      { value: 'HTML', count: 90 },
      { value: 'CSS', count: 90 },
      { value: 'SASS', count: 85 },
      { value: 'JavaScript', count: 80 },
      { value: 'React', count: 55 },
      { value: 'Next.JS', count: 60 },
      { value: 'Styled Components', count: 70 },
      { value: 'Theme-UI', count: 30 },
      { value: 'Storybook', count: 25 },
      { value: 'Serverless', count: 20 },
      { value: 'NodeJS', count: 70 },
      { value: 'Express.JS', count: 55 },
      { value: 'Koa.JS', count: 80 },
      { value: 'MongoDB', count: 30 },
      { value: 'Mongoose', count: 70 },
      { value: 'TypeScript', count: 45 },
      { value: 'iOS', count: 20 },
      { value: 'Animation', count: 80 },
    ]}
  />
)
