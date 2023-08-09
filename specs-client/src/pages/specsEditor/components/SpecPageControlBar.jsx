import React, { useState } from 'react';
import { SpecDocHeader, SpecControlButton } from '../SpecEditor.styled';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditOffOutlinedIcon from '@mui/icons-material/EditOffOutlined';

function SpecPageControlBar({ unselect, changeEditMode, setSave }) {
  const [editMode, setEditMode] = useState(false);
  const setReadOnly = (state) => {
    setEditMode(!state);
    changeEditMode(state);
  };

  return (
    <>
      <SpecDocHeader>
        {editMode ? (
          <>
            <SpecControlButton
              className='apply'
              title='Save'
              onClick={() => {
                setReadOnly(true);
                setSave(true);
              }}
            >
              <SaveOutlinedIcon />
            </SpecControlButton>
            <SpecControlButton
              className='discard'
              title='Cancel'
              onClick={() => {
                setSave(false);
                setReadOnly(true);
              }}
            >
              <EditOffOutlinedIcon />
            </SpecControlButton>
          </>
        ) : (
          <SpecControlButton title='Edit' onClick={() => setReadOnly(false)}>
            <EditOutlinedIcon />
          </SpecControlButton>
        )}
        <SpecControlButton title='Back' onClick={() => unselect()}>
          <ExitToAppIcon />
        </SpecControlButton>
      </SpecDocHeader>
    </>
  );
}

export default SpecPageControlBar;
