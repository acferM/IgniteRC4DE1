import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

interface SliderItemProps {
  title: string
  description: string
  image: string
}

export function SliderItem({ title, description, image }: SliderItemProps) {
  const router = useRouter()

  const handleSliderClick = useCallback(() => {
    router.push(`/${image}`)
  }, [])

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      h={["15.625rem", "28.125rem"]}
      w="100%"
      cursor="pointer"
      onClick={handleSliderClick}
      backgroundSize="cover"
      backgroundImage={`url(slider/${image}.jpg)`}
    >
      <Heading color="white.300" fontSize={["1.5rem", "3rem"]}>{title}</Heading>
      <Text color="white.300" fontWeight="bold" fontSize={["0.875rem", "1.5rem"]} mt="4">{description}</Text>
    </Flex>
  )
}