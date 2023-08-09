import React, { useState } from 'react';
import UserAvatar from '../Avatar/Avatar';
import UserCard from '../UserCard/UserCard';
import { StyledPopover, StyledBadge } from './Styled.Member';
export default function Member({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledBadge
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }} 
        badgeContent=" "> 
        <UserAvatar avatar={user} func={handleClick} />
      </StyledBadge>
      <StyledPopover
        open={anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
        }}
      >
          <UserCard user={user} />
      </StyledPopover>
    </>
  );
}
