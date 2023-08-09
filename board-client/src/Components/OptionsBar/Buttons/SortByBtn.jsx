import { useContext, useState } from 'react';
import BoardContext from '../../../context/BoardContext';
import icons from '../../../themes/Icons';
import {
  MenuItemStyled,
  SorterButton,
  StyledMenu,
} from '../Styles/FuncBtnStyled';

const options = [
  { title: 'title', order: 0, icon: icons.title },
  { title: 'date', order: 0, icon: icons.calendar },
  { title: 'assignee', order: 0, icon: icons.account },
];

function SortByBtn() {
  const { board, setBoard } = useContext(BoardContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [defaultBoard, setDefaultBoard] = useState();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortBoard = (e) => {
    const temp = [...board];
    const param = e.target.textContent;
    const currentSort = options.find((a) => a.title === param).order;

    const descendingString = (arr, param) => {
      return arr.sort((a, b) => (a[param] < b[param] ? 1 : -1));
    };
    const ascendingString = (arr, param) => {
      return arr.sort((a, b) => (a[param] > b[param] ? 1 : -1));
    };

    switch (currentSort) {
      case 0:
        temp.forEach(
          (column) => (column.tasks = ascendingString(column.tasks, param))
        );
        options.find((a) => a.title === param).order = 1;
        break;
      case 1:
        temp.forEach(
          (column) => (column.tasks = descendingString(column.tasks, param))
        );
        options.find((a) => a.title === param).order = -1;
        break;
      default:
        setBoard(defaultBoard);
        options.find((a) => a.title === param).order = 0;
    }
    setBoard(temp);
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
        Sort by
      </SorterButton>
      <StyledMenu
        id='demo-customized-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((opt, index) => (
          <MenuItemStyled key={index} disableRipple onClick={sortBoard}>
            <div>
              {opt.icon}
              {opt.title}
            </div>
            {opt.order === 1
              ? icons.arrowDown
              : opt.order === -1
              ? icons.arrowUp
              : null}
          </MenuItemStyled>
        ))}
      </StyledMenu>
    </div>
  );
}

export default SortByBtn;
