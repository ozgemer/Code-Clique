/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-template */
import { IconButton, Stack } from '@mui/material';
import { useContext, useState } from 'react';
import TasksContext from '../../../../context/TasksContext';
import icons from '../../../../themes/Icons';
import TaskMessage from '../Task.Message/Task.Message';
import {
  ChatContainer,
  CommentContainer,
  CommentInput,
} from './Task.Chat.Styled';

export default function TaskChat({ task }) {
  const [messageInput, setMessageInput] = useState('');
  const { editTask, tasks } = useContext(TasksContext);
  const thisUser = JSON.parse(localStorage.getItem('userInfo'));

  const handleChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (messageInput) {
        const now = new Date();
        const current = now.getHours() + ':' + now.getMinutes();
        const newTask = tasks.find((t) => t._id === task._id);
        const newMessage = {
          assignee: thisUser._id,
          text: messageInput,
          time: current,
        };
        newTask.messages.push(newMessage);
        editTask(newTask);
        setMessageInput('');
      }
    }
  };

  return (
    <ChatContainer padding={0}>
      <Stack spacing={0.5}>
        <Stack
          spacing={2}
          maxHeight='45vh'
          overflow='auto'
          alignItems='baseline'
          padding={{ xs: 1, sm: 1.5, md: 2 }}
        >
          {task.messages.map((message) => (
            <TaskMessage message={message} key={message._id} />
          ))}
        </Stack>
        <CommentContainer>
          <Stack spacing={2} direction='row' alignItems='center'>
            <IconButton>{icons.add}</IconButton>
            <CommentInput
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={messageInput}
              fullWidth
            />
            <IconButton>{icons.send}</IconButton>
          </Stack>
        </CommentContainer>
      </Stack>
    </ChatContainer>
  );
}
