import { Link, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import useAuth from '../hooks/index';

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

export default AuthButton;
