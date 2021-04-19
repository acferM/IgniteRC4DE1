import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: {
      200: '#FFFFFF',
      300: '#F5F8FA'
    },
    gray: {
      300: '#DADADA',
      500: '#999999',
      700: '#47585B'
    },
    yellow: {
      700: '#FFBA08'
    },
    black: {
      1000: '#000000'
    }
  },
  styles: {
    body: {
      bg: 'white.300',
      color: 'gray.700'
    }
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins'
  }
})