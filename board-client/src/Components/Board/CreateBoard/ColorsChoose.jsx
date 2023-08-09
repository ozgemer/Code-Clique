import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const ColorButton = styled(IconButton)`
  background: ${(props) => (props.circleColor ? props.circleColor : '#5f5a5a')};
  width: 25px;
  height: 25px;
`;

export default function ColorChoose({ circleColor, changeColor, index }) {
  const [colors, setColors] = React.useState([
    '#992727',
    '#118b11',
    '#a3ce40',
    '#bb28bb',
  ]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (color) => {
    changeColor(index, color);
    setAnchorEl(null);
  };

  return (
    <div>
      <ColorButton
        id='color-button'
        aria-controls={open ? 'color-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        circleColor={circleColor}
      />
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {colors.map((color, index) => (
          <ColorButton
            id='color-button'
            aria-controls={open ? 'color-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={() => handleClose(color)}
            circleColor={color}
          />
        ))}
      </Menu>
    </div>
  );
}
