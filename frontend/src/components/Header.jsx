import { Link, useLocation } from 'react-router-dom';
import { Box, HStack, List, ListItem } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as='header'>
      <List
        display='flex'
        dir='row'
        justifyContent='center'
        alignItems='center'
        spacing={5}
      >
        <ListItem>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/login'>Login</Link>
        </ListItem>
      </List>
    </Box>
  );
};
export default Header;
