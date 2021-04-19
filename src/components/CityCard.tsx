import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  image: string
  city: string
  country: string
}

export function CityCard({ image, city, country }: CityCardProps) {
  return (
    <Flex flexDir="column" bg="white.200">
      <Image src={`/cards/cities/${image}.jpg`} alt={city}/>

      <Flex
        align="center"
        justify="space-between"
        px="6"
        pt="1.125rem"
        pb="1.5625rem"
        borderWidth="2px"
        borderColor="yellow.700"
        borderTopWidth="0"
        borderBottomLeftRadius="4px"
        borderBottomRightRadius="4px"
      >
        <Box>
          <Heading fontSize="1.25rem" fontFamily="Barlow" fontWeight="semibold">{city}</Heading>
          <Text mt="3"fontSize="1rem" fontFamily="Barlow" fontWeight="500" color="gray.500">{country}</Text>
        </Box>

        <Image src={`/cards/countries/${country}.svg`} />
      </Flex>
    </Flex>
  )
}