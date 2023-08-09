import { styled, Menu, MenuItem } from '@mui/material';

const StyledDropdown = styled(Menu)`
  .MuiMenu-paper {
    min-width: 8rem;
    background: #121231;
    color: white;
  }
  width: 135px;
`;

const StyledMenuItem = styled(MenuItem)`
  .MuiMenu-list {
    background: #121231;
  }
  &:hover {
    background: #1a1a3f;
  }
`;

export { StyledDropdown, StyledMenuItem };
