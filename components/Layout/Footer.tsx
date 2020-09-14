import NextLink from 'next/link'
import { Box, Link, Styled } from 'theme-ui'
import { HeadingThree } from '../Text'
export const Footer: React.FC = () => (
  <Box
    as="footer"
    bg="accent"
    sx={{ position: 'sticky', top: '100vh', left: 0 }}
  >
    <Box
      mx="auto"
      p="1"
      mt="1"
      sx={{
        maxWidth: ['80rem', '80rem', '60rem', '80rem', '120rem'],
        width: '100%',
      }}
    >
      <HeadingThree>Contact</HeadingThree>
      <Styled.ul>
        <Styled.li>
          <Link
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/jonahmeijers/"
          >
            LinkedIn
          </Link>
        </Styled.li>
        <Styled.li>
          <Link
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/jonahgoldmember"
          >
            Twitter
          </Link>
        </Styled.li>
        <Styled.li>
          <Link href="mailto:jonahmeijers97@gmail.com">E-mail</Link>
        </Styled.li>
        <Styled.li>
          <NextLink passHref href="/contact-form">
            <Link>Berichtje sturen</Link>
          </NextLink>
        </Styled.li>
      </Styled.ul>
    </Box>
  </Box>
)
