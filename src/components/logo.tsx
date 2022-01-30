import * as React from 'react'
import { Link } from 'gatsby'
import { Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link to='/'>
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        hover
        fontWeight='bold'
        ml={3}
        mt={2}
      >
        Jacob Schroeder
      </Text>
    </Link>
  )
}

export default Logo
