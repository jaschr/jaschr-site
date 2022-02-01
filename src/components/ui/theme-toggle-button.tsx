import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.16 }}
      >
        <Tooltip label='Toogle color mode' placement='right'>
          <IconButton
            aria-label='Toggle theme'
            colorScheme={useColorModeValue('red', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          />
        </Tooltip>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
