import React from "react";
import { StyledBox, StyledSearchBar } from "./SearchBar.Styled"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function SearchBar({ searchQuery, setSearchQuery }) {
  const handleInputChange = ({ target }) => setSearchQuery(target.value);
  const clearSearchQuery = () => {
    setSearchQuery("");
    document.getElementById('searchInput').value = '';
  }
  return (
    <Box
      sx={{
        margin: '10px',
      }}
    >
      <TextField
        id='searchInput'
        label='Search...'
        variant='outlined'
        onChange={handleInputChange}
        size='small'
        sx={{ width: '250px' }}
        InputProps={{
          startAdornment: searchQuery && (
            <InputAdornment position='start'>
              <IconButton
                title='clear'
                sx={{
                  width: '24px',
                  height: '24px',
                  marginLeft: '-7px',
                  marginTop: '2px',
                }}
                onClick={clearSearchQuery}
              >
                <ClearIcon sx={{ width: '18px' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Box>
  );
}

export default SearchBar;
