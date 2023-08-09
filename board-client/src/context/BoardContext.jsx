/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TasksContext from './TasksContext';

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [board, setBoard] = useState([]);
  const [filterParams, setFilterParams] = useState([]);
  const [currentParam, setCurrentParam] = useState('status');
  const { tasks } = useContext(TasksContext);

  const initBoard = () => {
    console.log('intitBoard');
    let tempTasks = [...tasks];
    const tempFilteredTasks = [];
    const temp = [...board];
    if (filterParams.length > 0) {
      filterParams.forEach((param) => {
        Array.prototype.push.apply(
          tempFilteredTasks,
          tempTasks.filter((t) => t.assignee === param)
        );
      });
      tempTasks = tempFilteredTasks;
    }
    temp.forEach(
      (col) =>
        (col.tasks = tempTasks
          .filter((t) => t.status === col.title)
          .sort((t1, t2) => t1.index - t2.index))
    );
    return temp;
  };

  useEffect(() => {
    if (tasks.length > 0 && board.length > 0) setBoard(initBoard());
  }, [tasks, filterParams]);

  const groupBy = (data, param) => {
    setCurrentParam(param);
    const temptasks = [...data];
    const uniqueColumns = [...new Set(temptasks.map((obj) => obj[param]))];

    return uniqueColumns.map((column) => ({
      id: uuidv4(),
      title: column,
      color: '#F6C927',
      tasks: data
        .filter((task) => task[param] === column)
        .sort((a, b) => a.index[currentParam] - b.index[currentParam]),
    }));
  };

  const addColumn = (title) => {
    const temp = [...board];
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    temp.push({
      _id: uuidv4(),
      title,
      color: `#${randomColor}`,
      tasks: [],
    });
    setBoard(temp);
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        tasks,
        filterParams,
        setFilterParams,
        setBoard,
        groupBy,
        addColumn,
        currentParam,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContext;
