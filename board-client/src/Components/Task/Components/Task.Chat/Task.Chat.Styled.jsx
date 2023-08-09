import { Container, Input, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Stack)`
  border-radius: 0.8rem;
  border: 2px solid #1f1f53;
  background: linear-gradient(180deg, #0a0a1b 73.44%, #0a0a1b3e 100%);
`;

const CommentContainer = styled(Container)`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: #121231;
`;

const CommentInput = styled(TextField)``;

export { ChatContainer, CommentInput, CommentContainer };
