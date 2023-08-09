/* eslint-disable no-underscore-dangle */
import { Stack } from '@mui/material';
import { useContext } from 'react';
import UsersContext from '../../../../context/UsersContext';
import { AvatarStyled } from '../../Buttons/Task.Button.AddAssignee/Task.Button.AddAssignee.Styled';
import {
  MessageContainer,
  MessageDate,
  MessageText,
  UserTitle,
} from './Task.Message.Styled';

export default function TaskMessage({ message }) {
  const { users } = useContext(UsersContext);
  const { assignee, text, time } = message;

  const thisUser = users.find((user) => user._id === assignee);

  return (
    <MessageContainer>
      <Stack spacing={0.5}>
        <Stack spacing={2} direction='row' alignItems='center'>
          <AvatarStyled
            alt={thisUser.name}
            src={thisUser.image}
            avatarSize='small'
          />
          <UserTitle>{thisUser.name}</UserTitle>
        </Stack>
        <Stack
          spacing={2}
          direction='row'
          justifyContent='space-between'
          alignItems='flex-end'
        >
          <MessageText>{text}</MessageText>
          <MessageDate> {time} </MessageDate>
        </Stack>
      </Stack>
    </MessageContainer>
  );
}
