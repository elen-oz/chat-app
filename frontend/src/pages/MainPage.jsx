import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <Box h='90vh'>
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </Box>
  );
};
export default MainPage;
