/** @jsx jsx */
import { IconButton, jsx, useColorMode } from 'theme-ui'
import Moon from '../../assets/svg/moon.svg'
import Sun from '../../assets/svg/sun.svg'

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
