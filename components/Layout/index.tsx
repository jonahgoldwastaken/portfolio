import { Content } from './Content'
import Footer from './Footer.mdx'
import Header from './Header.mdx'

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)

export default Layout
