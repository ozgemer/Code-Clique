import { Button } from '@mui/material';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import TasksContext from '../../../../context/TasksContext';
import { patchTask } from '../../../../utils/services/fetchBoardData';

export default function Save() {
  const { tasks } = useContext(TasksContext);

  const handleSave = () => {
    tasks.forEach((task) => {
      // eslint-disable-next-line no-console
      console.log(task);
      // eslint-disable-next-line no-underscore-dangle
      patchTask(task._id, task);
    });
    toast('Board Saved Successfully !', {
      position: 'bottom-right',
    });
  };

  return (
    <div>
      <Button variant='contained' onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
