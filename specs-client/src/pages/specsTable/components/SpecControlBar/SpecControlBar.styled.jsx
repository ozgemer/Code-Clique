import { styled } from '@mui/material/styles';

const SpecBarContainer = styled('div')`
  border-radius: 10px;
  background-color: #121231;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 0.1rem solid #1f1f53;
  &:hover {
    box-shadow: 0 0 20px -5px #1f1f53;
  }
`;

const SpecBarIconButton = styled('button')`
  color: white;
  border-radius: 10px;
  padding: 5px;
  margin: 0 0.5rem;
  background: #121231;
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.15s ease-out;
  &:hover {
    background: #23235d;
    transform: scale(1.1);
  }
  @media only screen and (max-width: 700px) {
    position: relative;
    margin: 0;
    right: 0.5rem;
  }
`;

const SpecBarButtonTitle = styled('span')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-weight: 700;
`;

export { SpecBarContainer, SpecBarIconButton, SpecBarButtonTitle };
