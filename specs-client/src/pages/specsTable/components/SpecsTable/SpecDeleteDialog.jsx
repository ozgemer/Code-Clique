import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function SpecDeleteDialog({ onDelete, setDialogState, _id }) {
  const handleClose = () => setDialogState(false);

  const handleDelete = () => onDelete(_id);

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Delete Spec'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure you want to delete this spec?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={handleClose} autoFocus>
          Cancel
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={() => {
            handleDelete();
            handleClose();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SpecDeleteDialog;
