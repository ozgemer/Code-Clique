import { styled, css } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledRole = styled("div")`
  border-radius: 0.5rem; 
  padding: 0.5rem; 
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    background-color: #121231;
  }
  ${({ selected }) => selected && css(`
    background-color: #121231;
  `)}
`;
const StyledRoleColor = styled("div")`
  width: 0.75rem; 
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${(({ color }) => color)};
`;
const StyledRoleName = styled(Typography)`
  color: #F6C927;
`;

export { StyledRole, StyledRoleColor, StyledRoleName };
