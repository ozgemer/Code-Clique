import { styled } from "@mui/material/styles";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { outlinedInputClasses } from "@material-ui/core/OutlinedInput";
import { Checkbox, ListItemText } from "@mui/material";

const StyledRoles = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const StyledFormControl = styled(FormControl)`
`;
const StyledInputLabel = styled(InputLabel)`
`;
const StyledSelect = styled(Select)`
  .MuiOutlinedInput-input {
    padding: 0;
  }
  & :hover {
    cursor: pointer;
  }
  & .${outlinedInputClasses.notchedOutline} {
    border: none;
  }
  &:hover .${outlinedInputClasses.notchedOutline} {
    border: none;
  }
  &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} {
    border: none;  
  }
`;
const StyledBox = styled(Box)`
  border: none;
`;
const StyledOutlinedInput = styled(OutlinedInput)`
  &.${outlinedInputClasses} 
`;
const StyledMenuItem = styled(MenuItem)`
`;
const StyledListItemText = styled(ListItemText)`
  color: ${({ rolecolor }) => rolecolor}; 
`;
const StyledCheckbox = styled(Checkbox)`
  color: #F6C927;
`;
export { StyledRoles, StyledFormControl, StyledInputLabel, StyledSelect, StyledBox, StyledOutlinedInput, StyledMenuItem, StyledListItemText, StyledCheckbox };
