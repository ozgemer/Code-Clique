import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import {
  Avatar,
  TableCell,
  TablePagination,
  TableHead,
  TableRow,
} from '@mui/material';

const StyledTableContainer = styled(TableContainer)`
  border: 0.1rem solid #1f1f53;
  &:hover {
    box-shadow: 0 0 20px -5px #1f1f53;
  }
`;

const StyledTableHead = styled(TableHead)`
  background-color: #121231;
  border: 0.5rem solid #121231;
`;

const StyledTablePagination = styled(TablePagination)`
  background-color: #121231;
  border: 0.5rem solid #121231;
  color: white;
  font-weight: bold;
`;

const StyledTopTableCell = styled(TableCell)`
  color: #f6c927;
  border: none;
  font-weight: 600;
  transition: 0.25s ease-in-out;
  & .selectable {
    margin: 0 10px;
  }
  & .selectable:hover {
    cursor: pointer;
    color: white;
  }
  & .selected {
    background: #f6c927;
    border-radius: 5px;
    color: white;
    padding: 5px 15px;
    box-shadow: 0 1rem 3rem rgba(238, 120, 108, 0.25);
  }
`;

const StyledTableCell = styled(TableCell)`
  color: white;
  border: none;
  & .selectable:hover {
    cursor: pointer;
    animation: move 0.4s ease;
  }
  @keyframes move {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const TableButton = styled('button')`
  display: flex;
  align-items: center;
  color: white;
  padding: 5px;
  border-radius: 10px;
  /* border: 2px solid #23235d; */
  background: #21213e;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    background: #ee2c2c;
    border: none;
    transform: scale(1.25);
  }
`;

const SpecDescription = styled('p')`
  max-width: 75ch;
  overflow-wrap: break-word;
  overflow: hidden;
  max-height: 40px;
`;

const SpecTableRow = styled(TableRow)`
  background-color: #21213e;
  border: 0.5rem solid #121231;
  height: 125px;
  overflow: hidden;
  border-radius: 5px;
`;

const SpecAvatar = styled(Avatar)`
  border: 2px solid #fff;
  color: #fff;
  margin-right: -10px;
  font-size: 16px;
`;

const AvatarContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const AvatarMore = styled('div')`
  margin-top: 8px;
  font-size: 10px;
`;

export {
  StyledTableContainer,
  StyledTableHead,
  StyledTableCell,
  StyledTopTableCell,
  SpecDescription,
  SpecTableRow,
  TableButton,
  SpecAvatar,
  AvatarContainer,
  StyledTablePagination,
  AvatarMore,
};
