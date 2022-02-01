import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('hsl(34.3, 41.2%, 90%)', 'hsl(240, 4.5%, 13.1%)')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: 44,
      },
      'section-title': {
        fontFamily: 'Lora Semibold',
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 3,
        textDecorationColor: 'hsl(0, 0%, 26%)',
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
}

const fonts = {
  heading: 'Playfair Display Bold',
  body: 'Nunito',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  components,
  config,
  fonts,
  styles,
})

export default theme
