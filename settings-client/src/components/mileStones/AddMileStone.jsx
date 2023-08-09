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

function AddMileStone({ open, handleAddNew, onClose, minDate, maxDate }) {
  const [date, setdate] = useState(minDate != null ? minDate : maxDate);
  const [title, settitle] = useState('');
  const handleDateChange = (pickedDate) => {
    setdate(pickedDate._d);
  };
  const onTitleChange = (e) => {
    settitle(e.target.value);
  };
  const handleSubmit = () => {
    handleAddNew({
      title: title,
      date: date,
    });
  };
  useEffect(() => {
    setdate(minDate != null ? minDate : maxDate);
  }, [minDate, maxDate]);

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
            required
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label='Due Date'
              inputFormat='YYYY/MM/DD'
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} variant='standard' required />
              )}
              minDate={minDate}
              maxDate={maxDate}
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
          Add
        </SettingsButton>
      </DialogActions>
    </Dialog>
  );
}

export default AddMileStone;
