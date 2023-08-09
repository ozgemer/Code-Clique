import {
  StyledDropdown,
  StyledMenuItem as DropdownItem,
} from './Dropdown.styled';
import { RolesContext } from '../../context/RolesContext';
import { UsersContext } from '../../context/UsersContext';

function Dropdown({ children }) {
  return <StyledDropdown>{children}</StyledDropdown>;
}

export { Dropdown, DropdownItem };
