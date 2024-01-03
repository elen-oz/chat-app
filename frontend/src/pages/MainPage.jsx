import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <Box h='90vh'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </Box>
  );
};
export default MainPage;
