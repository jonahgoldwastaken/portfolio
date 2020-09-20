/** @jsx jsx */
import { Container, jsx } from 'theme-ui'
import { LargeParagraph } from '../Text'
import { HeroHeading } from './Heading'

export const Hero: React.FC = () => (
  <Container as="section" variant="sectionLayout">
    <HeroHeading>Ik bouw ervaringen die bij mensen blijven hangen</HeroHeading>
    <LargeParagraph>
      Ik ben een Communication &amp; Multimedia Design student gevestigd in
      Amsterdam. Ik draag graag bij aan web- en mobiele apps die waarde geven,
      in plaats van tijd wegnemen. Mijn focus ligt altijd op de gebruiker, en
      wil elke ervaring voor hen zo soepel mogelijk te maken.
    </LargeParagraph>
  </Container>
)
