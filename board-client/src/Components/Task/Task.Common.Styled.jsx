import { Avatar, Chip, Divider, Input, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../../themes/Colors';

const MenuStyled = styled(Menu)`
  .MuiPaper-root {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    border-radius: 0.3rem;
  }
`;

const ChipStyled = styled(Chip)`
  background-color: ${(props) => props.background};
  color: ${colors.white};
  text-transform: capitalize;
`;
const InputStyled = styled(Input)`
  .MuiInput-input {
    color: ${colors.yellow};
  }
`;
const DividerStyled = styled(Divider)`
  border-color: ${colors.blue};
`;
const OptionsTitle = styled('h2')`
  box-shadow: 0px 20px 70px rgba(86, 89, 146, 0.1);
  padding: 0.5rem 1rem;
  font-size: 20px;
  letter-spacing: -0.03em;
  z-index: 2;
`;
const Card = styled('div')`
  background: ${colors.blue};
  border-radius: 5px;
  color: ${colors.yellow};
  padding: 0.5rem;
  &:hover {
    box-shadow: 0px 0 0px 5px #121231;
  }
`;
const Container = styled('div')`
  display: flex;
  align-items: center;
`;
const IconsList = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TaskDetails = styled('div')`
  flex: 7;
`;
const AddAssigneeButton = styled(Avatar)`
  background-color: ${colors.darkBlue};
  cursor: pointer;
`;
const MenuItemStyled = styled(MenuItem)`
  display: flex;
  gap: 1rem;
  padding: 5px 10px;
`;
const TaskTitle = styled('p')`
  font-size: 14px;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: auto;
  max-height: 4rem;
  padding-right: 0.2rem;
`;

export {
  Container,
  TaskTitle,
  AddAssigneeButton,
  Card,
  IconsList,
  TaskDetails,
  MenuStyled,
  MenuItemStyled,
  OptionsTitle,
  DividerStyled,
  InputStyled,
  ChipStyled,
};
