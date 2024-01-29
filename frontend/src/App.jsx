import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
// wrapper
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';

import AuthProvider from './context/AuthContext';
import useAuth from './hooks/index';

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
    <Provider store={store}>
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
                    <ChatPage />
                  </PrivateRoute>
                }
              />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
