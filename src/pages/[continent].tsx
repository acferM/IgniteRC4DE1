import { Box, Flex, Heading, HStack, Text, Tooltip, Icon, SimpleGrid, useBreakpointValue } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FiInfo } from "react-icons/fi"
import { CityCard } from "../components/CityCard"
import { Header } from "../components/Header"

export default function Continent() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  const router = useRouter()

  const { continent } = router.query

  const continentsTitle = {
    europe: 'Europa',
    africa: 'Africa',
    oceania: 'Oceania',
    asia: 'Asia',
    "north-america": 'America do norte',
    "south-america": 'America do sul'
  }

  return (
    <Flex flexDir="column" pb="35px">
      <Header />
      <Flex
        justify={isMobile && 'center'}
        align={['center', 'flex-end']}
        pl={['0', "8.75rem"]}
        pb={['0', "3.6875rem"]}
        w="100%"
        h="lg"
        backgroundImage={`url(/banners/europe.jpg)`}
        backgroundSize="cover"
      >
        <Heading color="white.300">{continentsTitle[String(continent)]}</Heading>
      </Flex>

      <Flex as="section" flexDir={['column', 'row']} align="center" mt={['6', "20"]} pl={['16px', "8.75rem"]} pr={['16px', 0]}>
        <Text maxW="600px" fontSize={['0.875rem', '1.5rem']} textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <HStack mt={['4', 0]} ml={['0', "4.375rem"]} spacing="42px">
          <Box>
            <Heading textAlign="center" color="yellow.700" fontSize={['1.5rem', '4.5rem']} fontWeight="600">50</Heading>
            <Text textAlign="center" fontSize={['1.125rem', "1.5rem"]} fontWeight={['400', "600"]}>Países</Text>
          </Box>

          <Box>
            <Heading textAlign="center" color="yellow.700" fontSize={['1.5rem', '4.5rem']} fontWeight="600">60</Heading>
            <Text textAlign="center" fontSize={['1.125rem', "1.5rem"]} fontWeight={['400', "600"]}>Línguas</Text>
          </Box>

          <Box>
            <Heading textAlign={['left', "center"]} color="yellow.700" fontSize={['1.5rem', '4.5rem']} fontWeight="600">27</Heading>
            <Flex align="center">
              <Text fontSize={['1.125rem', "1.5rem"]} fontWeight={['400', "600"]}>Cidades +100</Text>
              <Tooltip label="27 das 100 cidades mais visitadas estão aqui" aria-label="tooltip">
                <Text as="span">
                  <Icon as={FiInfo} fontSize={['10px', "16px"]} color="gray.500" opacity="0.5" ml={[0, "5px"]}/>
                </Text>
              </Tooltip>
            </Flex>
          </Box>
        </HStack>
      </Flex>

      <Box mt={['8', "20"]} pl={['16px', "8.75rem"]} pr={['16px', 0]}>
        <Heading fontSize="1.5rem">Cidades +100</Heading>

        <SimpleGrid mt="20" columns={4} minChildWidth="256px" columnGap="45px" rowGap="48px" maxWidth="1160px" pl={['11', 0]}>
          <CityCard image="london" city="Londres" country="Reino Unido" />
          <CityCard image="london" city="Londres" country="Reino Unido" />
          <CityCard image="london" city="Londres" country="Reino Unido" />
          <CityCard image="london" city="Londres" country="Reino Unido" />
          <CityCard image="london" city="Londres" country="Reino Unido" />
        </SimpleGrid>
      </Box>
    </Flex>
  )
}