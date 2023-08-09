import React, { createContext, useState, useEffect } from "react";
import Axios from "../Api/Axios/Axios";

const RolesContext = createContext();

const RolesProvider = ({ children }) => {
  const [teamRoles, setTeamRoles] = useState();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState();

  const getRoles = async () => {
    const response = await Axios.get("/roles");
    const { data } = response;
    setTeamRoles(data);
    setValue(data.length ? data[0]._id : '');
    setLoading(false);
  };
  const updateRole = async (role, method) => {
    if (method === "delete" && teamRoles.length > 1) setValue(teamRoles[0]._id);

    const response = await Axios[method]("/roles", {
      data: {
        role: role
      }
    });

    const { data } = response;
    setTeamRoles(data);
    if (method === "post") return setValue(data.at(-1)._id);
  }
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
      await Axios.patch("/roles/one", {
        data
      });
      return;
    }

    const newRoles = data.map((role, index) => (
      { ...role, index: index }
    ));
    setTeamRoles(newRoles);
    const response = await Axios.patch("/roles", {
      data: newRoles
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