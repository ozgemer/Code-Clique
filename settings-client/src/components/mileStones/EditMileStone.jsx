import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useEffect, useState } from 'react';
import { SettingsButton } from '../Buttons/button.syled';
import { updateMilestoneMockData } from '../../services/milstonesApi.service';

function EditMileStone({ open, mileStone, handleEdit, onClose }) {
  const [date, setdate] = useState(new Date(mileStone.date));
  const [title, settitle] = useState(mileStone.title);
  const handleDateChange = (pickedDate) => {
    setdate(pickedDate._d);
  };
  const onTitleChange = (e) => {
    settitle(e.target.value);
  };
  const handleSubmit = () => {
    handleEdit({
      _id: mileStone._id,
      title: title,
      date: date,
    });
  };
  useEffect(() => {
    setdate(new Date(mileStone.date));
    settitle(mileStone.title);
  }, [mileStone]);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <Box component='form' display='flex' gap={5}>
          <TextField
            label='Title'
            value={title}
            variant='standard'
            onChange={onTitleChange}
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label='Due Date'
              inputFormat='YYYY/MM/DD'
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} variant='standard' />
              )}
            />
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <SettingsButton
          variant='contained'
          type='submit'
          onClick={handleSubmit}
        >
          Save
        </SettingsButton>
      </DialogActions>
    </Dialog>
  );
}

export default EditMileStone;
