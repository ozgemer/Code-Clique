/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-console */
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import {
  deletTask,
  getAllTasks,
  patchTask,
  postTask,
} from '../utils/services/fetchBoardData';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState();

  const addTask = async (newTask) => {
    const { status, data } = await postTask(newTask);
    const allTasks = await getAllTasks();

    if (status === 200) {
      setTasks(allTasks);
      toast(data.info, {
        position: 'bottom-right',
      });
    }
    if (status === 403)
      toast.error(data.error, {
        position: 'bottom-right',
      });
    if (status === 500)
      toast.error(data.message, {
        position: 'bottom-right',
      });
  };

  const editTask = async (updateTask, toNotify) => {
    const { status, data } = await patchTask(updateTask._id, updateTask);
    if (status === 200) {
      setTasks(data.tasks);
      !toNotify &&
        toast(data.info, {
          position: 'bottom-right',
        });
    }
    if (status === 400)
      toast.error(data.error, {
        position: 'bottom-right',
      });
    if (status === 500)
      toast.error(data.message, {
        position: 'bottom-right',
      });
  };

  const deleteTask = async (delTaskId) => {
    const { status, data } = await deletTask(delTaskId);

    if (status === 200) {
      setTasks(tasks.filter((t) => t._id !== delTaskId));
      toast(data.info, {
        position: 'bottom-right',
      });
    }
    if (status === 400)
      toast.error(data.error, {
        position: 'bottom-right',
      });
    if (status === 500)
      toast.error(data.message, {
        position: 'bottom-right',
      });
  };

  const addTag = (taskId, tag) => {
    const temp = tasks.find((t) => t._id === taskId);
    temp.tags.push(tag);
    editTask(temp);
  };

  const deleteTag = (taskId, tag) => {
    const temp = tasks.find((t) => t._id === taskId);
    editTask({ ...temp, tags: temp.tags.filter((t) => t !== tag) });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tags,
        setTasks,
        setTags,
        addTask,
        editTask,
        deleteTask,
        deleteTag,
        addTag,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksContext;
