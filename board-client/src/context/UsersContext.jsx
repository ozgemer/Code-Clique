/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable consistent-return */
import { createContext, useEffect, useState } from 'react';
import fetchUsersData from '../utils/services/fetchUsersData';

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchUsersData().then((data) => {
      setUsers(data);
      setisLoading(false);
    });
  }, []);

  if (isLoading) return;

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
}

export default UsersContext;
