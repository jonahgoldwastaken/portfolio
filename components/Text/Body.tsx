import { Text, Link } from 'theme-ui'

export const Paragraph: React.FC = props => <Text my="1" as="p" {...props} />
export const Anchor: React.FC = props => <Link as="a" {...props} />
