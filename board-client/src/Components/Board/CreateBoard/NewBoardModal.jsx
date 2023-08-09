import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ColumnsSettings from './ColumnsSettings';
import colors from '../../../themes/Colors';
import BoardContext from '../../../context/BoardContext';

const BoxStyled = styled(Box)`
  background: ${colors.darkestBlue};
  position: absolute;
  top: 25%;
  right: 25%;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

function ChildModal({ handleSumbit }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} variant='contained'>
        Create A Board
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <BoxStyled>
          <h2 id='child-modal-title'>Are You Sure?</h2>
          <Button variant='contained' onClick={handleClose}>
            No
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              handleSumbit();
              handleClose();
            }}
          >
            Yes
          </Button>
        </BoxStyled>
      </Modal>
    </>
  );
}

export default function NewBoardModal({ setfirst }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSumbit = () => {
    setfirst(true);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>
        Create A Board
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <BoxStyled>
          <ColumnsSettings />
          <ChildModal handleSumbit={handleSumbit} />
        </BoxStyled>
      </Modal>
    </div>
  );
}
