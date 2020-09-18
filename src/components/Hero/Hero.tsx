import { Flex } from 'theme-ui'
import { LargeParagraph } from '../Text'
import { HeroHeading } from './Heading'

export const Hero: React.FC = () => (
  <Flex
    as="section"
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      height: ['1', null, null, '80vh'],
    }}
  >
    <HeroHeading>Ik bouw ervaringen die bij mensen blijven hangen</HeroHeading>
    <LargeParagraph>
      Ik ben een Communication &amp; Multimedia Design student gevestigd in
      Amsterdam. Ik draag graag bij aan web- en mobiele apps die waarde geven,
      in plaats van tijd wegnemen. Mijn focus ligt altijd op de gebruiker, en
      wil elke ervaring voor hen zo soepel mogelijk te maken.
    </LargeParagraph>
  </Flex>
)
