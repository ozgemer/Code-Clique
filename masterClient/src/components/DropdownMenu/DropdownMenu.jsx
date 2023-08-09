import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import {
  StyledDropdownMenu,
  StyleDropdownMenuItem,
} from './DropdownMenu.styled';
import SettingsDotsIcon from '../../assets/images/settings-dots-icon.svg';
import { useNavigate } from 'react-router-dom';
function DropdownMenu({ itemsArray = [], img }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    Array.isArray(itemsArray)
      ? setMenuItems([...itemsArray])
      : setMenuItems([]);
  }, [itemsArray]);

  const openMenu = (e) => {
    setAnchorEl(e.target);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <>
      <Button variant='header' onClick={openMenu}>
        <img src={img || SettingsDotsIcon} alt='...' />
      </Button>

      <StyledDropdownMenu onClose={closeMenu} open={isOpen} anchorEl={anchorEl}>
        {menuItems.map((item) => {
          return (
            <StyleDropdownMenuItem
              key={uuidv4()}
              onClick={() => {
                navigate(item.url);
                item.onClick();
                closeMenu();
              }}
            >
              {item.text}
            </StyleDropdownMenuItem>
          );
        })}
      </StyledDropdownMenu>
    </>
  );
}

export default DropdownMenu;
