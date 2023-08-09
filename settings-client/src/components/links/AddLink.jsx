import { useState } from 'react';

import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { SettingsButton } from '../Buttons/button.syled';

function AddLink({ onAddLink, openToaster }) {
  const [type, settype] = useState('');
  const [link, setlink] = useState('');
  const [title, settitle] = useState('');
  const [error, seterror] = useState('');
  const types = ['GitHub', 'Figma', 'Linkdin', 'Custom'];
  const handleTypeChange = (e) => {
    settype(e.target.value);
    settitle('');
  };
  const handleLinkChange = (e) => {
    setlink(e.target.value);
  };
  const handleTitleChange = (e) => {
    settitle(e.target.value);
  };
  const handleSubmit = () => {
    //validate inputs
    if (type === '' || link === '' || (type === 'Custom' && title === '')) {
      seterror('Please fill all the fields');
      return;
    }
    onAddLink(type, link, title);
    setlink('');
    seterror('');
    settype('');
    settitle('');
    openToaster('Link added successfully');
  };
  return (
    <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
      <Box component={'form'}>
        {error && (
          <Alert severity='error' variant='outlined'>
            {error}
          </Alert>
        )}
        <InputLabel id='type-label'>Type</InputLabel>
        <Select
          labelId='type-label'
          value={type}
          autoWidth
          onChange={handleTypeChange}
          variant='standard'
          sx={{
            minWidth: 200,
          }}
          color='primary'
        >
          {types.map((t) => {
            return (
              <MenuItem value={t} key={t}>
                {t}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <Box>
        <InputLabel id='link-label'>Link url</InputLabel>
        <TextField
          variant='standard'
          labelId='link-label'
          value={link}
          onChange={handleLinkChange}
        />
      </Box>
      {type === 'Custom' && (
        <TextField
          variant='standard'
          label='Title'
          InputLabelProps={{
            style: {
              color: 'white',
            },
          }}
          onChange={handleTitleChange}
        />
      )}
      <SettingsButton variant='contained' onClick={handleSubmit}>
        Add
      </SettingsButton>
    </Box>
  );
}

export default AddLink;
