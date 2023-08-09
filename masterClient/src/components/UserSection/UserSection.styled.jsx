import { styled } from '@mui/material/styles';
import colors from '../../util/theme/colors';

const StyledUsersection = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 21.5rem;
  height: 4.5rem;
  background-color: ${colors.darkBlue};
  border: 0.1rem solid ${colors.border};
  border-radius: 0.3rem;
  padding: 0 1.5rem;

  &:hover {
    box-shadow: 0 0 20px -5px #1f1f53;
  }

  @media (max-width: 900px) {
    padding: 0 1rem;
    width: 16rem;
  }

  @media (max-width: 500px) {
    width: 6rem;
    padding: 0 0.5rem;
    background: none;
    border: none;
    
    &:hover {
    box-shadow: none;
  }
  }
`;

const StyledUserDetails = styled('div')`
  display: grid;
  align-items: center;

  h2 {
    grid-row: 1;
    font-size: 1.1rem;
    font-weight: 600;
  }

  h3 {
    grid-row: 2;
    font-size: 0.9rem;
    font-weight: 400;
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 1rem;
    }

    h3 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    h2,
    h3 {
      display: none;
    }
  }
`;

const StyledUserImage = styled('img')`
  grid-row: 1 / 3;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 50%;

  @media (max-width: 900px) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 500px) {
    width: 2rem;
    height: 2rem;
    margin-right: 0;
  }

  @media (max-width: 320px) {
    display: none;
  }
`;

export { StyledUsersection, StyledUserDetails, StyledUserImage };
