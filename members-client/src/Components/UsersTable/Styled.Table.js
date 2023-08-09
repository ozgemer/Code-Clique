import { styled } from "@mui/material/styles";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import { TableCell, TableHead, TableRow } from "@mui/material";

const StyledTableContainer = styled(TableContainer)`
    background-color: #21213E;
`;
const StyledTable = styled(Table)`
`;
const StyledTableHead = styled(TableHead)`
    background-color: #121231;
`;
const StyledTableRow = styled(TableRow)`
    display: flex;
    justify-content: space-between;
    border: 0.5rem solid #121231; 
    border-top: none;
`;
const StyledTableCell = styled(TableCell)`
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    border: none;
    text-align: center;
    width: ${({ size }) => size ? size : "10"}rem;
    color: ${({ topcell }) => topcell ? "#F6C927" : "white"};
`;

export { StyledTableContainer, StyledTable, StyledTableHead, StyledTableRow, StyledTableCell };
