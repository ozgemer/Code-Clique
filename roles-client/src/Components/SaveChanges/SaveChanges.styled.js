import { styled, css } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SnackbarContent from '@mui/material/SnackbarContent';

const StyledSaveChanges = styled(SnackbarContent)`
  background-color: #121231;
`;
const StyledButton = styled(Button)`
  ${({ type }) => {
    if (type === "save") return css(`
      color: #2B7A0B;
    `)
    if (type === "discard") return css(`
      color: grey;
    `)
  }}
`;
const StyledMessage = styled(Typography)`
  color: white;
`;
export { StyledSaveChanges, StyledButton, StyledMessage };
