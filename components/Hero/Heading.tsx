import { HeadingOne } from '../Text'

export const HeroHeading: React.FC = ({ children }) => (
  <HeadingOne
    sx={{
      fontSize: [3, 3, 3, 4, 4],
    }}
  >
    {children}
  </HeadingOne>
)
