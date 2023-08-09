import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import colors from '../../util/theme/colors';

const StyledDropdownMenu = styled(Menu)`
  margin-top: 0.3rem;
  z-index: 9999;

  ul {
    padding: 0;
    width: 10rem;
    background-color: ${colors.blue};
  }
`;
const StyleDropdownMenuItem = styled(MenuItem)`
  background-color: ${colors.darkestBlue};
  gap: 1rem;
  color: ${colors.white};
  margin-bottom: 0.1rem;
  transition: 0.2s;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export { StyledDropdownMenu, StyleDropdownMenuItem };
