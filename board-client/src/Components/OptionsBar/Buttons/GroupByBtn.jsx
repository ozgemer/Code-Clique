import { useContext, useId, useState } from 'react';
import BoardContext from '../../../context/BoardContext';
import icons from '../../../themes/Icons';
import {
  MenuItemStyled,
  SorterButton,
  StyledMenu,
} from '../Styles/FuncBtnStyled';

const options = [
  { title: 'status', icon: icons.status },
  { title: 'assignee', icon: icons.account },
];

function GroupByBtn() {
  const { setBoard, tasks, groupBy } = useContext(BoardContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGroup = (e) => {
    setBoard(groupBy(tasks, e.target.textContent));
  };

  return (
    <div>
      <SorterButton
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        onClick={handleClick}
        endIcon={icons.arrowDown}
      >
        Group by
      </SorterButton>
      <StyledMenu
        id='demo-customized-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((opt) => (
          // eslint-disable-next-line react-hooks/rules-of-hooks
          <MenuItemStyled key={useId()} disableRipple onClick={handleGroup}>
            <div>
              {opt.icon}
              {opt.title}
            </div>
          </MenuItemStyled>
        ))}
      </StyledMenu>
    </div>
  );
}

export default GroupByBtn;
