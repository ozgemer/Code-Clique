import { styled } from '@mui/material/styles';
import colors from '../../../../themes/Colors';

const Section = styled('div')`
  background-color: ${colors.darkBlue};
  border-radius: 0.8rem;
  border: 0.1rem solid #1f1f53;
  padding: 0.5rem;
  width: 20rem;
  height: 65vh;
  margin-bottom: 0.5rem;
  &:hover {
    box-shadow: 0 0 20px -5px #1f1f53;
  }
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled('div')`
  position: sticky;
  top: 0;
  z-index: 2;
  background: #21213e;
  box-shadow: 0 0 2rem #121231;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  letter-spacing: -0.03em;
  text-transform: capitalize;
  justify-content: space-between;
  align-items: center;
  outline: ${colors.darkBlue} solid 0.75rem;
`;

const Content = styled('div')`
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

const Counter = styled('div')`
  background-color: #131331;
  border: 0.1rem solid #1f1f53;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
`;

const ColorCircle = styled('div')`
  background-color: #525353;
  background-color: ${(props) => props.backgroundcolor};
  box-shadow: 0 0 10px -1px ${(props) => props.backgroundcolor};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
`;

export { Section, Title, Content, Counter, ColorCircle };
