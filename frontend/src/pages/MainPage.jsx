import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

  return (
    <>
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
      <div>Гипотетический ФУТЕР</div>
    </>
  );
};
export default MainPage;
