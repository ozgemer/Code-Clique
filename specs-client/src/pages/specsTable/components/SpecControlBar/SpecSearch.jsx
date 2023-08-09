import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import ClearIcon from '@mui/icons-material/Clear';
import { getSpecsBySearch } from '../../../../utils/services/specs';

function SpecSearch({ resetSearch, setSearchResults }) {
  const [searchInput, setSearchInput] = React.useState(null);
  const [isResults, setIsResults] = React.useState(false);

  const handleInputChange = (event) =>
    setSearchInput(event.currentTarget.value);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchInput) return;
    const result = await getSpecsBySearch(searchInput);
    if (!result.length > 0) return;
    setIsResults(true);
    setSearchResults(result);
    clearSearchInput();
  };

  const clearSearchInput = () => {
    setSearchInput('');
    document.getElementById('searchInput').value = '';
  };

  const resetSearchHandler = () => {
    resetSearch();
    clearSearchInput();
    setIsResults(false);
  };

  return (
    <Box
      component='form'
      onSubmit={handleSearch}
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
        sx={{ width: '210px' }}
        InputProps={{
          startAdornment: searchInput && (
            <InputAdornment position='start'>
              <IconButton
                title='clear'
                sx={{
                  width: '24px',
                  height: '24px',
                  marginLeft: '-7px',
                  marginTop: '2px',
                }}
                onClick={clearSearchInput}
              >
                <ClearIcon sx={{ width: '18px' }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                type='submit'
                title='search'
                sx={{ marginRight: '-8px', padding: '5px' }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
      {isResults && (
        <IconButton
          title='clear results'
          onClick={resetSearchHandler}
          sx={{
            padding: '5px',
            margin: '3px',
          }}
        >
          <SearchOffIcon sx={{ color: '#B00610', marginLeft: '3px' }} />
        </IconButton>
      )}
    </Box>
  );
}

export default SpecSearch;
