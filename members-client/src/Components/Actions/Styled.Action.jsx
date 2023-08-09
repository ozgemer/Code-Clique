import { styled, css } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const StyledButton = styled(Button)`
  ${({ buttonvariant }) => {
    if (buttonvariant === "kick") return css(`
      border-color: #cc3300;
      color: #cc3300;
      &:hover {
        background-color: #cc3300;
        color: white;
        border-color: #cc3300; 
      }      
    `);
    if (buttonvariant === "cancel") return css(`
      color: grey;
    `);
  }} 
`;

const StyledDialog = styled(Dialog)`
`;
const StyledDialogTitle = styled(DialogTitle)`
  color: #F6C927;
`;
export { StyledButton, StyledDialog, StyledDialogTitle };
