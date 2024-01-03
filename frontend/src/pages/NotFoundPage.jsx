import { Box, Center, HStack, Text } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Center height='100vh'>
      <HStack>
        <Box fontWeight='800'>404</Box>
        <Box>Page Not Found</Box>
      </HStack>
    </Center>
  );
};
export default NotFoundPage;
