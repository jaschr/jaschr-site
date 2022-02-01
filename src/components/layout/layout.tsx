import { Box, Container } from '@chakra-ui/react'
import SEO from '@comps/util/seo'
import React from 'react'
import Navbar from '@comps/sections/navbar'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      <Box as='main' pt={8}>
        <Container maxW='container.md' pt={14}>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Layout
