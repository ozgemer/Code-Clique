import { useState, useContext } from 'react';
import { UsersContext } from '../../context/UsersContext';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { StyledDialog, StyledDialogTitle } from './Styled.Action';
import { Button } from '@mui/material';

function Action({ user, children }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { updateUser } = useContext(UsersContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (kick) => {
    setOpen(false);
    if (kick) updateUser(user, 'delete');
  };

  return (
    <>
      <Button
        disabled
        color='error'
        variant='outlined'
        onClick={handleClickOpen}
      >
        {children}
      </Button>
      <StyledDialog
        PaperProps={{
          style: {
            backgroundColor: '#121231',
          },
        }}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <StyledDialogTitle id='responsive-dialog-title'>
          {`Would you like to kick ${user.name}?`}
        </StyledDialogTitle>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button color='error' onClick={() => handleClose(true)}>
            Kick
          </Button>
        </DialogActions>
      </StyledDialog>
    </>
  );
}

export default Action;
