import TourIcon from '@mui/icons-material/Tour';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import { Button, Container, Divider, Stack, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import * as React from 'react';
import { useContext } from 'react';
import TasksContext from '../../../../context/TasksContext';
import AddAssigneeBtn from '../../Buttons/Task.Button.AddAssignee/Task.Button.AddAssignee';
import TagBtn from '../../Buttons/Task.Button.Tag/Task.Button.Tag';
import TaskChat from '../../Components/Task.Chat/Task.Chat';
import { ChipStyled } from '../../Task.Common.Styled';
import {
  BorderLinearProgress,
  BoxStyled,
  DateInput,
  PopupTitle,
  TaskFrame,
} from './Task.Popup.Styled';

export default function TaskPopup({ children, task }) {
  const { deleteTag } = React.useContext(TasksContext);
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState(task);
  const { editTask } = useContext(TasksContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBlur = (param, value) => {
    editTask({ ...task, [param]: value });
  };

  const handleAnotherDay = () => {
    const newDate = new Date(task.dueDate);
    newDate.setDate(newDate.getDate() + 1);
    editTask({ ...newTask, dueDate: newDate });
  };

  const progressValue = (param) => {
    if (task.dueDate) {
      const totalDays =
        task.dueDate.substring(8, 10) - task.createdAt.substring(8, 10);
      const thisDate = new Date();
      const startDate = new Date(task.createdAt);
      const endDate = new Date(task.dueDate);
      const pastTime = Math.abs(thisDate - startDate);
      const pastDays = Math.ceil(pastTime / (1000 * 60 * 60 * 24));
      const leftTime = Math.abs(endDate - thisDate);
      const leftDays = Math.ceil(leftTime / (1000 * 60 * 60 * 24));
      if (param === 'progress') return Math.round((pastDays * 100) / totalDays);
      if (param === 'daysLeft') return leftDays;
    } else return 0;
  };

  return (
    <div>
      <TaskFrame onDoubleClick={handleOpen}>{children}</TaskFrame>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={() => {
          handleClose();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <BoxStyled padding={{ xs: 2, sm: 3, md: 4 }}>
            <Stack
              justifyContent='center'
              spacing={{ xs: 2, sm: 2, md: 0 }}
              direction={{ xs: 'column', sm: 'column', md: 'row' }}
            >
              <Container padding={{ xs: 0, sm: 2, md: 0 }}>
                <Stack spacing={4} direction='column'>
                  <Stack spacing={4} direction='row' alignItems='center'>
                    <AddAssigneeBtn
                      avatarSize='big'
                      taskId={task._id}
                      assignee={task.assignee}
                    />
                    <PopupTitle>{task.title}</PopupTitle>
                  </Stack>
                  <Stack
                    direction='row'
                    spacing={1}
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Stack
                      spacing={1}
                      direction='row'
                      alignItems='center'
                      divider={<Divider orientation='vertical' flexItem />}
                    >
                      {task.tags.map((taskTag) => (
                        <ChipStyled
                          label={taskTag.title}
                          onDelete={() => deleteTag(task._id, taskTag)}
                          size='small'
                          background={taskTag.color}
                          key={taskTag}
                        />
                      ))}
                    </Stack>
                    <TagBtn task={task} size='large' />
                  </Stack>
                  <TextField
                    id='description'
                    label='Description'
                    multiline
                    rows={4}
                    defaultValue={task.description}
                    placeholder='Enter A Description'
                    onBlur={(event) =>
                      handleBlur(event.target.id, event.target.value)
                    }
                    fullWidth
                  />
                  <Stack direction='row' spacing={2}>
                    <label>Priority:</label>
                    <Rating
                      id='priority'
                      name='customized-color'
                      defaultValue={task.priority || 1}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? 's' : ''}`
                      }
                      icon={<TourIcon fontSize='inherit' />}
                      emptyIcon={<TourOutlinedIcon fontSize='inherit' />}
                      onBlur={(event) =>
                        editTask({ ...task, priority: event.target.value })
                      }
                    />
                  </Stack>
                  <Stack
                    justifyContent='space-between'
                    spacing={{ xs: 3, sm: 2, md: 2 }}
                    direction={{ xs: 'column', sm: 'row', md: 'row' }}
                  >
                    <Stack
                      direction='row'
                      spacing={{ xs: 2, sm: 1, md: 2 }}
                      alignItems='center'
                    >
                      <p>Start date:</p>
                      <DateInput
                        type='date'
                        readOnly='true'
                        id='startDate'
                        value={task.createdAt.substring(0, 10)}
                      />
                    </Stack>
                    <Stack
                      direction='row'
                      spacing={{ xs: 2, sm: 1, md: 2 }}
                      alignItems='center'
                    >
                      <p>Due date:</p>
                      <DateInput
                        type='date'
                        id='dueDate'
                        defaultValue={
                          task.dueDate ? task.dueDate.substring(0, 10) : null
                        }
                        readOnly={!!task.dueDate}
                        onBlur={(event) =>
                          handleBlur(event.target.id, event.target.value)
                        }
                      />
                    </Stack>
                  </Stack>
                  <TextField
                    id='attachments'
                    label='Attachments'
                    multiline
                    rows={4}
                    defaultValue={task.attachments}
                    placeholder='Paste An Attachments'
                    onBlur={(event) =>
                      handleBlur(event.target.id, event.target.value)
                    }
                    fullWidth
                  />
                </Stack>
              </Container>
              <Container>
                <Stack spacing={4} direction='column'>
                  <Stack spacing={4} direction='row' alignItems='center'>
                    <Box sx={{ width: '100%' }}>
                      <Stack
                        direction='row'
                        spacing={1}
                        justifyContent='space-between'
                        alignItems='center'
                      >
                        <div>
                          {task.createdAt.substring(0, 10).replaceAll('-', '/')}
                        </div>
                        <div>
                          {task.dueDate
                            ? task.dueDate.substring(0, 10).replaceAll('-', '/')
                            : 'Insert Due Date'}
                        </div>
                      </Stack>
                      <BorderLinearProgress
                        variant='determinate'
                        value={progressValue('progress')}
                      />
                      <div style={{ textAlign: 'center' }}>
                        {task.dueDate
                          ? progressValue('daysLeft') + ' Days Left'
                          : 'No Due Date'}
                      </div>
                    </Box>
                    <Button variant='contained' onClick={handleAnotherDay}>
                      {' '}
                      Another Day
                    </Button>
                  </Stack>
                  <TaskChat task={task} />
                </Stack>
              </Container>
            </Stack>
          </BoxStyled>
        </Fade>
      </Modal>
    </div>
  );
}
