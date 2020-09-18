
import { HTMLProps } from 'react'
import { Text, Link, LinkProps } from 'theme-ui'

export const Paragraph: React.FC = props => <Text my="1" as="p" {...props} />
export const Anchor: React.FC<
  HTMLProps<HTMLAnchorElement> & LinkProps
> = props => <Link as="a" {...props} />
