/** @jsx jsx */
import { Box, jsx } from 'theme-ui'

export const Content: React.FC = ({ children }) => (
  <Box
    as="main"
    mx="auto"
    px="1"
    sx={{ maxWidth: ['80rem', '80rem', '60rem', '80rem', '100rem'] }}
  >
    {children}
  </Box>
)
