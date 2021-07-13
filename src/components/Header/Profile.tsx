import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcos Leal</Text>
        <Text color="gray.300" fontSize="small">
          MarcosLeal@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Marcos Leal" src="https://github.com/MarcosLealDev.png" />
    </Flex>
  );
}