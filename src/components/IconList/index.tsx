import { HStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import { ListItem } from "./ListItem";

export function IconList() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  })

  console.log(isMobile)

  if (isMobile) {
    return (
      <Stack mt="2.25rem" spacing="27px">
        <HStack spacing="71px">
          <ListItem icon="cocktail" text="vida Noturna" />
          <ListItem icon="surf" text="praia" />
        </HStack>
        <HStack spacing="71px">
          <ListItem icon="building" text="moderno" />
          <ListItem icon="museum" text="clássico" />
        </HStack>
        <ListItem icon="earth" text="e mais..." mx="auto" />
      </Stack>
    )
  }
  
  return (
    <HStack mt="20" as="ul" spacing="8.125rem">
      <ListItem icon="cocktail" text="vida Noturna" />
      <ListItem icon="surf" text="praia" />
      <ListItem icon="building" text="moderno" />
      <ListItem icon="museum" text="clássico" />
      <ListItem icon="earth" text="e mais..." />
    </HStack>
  )
}