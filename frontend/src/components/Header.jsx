import { Link, useLocation } from 'react-router-dom';
import { Box, HStack, List, ListItem, Button } from '@chakra-ui/react';
import useAuth from '../hooks/index';
import AuthButton from './AuthButton';

const Header = () => {
  const auth = useAuth();
  const location = useLocation();
  console.log('location', location);

  return (
    <Box as='header' py='0.7rem'>
      <List
        display='flex'
        dir='row'
        justifyContent='center'
        alignItems='center'
      >
        <ListItem px={2}>
          <Link to='/'>Public</Link>
        </ListItem>

        {auth.loggedIn && (
          <ListItem px={2}>
            <Link to='/private'>Private</Link>
          </ListItem>
        )}

        <AuthButton />
      </List>
    </Box>
  );
};
export default Header;
