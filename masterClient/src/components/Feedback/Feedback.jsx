import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axiosinstance from '../../api/axios';

function Feedback({ open, setOpen }) {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (message.length < 10) {
      seterror(true);
      return;
    }
    axiosinstance
      .post('/feedback', { email, message })
      .then((res) => {
        setsuccess(true);
        setTimeout(() => {
          setOpen(false);
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: '0.8rem',
          border: '2px solid #1f1f53',
          background: 'linear-gradient(180deg, #0a0a1b 90%, #0a0a1bd9 100%)',
        },
      }}
      onClose={() => setOpen(false)}
    >
      <DialogTitle color='primary'>Feedback</DialogTitle>
      <Box component='form'>
        <DialogContent>
          <Typography>
            {!success
              ? 'We would love to hear from you. Please let us know how we can improve any feedback is appreciated'
              : 'Thank you for your feedback!'}
          </Typography>

          <TextField
            id='email'
            label='Email'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography color='error'>
            {error && 'Please enter a message longer than 10 characters'}
          </Typography>
          <TextField
            id='message'
            label='Message'
            variant='outlined'
            margin='normal'
            fullWidth
            required
            multiline
            rows={4}
            onChange={(e) => {
              setMessage(e.target.value);
              seterror(false);
            }}
            error={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={onSubmit} type='submit'>
            Send
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default Feedback;
