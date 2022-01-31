import * as React from 'react'
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react'
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
      p={3}
      fontSize='large'
      textAlign='center'
    >
      <HStack justify='center'>
        <Text>Made using:</Text>
        <Icon as={FaReact} />
        <Icon as={GrGatsbyjs} />
        <Icon as={SiChakraui} />
        <Icon as={FiFramer} />
      </HStack>
    </Box>
  )
}

export default MadeUsingBox
