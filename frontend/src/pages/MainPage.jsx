import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainPage = () => {
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
