import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcos Leal</Text>
          <Text color="gray.300" fontSize="small">
            MarcosLeal@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcos Leal" src="https://github.com/MarcosLealDev.png" />
    </Flex>
  );
}