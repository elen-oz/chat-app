import { Link, useLocation } from 'react-router-dom';
import { Box, HStack, List, ListItem } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as='header' py='0.7rem'>
      <List
        display='flex'
        dir='row'
        justifyContent='center'
        alignItems='center'
      >
        <ListItem px={2}>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem px={2}>
          <Link to='/login'>Login</Link>
        </ListItem>
      </List>
    </Box>
  );
};
export default Header;
