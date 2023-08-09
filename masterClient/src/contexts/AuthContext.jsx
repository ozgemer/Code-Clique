import { createContext, useState } from 'react';
import { useContext } from 'react';
const AuthContext = createContext();

function AuthProvider({ children }) {
  const { Provider } = AuthContext;
  const token = localStorage.getItem('token');
  const userInfo = localStorage.getItem('userInfo');
  const expiresAt = localStorage.getItem('expiresAt');
  const [authState, setauthState] = useState({
    token,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  });

  const setAuthInfo = ({ token, expiresAt, userInfo }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setauthState({
      token,
      expiresAt,
      userInfo,
    });
  };

  const isAuthicated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false;
    }
    return authState.expiresAt > new Date().getTime() / 1000;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('userInfo');
    setauthState({
      token: null,
      expiresAt: null,
      userInfo: {},
    });
  };

  return (
    <Provider
      value={{
        authState,
        setAuthInfo: (info) => setAuthInfo(info),
        isAuthicated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthContext, AuthProvider, useAuth };
