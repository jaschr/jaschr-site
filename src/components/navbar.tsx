import * as React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import Logo from '@comps/logo'
import ThemeToggleButton from '@comps/theme-toggle-button'

const Navbar = () => {
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('hsl(34.3, 41.2%, 90%)', 'hsl(240, 4.5%, 13.1%)')}
      zIndex={1}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack></Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
