import { Content } from './Content'
import { Footer } from './Footer'
import { Header } from './Header'

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
)

export default Layout
