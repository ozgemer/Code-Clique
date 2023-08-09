import { AppBar, Box } from '@mui/material';
import { css, styled } from '@mui/material/styles';

import colors from '../../util/theme/colors';

const StyledHeaderContainer = styled(AppBar)`
  position: sticky;
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  box-shadow: none;
  background: none;

  ${({ scrollposition }) => {
    if (scrollposition) {
      return css`
        backdrop-filter: blur(5px);
      `;
    }
  }}
`;

const StyledHeader = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  margin-top: 1rem;
  opacity: 1;
  transition: 0.2s;

  ${({ scrollposition, theme }) => {
    const { palette } = theme;

    if (scrollposition) {
      return css`
        padding: 0.5rem;
        background: #0a0a1bb5;
        box-shadow: 0 0.5rem 1rem ${palette.boxShadow.main};
        border: 0.1rem solid ${palette.border.main};
      `;
    }
  }}

  h1 {
    color: ${colors.yellow};
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export { StyledHeader, StyledHeaderContainer };
