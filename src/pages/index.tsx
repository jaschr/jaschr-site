import * as React from 'react'
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react'
import MadeUsingBox from '@comps/made-using-box'
import Section from '@comps/section'
import Paragraph from '@comps/paragraph'

const IndexPage = () => {
  return (
    <>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title' mb={2}>
              Jacob Schroeder
            </Heading>
            <Text>I am a 26 year old with a passion for web development.</Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Image
              src='../images/avatar-nobg.png'
              boxSize='128px'
              display='inline-block'
              alt='avatar'
            />
          </Box>
        </Box>
        <MadeUsingBox />
        <Section delay={0.8}>
          <Heading as='h3' variant='section-title'>
            Projects
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            aliquam sem et tortor consequat id porta nibh venenatis. Felis eget
            velit aliquet sagittis id.
          </Paragraph>
        </Section>
        <Section delay={1.6}>
          <Heading as='h3' variant='section-title'>
            My Story
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            tellus orci ac auctor augue mauris augue. Tortor dignissim convallis
            aenean et tortor at.
          </Paragraph>
        </Section>
        <Section delay={2.4}>
          <Heading as='h3' variant='section-title'>
            Contact
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </Section>
      </Container>
    </>
  )
}

export default IndexPage
