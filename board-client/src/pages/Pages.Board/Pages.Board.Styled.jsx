import { styled } from '@mui/material/styles';
import colors from '../../themes/Colors';

const SorterContainer = styled('div')`
  padding-bottom: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    gap: 1rem;
  }
`;
const BoardContainer = styled('div')``;

const BoardBar = styled('div')`
  width: 100%;
  height: 4rem;
  border-radius: 0.3rem;
  border: 0.1rem solid #1f1f53;
  background-color: ${colors.darkBlue};
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 1rem;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 0 20px -5px #1f1f53;
  }
`;

const Container = styled('div')`
  width: ${(props) => props.width - 309.469}px;
  max-width: 100rem;

  @media (max-width: 900px) {
    width: ${(props) => props.width - 139.469}px;
  }
  @media (max-width: 600px) {
    width: 20rem;
  }
`;

export { SorterContainer, BoardContainer, BoardBar, Container };
