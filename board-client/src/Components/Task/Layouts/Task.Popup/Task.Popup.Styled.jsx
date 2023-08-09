import { LinearProgress, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/system';

const TaskFrame = styled('span')`
  cursor: pointer;
`;

const DateInput = styled('input')`
  color: #f6c927;
  background: #121231;
  border: 1px #1f1f53 solid;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;

const BoxStyled = styled(Stack)`
  display: flex;
  overflow: overlay;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 0.8rem;
  border: 2px solid #1f1f53;
  background: linear-gradient(180deg, #0a0a1b 90%, #0a0a1bd9 100%);
  box-shadow: 0px 0px 35px -5px black;
`;

const PopupTitle = styled('h2')`
  color: #f6c927;
`;

const DesContainer = styled(Container)`
  background: #21213e;
  min-height: 6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.3rem;
`;

const BorderLinearProgress = styled(LinearProgress)`
  background: #040413;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #1f1f53;
`;

export {
  TaskFrame,
  BoxStyled,
  PopupTitle,
  DesContainer,
  BorderLinearProgress,
  DateInput,
};
