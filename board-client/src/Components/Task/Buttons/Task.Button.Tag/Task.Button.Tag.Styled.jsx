import { IconButton, Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../../../../themes/Colors';

const PopoverStyled = styled(Popover)`
  .MuiPopover-paper {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
  }
`;

const TagsBtnStyled = styled(IconButton)`
  color: ${colors.white};
`;

export { PopoverStyled, TagsBtnStyled };
