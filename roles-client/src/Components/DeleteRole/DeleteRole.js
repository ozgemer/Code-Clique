import React, { useState, useContext } from 'react';
import { RolesContext } from '../../context/RolesContext';
import {
  StyledButton,
  StyledDialog,
  StyledDialogTitle,
  StyledDeleteRole,
} from './DeleteRole.styled';
import DialogActions from '@mui/material/DialogActions';

function DeleteRole({ teamrole }) {
  const [open, setOpen] = useState(false);
  const { updateRole } = useContext(RolesContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (roleDelete) => {
    setOpen(false);
    if (roleDelete) updateRole(teamrole, 'delete');
  };

  return (
    <StyledDeleteRole>
      <StyledButton
        buttonvariant='delete'
        variant='outlined'
        onClick={handleClickOpen}
      >
        Delete
      </StyledButton>
      <StyledDialog
        PaperProps={{
          style: {
            backgroundColor: '#121231',
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <StyledDialogTitle id='responsive-dialog-title'>
          <span>Would you like to delete "</span>
          <span style={{ color: teamrole.color }}>{teamrole.name}</span>
          <span>"?</span>
        </StyledDialogTitle>
        <DialogActions>
          <StyledButton
            buttonvariant='cancel'
            autoFocus
            onClick={() => handleClose(false)}
          >
            Cancel
          </StyledButton>
          <StyledButton
            buttonvariant='delete'
            onClick={() => handleClose(true)}
            autoFocus
          >
            Delete
          </StyledButton>
        </DialogActions>
      </StyledDialog>
    </StyledDeleteRole>
  );
}

export default DeleteRole;
