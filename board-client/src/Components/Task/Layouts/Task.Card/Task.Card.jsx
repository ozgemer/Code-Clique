/* eslint-disable no-underscore-dangle */
import { Divider } from '@mui/material';
import { useContext, useState } from 'react';
import TasksContext from '../../../../context/TasksContext';
import AddAssigneeBtn from '../../Buttons/Task.Button.AddAssignee/Task.Button.AddAssignee';
import TaskOptions from '../../Buttons/Task.Button.Options/Task.Button.Options';
import TagBtn from '../../Buttons/Task.Button.Tag/Task.Button.Tag';
import Tags from '../../Components/Task.Tags/Task.Tags';
import {
  Card,
  Container,
  IconsList,
  InputStyled,
  TaskDetails,
  TaskTitle,
} from '../../Task.Common.Styled';
import TaskPopup from '../Task.Popup/Task.Popup';
import { DateP, TaskDesc } from './Task.Card.Styled';

function TaskCard({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const { editTask } = useContext(TasksContext);
  const [newTask, setNewTask] = useState(null);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (newTask) editTask({ ...task, title: newTask });
      setIsEditing(!isEditing);
    }
  };

  return (
    <TaskPopup task={task}>
      <Card>
        <Container>
          <div style={{ flex: 6 }}>
            <Tags tags={task.tags} taskId={task._id} />
            <Container style={{ gap: '10px' }}>
              <AddAssigneeBtn taskId={task._id} assignee={task.assignee} />
              <TaskDetails>
                {isEditing ? (
                  <InputStyled
                    id='title'
                    defaultValue={task.title}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    multiline
                  />
                ) : (
                  <TaskTitle onDoubleClick={() => setIsEditing(!isEditing)}>
                    {task.title}
                  </TaskTitle>
                )}
                <TaskDesc>{task.description}</TaskDesc>
              </TaskDetails>
            </Container>
            <DateP> {task.createdAt.substring(0, 10)} </DateP>
          </div>
          <Divider orientation='vertical' flexItem />
          <IconsList>
            <TaskOptions taskId={task._id} setIsEditing={setIsEditing} />
            <TagBtn task={task} />
          </IconsList>
        </Container>
      </Card>
    </TaskPopup>
  );
}

export default TaskCard;
