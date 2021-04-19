import { Flex, Text, Image, useBreakpointValue, Box } from "@chakra-ui/react";

interface ListItemProps {
  icon: string
  text: string
  mx?: string
}

export function ListItem({ icon, text, mx}: ListItemProps) {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isMobile) {
    return (
      <Flex as="li" align="center" justify="center">
        <Box boxSize="2" bg="yellow.700" borderRadius="50%" />
        <Text fontWeight="semibold" fontSize="1.125rem" ml="2" >{text}</Text>
      </Flex>
    )
  }

  return (
    <Flex as="li" flexDir="column" align="center">
      <Image src={`/icons/${icon}.svg`} alt={icon} boxSize="5.3125rem" />
      <Text fontWeight="semibold" fontSize="1.5rem" mt="6" >{text}</Text>
    </Flex>
  )
}