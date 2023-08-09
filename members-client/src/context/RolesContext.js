import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const RolesContext = createContext();

const RolesProvider = ({ children }) => {
  const [teamRoles, setTeamRoles] = useState();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();

  const getRoles = async () => {
    const response = await axios.get(
      'https://code-clique-backend.onrender.com/roles'
    );
    const { data } = response;
    setTeamRoles(data);
    setValue(data.length ? data[0]._id : '');
    setLoading(false);
  };
  const updateRole = async (role, method) => {
    const response = await axios[method](
      'https://code-clique-backend.onrender.com/roles',
      {
        data: {
          role: role,
        },
      }
    );
    const { data } = response;
    setTeamRoles(data);
    if (method === 'post') setValue(data.at(-1)._id);
    if (data.length) setValue(data[0]._id);
  };
  const setRole = (roleToUpdate) => {
    setTeamRoles(
      teamRoles.map((role) => {
        if (role._id !== roleToUpdate._id) return role;
        return roleToUpdate;
      })
    );
  };
  const setRoles = async (singular, data) => {
    if (singular) {
      setRole(data);
      await axios.patch('https://code-clique-backend.onrender.com/roles/one', {
        data,
      });
      return;
    }
    const newRoles = data.map((role, index) => ({ ...role, index: index }));
    setTeamRoles(newRoles);
    await axios.patch('https://code-clique-backend.onrender.com/roles', {
      data: newRoles,
    });
  };
  useEffect(() => {
    getRoles();
  }, []);

  if (loading) return <></>;

  return (
    <RolesContext.Provider
      value={{ teamRoles, setRoles, setRole, updateRole, value, setValue }}
    >
      {children}
    </RolesContext.Provider>
  );
};

export { RolesContext, RolesProvider };
