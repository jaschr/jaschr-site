import * as React from 'react'
import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { FaReact } from 'react-icons/fa'
import { GrGatsbyjs } from 'react-icons/gr'
import { SiChakraui } from 'react-icons/si'

const IndexPage = () => {
  return (
    <>
      <Container>
        <Box
          borderRadius='lg'
          mb={6}
          bg={useColorModeValue('purple.500', 'whiteAlpha.200')}
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
          </HStack>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title' mb={2}>
              Who am I?
            </Heading>
            <Text>
              I am a 26 year old developer with a passion for web development.
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default IndexPage
