import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { updateStatus } from '../../../../utils/services/specs';
import { Dropdown, MenuItem } from "../../../../Components/Dropdown/Dropdown";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function SpecsStatusDropdown({ spec, options }) {
  const [status, setStatus] = useState(spec.status);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    setIsOpen(false);
    if (option?.currentTarget) return;
    setStatus(option);
    updateStatus(spec._id, option);
  };

  return (
    <>
      <Button
        sx={{ color: '#fff' }}
        onClick={handleClick}
        endIcon={isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        data-type='spec-dropdown-item'
      >
        {status}
      </Button>
      <Dropdown anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        {options?.map((option) => {
          if (status !== option) {
            return (
              <MenuItem
                sx={{ fontSize: '0.8rem' }}
                key={uuidv4()}
                onClick={() => handleClose(option)}
              >
                {option.toUpperCase()}
              </MenuItem>
            );
          }
          return null;
        })}
      </Dropdown>
    </>
  );
}

export default SpecsStatusDropdown;
