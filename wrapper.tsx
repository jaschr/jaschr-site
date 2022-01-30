/* eslint-disable */
import React from 'react'
import Layout from './src/components/layout'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './src/@chakra-ui/gatsby-plugin/theme'

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}
