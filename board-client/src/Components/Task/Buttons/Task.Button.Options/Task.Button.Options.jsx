import { IconButton, Tooltip } from '@mui/material';
import * as React from 'react';
import { toast } from 'react-toastify';
import TasksContext from '../../../../context/TasksContext';
import icons from '../../../../themes/Icons';
import { MenuItemStyled } from '../../../OptionsBar/Styles/FuncBtnStyled';
import {
  DividerStyled,
  MenuStyled,
  OptionsTitle,
} from '../../Task.Common.Styled';

export default function TaskOptions({ taskId, setIsEditing }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { deleteTask, tasks, editTask } = React.useContext(TasksContext);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTask = () => {
    deleteTask(taskId);
    handleClose();
  };

  const handleEditTask = () => {
    setIsEditing(true);
    handleClose();
  };

  const handleArchiveTask = () => {
    const archiveTask = tasks.find((t) => t._id === taskId);
    editTask({ ...archiveTask, status: 'archive' }, true);
    toast('Task Archived Successfully', {
      position: 'bottom-right',
    });
  };

  const options = [
    { title: 'Edit', icon: icons.edit, func: () => handleEditTask },
    { title: 'Delete', icon: icons.delete, func: () => handleDeleteTask },
    { title: 'Archive', icon: icons.archive, func: () => handleArchiveTask },
  ];

  return (
    <>
      <Tooltip title='More Options' arrow placement='top'>
        <IconButton
          variant='contained'
          id='basic-button'
          size='small'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {icons.moreHoriz}
        </IconButton>
      </Tooltip>
      <MenuStyled
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <OptionsTitle> Task Options </OptionsTitle>
        <DividerStyled />
        {options.map((opt) => (
          <MenuItemStyled onClick={opt.func()} key={opt.title}>
            {opt.icon}
            {opt.title}
          </MenuItemStyled>
        ))}
      </MenuStyled>
    </>
  );
}
