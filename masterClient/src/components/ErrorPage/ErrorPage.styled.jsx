import { styled } from '@mui/material/styles';
import colors from '../../util/theme/colors';

const StyledErrorPage = styled('div')`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  text-align: center;
  background-color: ${colors.blue};
`;

export { StyledErrorPage };
