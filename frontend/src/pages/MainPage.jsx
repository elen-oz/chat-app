import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useAuth();

  useEffect(() => {
    console.log('Current location is ', location);
    console.log('Current token is ', token);

    if (!token && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [location, navigate, token]);

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
