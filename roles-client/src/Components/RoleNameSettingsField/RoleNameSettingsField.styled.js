import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const StyledRoleNameSettingsField = styled(TextField)`
  & .MuiFilledInput-root {
    background: none;
  }
  & .MuiFilledInput-root:active {
    background: none;
  }
  & .MuiFilledInput-root:focus {
    background: none;
  }
  & .MuiFilledInput-root:focus-within {
    background: none;
  }
  & .MuiFilledInput-root:target {
    background: none;
  }
  & .MuiFilledInput-root:hover {
    background: none;
  }
  & .MuiFilledInput-root:visited {
    background: none;
  }
  & .MuiFilledInput-root:focus-visible {
    background: none;
  }
  & * input {
    color: ${({ color }) => color};
    background-color: #121231;
    border-radius: 0.5rem;
  }
`;

export { StyledRoleNameSettingsField };