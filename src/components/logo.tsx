import * as React from 'react'
import { Link } from 'gatsby'
import { HStack, Image, Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link to='/'>
      <HStack>
        <Image
          src={useColorModeValue(
            '../images/logo-dark.png',
            '../images/logo.png'
          )}
          boxSize='30px'
          alt='logo'
        />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          hover
          fontWeight='bold'
          ml={3}
          mt={2}
          lineHeight='30px'
          alignItems='center'
        >
          Jacob Schroeder
        </Text>
      </HStack>
    </Link>
  )
}

export default Logo
