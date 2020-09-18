import { HTMLProps } from 'react'
import { Link, LinkProps, Text } from 'theme-ui'

export const Paragraph: React.FC = props => <Text my="1" as="p" {...props} />
export const Anchor: React.FC<
  HTMLProps<HTMLAnchorElement> & LinkProps
> = props => <Link as="a" {...props} />
export const LargeParagraph: React.FC = props => (
  <Text as="p" my="1" variant="largeParagraph" {...props} />
)
