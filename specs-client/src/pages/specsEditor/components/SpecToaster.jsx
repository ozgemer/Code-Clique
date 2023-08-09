import React, { useState } from 'react';
import { Snackbar } from '@mui/material';
import { SpecAlert } from '../SpecEditor.styled';

function SpecToaster({ message, severity = 'info', resetToasterState }) {
  const [open, setOpen] = useState(true);
  const closeToaster = () => {
    setOpen(false);
    resetToasterState();
  };

  return (
    <Snackbar
      open={open}
      onClose={closeToaster}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <SpecAlert
        severity={severity}
        onClick={closeToaster}
        onClose={closeToaster}
      >
        {message}
      </SpecAlert>
    </Snackbar>
  );
}

export default SpecToaster;
