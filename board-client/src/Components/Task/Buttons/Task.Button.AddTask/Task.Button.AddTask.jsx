import { useContext, useState } from 'react';

// Components
import { Button } from '@mui/material';

// Styles
import { AddTask } from '../../../OptionsBar/Styles/ButtonsStyle';
import { InputStyled } from '../../Task.Common.Styled';
import { NewTaskCard } from './Task.Button.AddTask.Styled';

// Data
import BoardContext from '../../../../context/BoardContext';
import TasksContext from '../../../../context/TasksContext';

function AddTaskBtn({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const { addTask } = useContext(TasksContext);
  const { board } = useContext(BoardContext);
  const [newTask, setNewTask] = useState({});

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.id]: event.target.value });
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleEditTask = () => {
    addTask({
      ...newTask,
      status: title,
      assignee: null,
      index: board.find((c) => c.title === title).tasks.length,
      messages: [],
      tags: [],
    });
    setNewTask({});
    toggleIsOpen();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleEditTask();
    }
  };

  if (isOpen)
    return (
      <NewTaskCard id='newTaskCard'>
        <InputStyled
          id='title'
          placeholder='Title'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          multiline
        />
        <Button variant='contained' onClick={handleEditTask}>
          Add
        </Button>
      </NewTaskCard>
    );

  if (!isOpen) return <AddTask onClick={toggleIsOpen}>+ Add Task</AddTask>;
}

export default AddTaskBtn;
