import React from 'react';
import {
  SpecBarContainer,
  SpecBarIconButton,
  SpecBarButtonTitle,
} from './SpecControlBar.styled';
import AddOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SpecSearch from './SpecSearch';

function SpecControlBar({ createSpec, resetSearch, setSearchResults }) {
  return (
    <SpecBarContainer>
      <SpecSearch
        resetSearch={resetSearch}
        setSearchResults={setSearchResults}
      />
      <SpecBarIconButton onClick={createSpec} title='create spec'>
        <AddOutlinedIcon />
      </SpecBarIconButton>
    </SpecBarContainer>
  );
}

export default SpecControlBar;
