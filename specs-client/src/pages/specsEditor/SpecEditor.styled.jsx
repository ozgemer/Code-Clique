import { styled } from '@mui/material/styles';
import { Alert } from '@mui/material';

const SpecPageContainer = styled('div')`
  width: 100%;
`;

const SpecDocContainer = styled('div')`
  border-radius: 1rem;
  border: 1rem solid #121231;
  position: sticky;
  clear: both;
`;

const SpecDocHeader = styled('div')`
  border-radius: 1rem;
  background-color: #121231;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  float: right;
`;

const SpecControlButton = styled('button')`
  color: white;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #23235d;
  background: #121231;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s ease-out;
  &:hover {
    background: #23235d;
    transform: scale(1.1);
  }
  &.apply:hover {
    background: #008000aa;
  }
  &.discard:hover {
    background: #ff0000aa;
  }
`;

const SpecAlert = styled(Alert)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  SpecDocHeader,
  SpecControlButton,
  SpecDocContainer,
  SpecAlert,
  SpecPageContainer,
};
