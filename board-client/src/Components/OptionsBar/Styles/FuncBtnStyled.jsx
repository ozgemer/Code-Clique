import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Colors from '../../../themes/Colors';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '.MuiButton-root:hover': {
    backgroundcolor: '#fff',
  },
  '& .MuiPaper-root': {
    backgroundColor: `${Colors.darkBlue}`,
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 200,
    color: `${Colors.white}`,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '5px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: `${Colors.white}`,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundcolor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MenuItemStyled = styled(MenuItem)`
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
`;

const SorterButton = styled(Button)`
  background: ${Colors.darkBlue};
  color: ${Colors.white};
`;

export { StyledMenu, MenuItemStyled, SorterButton };
