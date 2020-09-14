import Link from 'next/link'
import { Box, Flex, Heading, NavLink } from 'theme-ui'

export const Header: React.FC = () => (
  <Flex
    my="1"
    mx="auto"
    px="0"
    sx={{
      width: '100%',
      flexDirection: ['column', 'column', 'row', 'row', 'row'],
      alignItems: 'center',
      maxWidth: ['80rem', '80rem', '60rem', '80rem', '120rem'],
    }}
    as="header"
  >
    <Heading as="h1" mb={[0, 0, '0rem', '0rem', '0rem']} sx={{ flex: 1 }}>
      Jonah Meijers
    </Heading>
    <Box as="nav">
      <Link href="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/about">
        <NavLink>About</NavLink>
      </Link>
      <NavLink
        href="https://github.com/theonejonahgold"
        target="_blank"
        referrerPolicy="no-refferer"
      >
        GitHub
      </NavLink>
    </Box>
  </Flex>
)
