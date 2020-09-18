/** @jsx jsx */
import { IconButton, useColorMode, jsx } from 'theme-ui'
import Sun from '../../assets/svg/sun.svg'
import Moon from '../../assets/svg/moon.svg'

export const ToggleColorButton: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <IconButton
      p="0rem"
      ml={1}
      sx={{
        width: '1.5rem',
        cursor: 'pointer',
      }}
      onClick={() => setColorMode(colorMode === 'dark' ? 'default' : 'dark')}
    >
      {colorMode === 'dark' ? <Sun /> : <Moon />}
    </IconButton>
  )
}
