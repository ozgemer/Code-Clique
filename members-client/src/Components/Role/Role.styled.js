import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

const StyledRole = styled(Chip)`
  background-color: ${({ rolecolor }) => rolecolor};
  border: none;
  padding: 0;
  width: 7.5rem;
  border-radius: 0.5rem;
`;

export { StyledRole };