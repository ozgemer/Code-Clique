import { styled } from '@mui/material/styles';
import colors from '../../../../themes/Colors';

const NewTaskCard = styled('div')`
  background: ${colors.blue};
  box-shadow: 0px 20px 70px rgba(86, 89, 146, 0.1);
  border-radius: 5px;
  color: ${colors.yellow};
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
`;

export { NewTaskCard };
