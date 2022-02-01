import * as React from 'react'
import {
  Box,
  HStack,
  Link,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { FaReact } from 'react-icons/fa'
import { FiFramer } from 'react-icons/fi'
import { GrGatsbyjs } from 'react-icons/gr'
import { SiChakraui } from 'react-icons/si'

const MadeUsingBox = () => {
  return (
    <Box
      borderRadius='lg'
      mt={6}
      mb={12}
      bg={useColorModeValue('red.500', 'whiteAlpha.200')}
      color={useColorModeValue('white', 'whiteAlpha.900')}
      p={2}
      fontSize='xl'
      textAlign='center'
    >
      <HStack justify='center' spacing={2.5}>
        <Text align='center'>Made using: </Text>
        <Tooltip label='React' hasArrow>
          <Link
            href='https://reactjs.org/'
            isExternal
            _hover={{ color: useColorModeValue('gray.700', 'red.500') }}
            pt={1}
          >
            <Icon as={FaReact} viewBox='0 0 512 512' />
          </Link>
        </Tooltip>
        <Tooltip label='Gatsby' hasArrow>
          <Link
            href='https://gatsbyjs.com/'
            isExternal
            _hover={{ color: useColorModeValue('gray.700', 'red.500') }}
            pt={1}
          >
            <Icon as={GrGatsbyjs} viewBox='0 0 512 512' />
          </Link>
        </Tooltip>
        <Tooltip label='Chakra UI' hasArrow>
          <Link
            href='https://chakra-ui.com/'
            isExternal
            _hover={{ color: useColorModeValue('gray.700', 'red.500') }}
            pt={1}
          >
            <Icon as={SiChakraui} viewBox='0 0 512 512' />
          </Link>
        </Tooltip>
        <Tooltip label='Framer Motion' hasArrow>
          <Link
            href='https://framer.com/'
            isExternal
            _hover={{ color: useColorModeValue('gray.700', 'red.500') }}
            pt={1}
          >
            <Icon as={FiFramer} viewBox='0 0 512 512' />
          </Link>
        </Tooltip>
      </HStack>
    </Box>
  )
}

export default MadeUsingBox
