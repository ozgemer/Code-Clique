import { styled } from '@mui/material/styles';
import colors from '../../../themes/Colors';

const SettingContainer = styled('div')`
  background: ${colors.blue};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
`;

export { SettingContainer };
