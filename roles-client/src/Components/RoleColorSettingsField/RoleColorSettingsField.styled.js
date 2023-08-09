import { styled } from "@mui/material/styles";

const StyledPicker = styled("div")`
  position: relative;
`;
const StyledSwatch = styled("div")`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border: 0.125rem solid #121231;
  cursor: pointer;
`;
const StyledPopover = styled("div")`
  position: absolute;
  top: calc(100% + 0.125rem);
  left: 0;
  border-radius: 0.5rem;
`;

export { StyledPicker, StyledSwatch, StyledPopover };
