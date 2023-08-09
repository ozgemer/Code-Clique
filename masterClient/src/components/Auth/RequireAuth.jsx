import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'masterClient/authContext';

function requireAuth() {
  const authContext = useContext(AuthContext);
  return authContext.isAuthicated() ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace />
  );
}

export default requireAuth;
