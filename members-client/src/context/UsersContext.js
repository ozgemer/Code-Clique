import React, { createContext, useState, useEffect } from 'react';
import { useQuery } from "react-query";
import { getUsers, updateUser } from '../../utils/services/MembersData.service';
import { getAllData } from "../../utils/services/fetchBoardData";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const { data: usersData, isLoading: usersLoading } = useQuery("users", () => getUsers());
  const { data: boardData, isLoading: boardLoading } = useQuery("board", () => getAllData());
  const [users, setUsers] = useState([]);
  const [columns, setColumns] = useState();
  const [tasks, setTasks] = useState();

  const setBoardData = async (boards, newTasks) => {
    setColumns(boards[0].columns);
    setTasks(newTasks);
  };

  useEffect(() => {
    if (boardLoading) return;
    setBoardData(boardData.boards, boardData.tasks);
  }, [boardLoading]);

  useEffect(() => {
    !usersLoading && setUsers(usersData);
  }, [usersLoading]);

  if (usersLoading || boardLoading) return <></>;

  return (
    <UsersContext.Provider value={{ users, setUsers, updateUser, columns, setColumns, tasks, setTasks }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };