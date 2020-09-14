import { Box } from 'theme-ui'

export const Content: React.FC = ({ children }) => (
  <Box
    as="main"
    mx="auto"
    px="0"
    sx={{ maxWidth: ['80rem', '80rem', '60rem', '80rem', '120rem'] }}
  >
    {children}
  </Box>
)
