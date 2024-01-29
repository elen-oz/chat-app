import { Link, useLocation } from 'react-router-dom';
import { Box, HStack, List, ListItem, Button } from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';

const AuthButton = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    <Button onClick={auth.logOut}>Log out</Button>
  ) : (
    <Button as={Link} to='/login' state={{ from: location }}>
      Log in
    </Button>
  );
};

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
          <Link to='/'>Public</Link>
        </ListItem>
        <ListItem px={2}>
          <Link to='/private'>Private</Link>
        </ListItem>

        <AuthButton />
      </List>
    </Box>
  );
};
export default Header;
