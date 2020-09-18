import { HeadingOne } from '../Text'

export const HeroHeading: React.FC = props => (
  <HeadingOne
    sx={{
      fontSize: [4, null, 4, null, 4, null, null],
    }}
    {...props}
  />
)
