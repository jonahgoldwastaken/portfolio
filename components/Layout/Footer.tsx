import { Box } from 'theme-ui'
import { Paragraph } from '../Text'

export const Footer: React.FC = () => (
  <Box my="1" as="footer" bg="accent">
    <Box
      mx="auto"
      px="0"
      sx={{ maxWidth: ['80rem', '80rem', '60rem', '80rem', '120rem'] }}
    >
      <Paragraph>hier komt een footer</Paragraph>
    </Box>
  </Box>
)
