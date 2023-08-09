import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';
import { SettingsButton } from '../Buttons/button.syled';

function DeleteDialog({ open, setOpen, onDelete }) {
  return (
    <Dialog open={open}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this milestone?
      </DialogContent>
      <DialogActions>
        <SettingsButton onClick={onDelete} color='error' variant='contained'>
          Delete
        </SettingsButton>
        <SettingsButton onClick={() => setOpen(false)} variant='contained'>
          Cancel
        </SettingsButton>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
