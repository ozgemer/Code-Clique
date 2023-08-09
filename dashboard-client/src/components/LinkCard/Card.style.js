import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import ThemeColors from '../../utils/Theme/ThemeColors';

export const CardWrapper = styled(Card)`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 150px;
  @media (max-width: 768px) {
    width: 112.5px;
    height: 90px;
  }
`;

export const CardHeader = styled('div')`
  padding: 5px;
`;

export const CardBody = styled('div')`
  font-size: 20px;
`;
