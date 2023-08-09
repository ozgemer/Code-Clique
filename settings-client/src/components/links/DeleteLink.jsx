import { Button, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { getLinks, deleteLink } from '../../services/linksApi.service';
import { SettingsButton } from '../Buttons/button.syled';
function DeleteLink({ openToaster }) {
  const [selected, setselected] = useState({});
  const handleChange = (e) => {
    setselected(e.target.value);
  };
  const handleDelete = () => {
    console.log(selected);
    deleteLink({ id: selected._id })
      .then((data) => {
        openToaster('Link deleted successfully');
        setselected('');
        fetchLinks();
      })
      .catch((err) => {
        openToaster('Error deleting link');
      });
  };
  const fetchLinks = () => {
    getLinks()
      .then((data) => {
        console.log(data);
        setlink(data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [links, setlink] = useState([]);
  useEffect(() => {
    fetchLinks();
  }, []);
  return (
    <Box
      component='form'
      display='flex'
      justifyContent='space-between'
      alignItems='flex-end'
      gap={5}
    >
      <Select
        autoWidth
        variant='standard'
        fullWidth
        onChange={handleChange}
        value={selected}
      >
        {links.map((link) => (
          <MenuItem key={link.link} value={link}>
            {link.link}
          </MenuItem>
        ))}
      </Select>
      <SettingsButton variant='contained' onClick={handleDelete}>
        Delete
      </SettingsButton>
    </Box>
  );
}

export default DeleteLink;
