import Link from 'next/link'
import { Box, Flex, Heading, NavLink } from 'theme-ui'

export const Header: React.FC = () => {
  return (
    <Box as="header">
      <Flex
        py="2"
        mb="1"
        mx="auto"
        px="1"
        sx={{
          width: '100%',
          flexDirection: ['column', 'column', 'row', 'row', 'row'],
          alignItems: 'center',
          maxWidth: ['80rem', '80rem', '60rem', '80rem', '120rem'],
        }}
      >
        <Heading
          as="h1"
          px="0.25em"
          mr={['0em', '0em', 'auto', 'auto', 'auto']}
          mb={[0, 0, '0rem', '0rem', '0rem']}
        >
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
            rel="noreferrer noopener"
          >
            GitHub
          </NavLink>
        </Box>
      </Flex>
    </Box>
  )
}
