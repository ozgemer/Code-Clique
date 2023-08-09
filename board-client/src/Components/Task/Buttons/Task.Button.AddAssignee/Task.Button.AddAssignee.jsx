/* eslint-disable no-underscore-dangle */
import { Tooltip } from '@mui/material';
import * as React from 'react';
import { MenuItemStyled } from '../../../OptionsBar/Styles/FuncBtnStyled';
import TasksContext from '../../../../context/TasksContext';
import UsersContext from '../../../../context/UsersContext';
import { AvatarStyled, BadgeStyled } from './Task.Button.AddAssignee.Styled';
import {
  DividerStyled,
  MenuStyled,
  OptionsTitle,
} from '../../Task.Common.Styled';

export default function AddAssigneeBtn({ taskId, assignee, avatarSize }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { users } = React.useContext(UsersContext);
  const { editTask, tasks } = React.useContext(TasksContext);
  const [thisUser, setThisUser] = React.useState(
    users.find((u) => u.name === assignee)
  );

  React.useEffect(() => {
    setThisUser(users.find((u) => u.name === assignee));
  }, [assignee, users]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAssigneeUpadte = (name) => {
    // eslint-disable-next-line no-underscore-dangle
    const temp = tasks.find((t) => t._id === taskId);
    editTask({ ...temp, assignee: name });
    handleClose();
  };

  return (
    <div>
      {!thisUser ? (
        <Tooltip title='Add Assignee' arrow placement='top'>
          <BadgeStyled
            badgeContent='+'
            color='primary'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <AvatarStyled
              avatarSize={avatarSize}
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </BadgeStyled>
        </Tooltip>
      ) : (
        <Tooltip title={thisUser.name ?? 'No Name'} arrow placement='top'>
          <AvatarStyled
            avatarSize={avatarSize}
            alt={thisUser.name}
            src={thisUser.image}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
        </Tooltip>
      )}
      <MenuStyled
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <OptionsTitle> Assignees List </OptionsTitle>
        <DividerStyled />
        {users.map((u) => (
          <MenuItemStyled
            onClick={() => {
              handleAssigneeUpadte(u.name);
            }}
            id={u.name}
            key={u._id}
          >
            <AvatarStyled src={u.image} />
            {u.name}
          </MenuItemStyled>
        ))}
      </MenuStyled>
    </div>
  );
}
