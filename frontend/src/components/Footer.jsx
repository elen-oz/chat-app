import { Box, HStack, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack as='footer' justify='center'>
      <Link href='https://github.com/elen-oz/chat-react' isExternal>
        <Text color='green'>source code</Text>
      </Link>
      <Text>&copy; made by</Text>
      <Link href='https://github.com/elen-oz/chat-react' isExternal>
        <Text color='green'>elen-oz</Text>
      </Link>
    </HStack>
  );
};
export default Footer;
