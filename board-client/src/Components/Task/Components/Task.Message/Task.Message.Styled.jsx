import { Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../../../../themes/Colors';

const MessageContainer = styled(Paper)`
  background: ${colors.blue};
  padding-top: 0.5rem;
  padding: 0.5rem 1rem;
  display: table;
  max-width: 90%;
`;
const UserTitle = styled('h4')`
  color: ${colors.yellow};
`;
const MessageText = styled('p')`
  font-size: 0.9rem;
`;
const MessageDate = styled('p')`
  color: #6b6b6b;
  font-size: 0.7rem;
  text-align: end;
`;

export { MessageContainer, UserTitle, MessageText, MessageDate };
