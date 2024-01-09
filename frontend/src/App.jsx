import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Button } from '@chakra-ui/react';

// wrapper
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivatePage from './pages/PrivatePage';
import NotFoundPage from './pages/NotFoundPage';

import AuthContext from './context/index';
import useAuth from './hooks/index';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='public' element={<HomePage />} />
            <Route
              path='private'
              element={
                <PrivateRoute>
                  <PrivatePage />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
