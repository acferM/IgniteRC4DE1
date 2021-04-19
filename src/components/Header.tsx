import { useRouter } from 'next/router'
import { FiChevronLeft } from 'react-icons/fi'
import { Flex, Image, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { useCallback } from 'react'

export function Header() {
  const router = useRouter()

  const hasGoBackButton = router.asPath !== '/'

  const handleGoBack = useCallback(() => {
    router.push('/')
  }, [])

  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex as="header" align="center" h={['3.125rem', '6.25rem']} px={['4', "8.75rem"]} w="100%">
      { hasGoBackButton && 
        <IconButton
          bg="transparent"
          _hover={{
            bg: 'transparent'
          }}
          aria-label="Chevron Left"
          icon={<FiChevronLeft/>}
          fontSize={32}
          color="gray.700"
          onClick={handleGoBack}
        /> 
      }
      <Image src={isMobile ? 'logo-mobile.svg' : 'logo.svg'} alt="logo" mx="auto" />
    </Flex>
  )
}