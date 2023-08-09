import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useContext, useEffect, useState } from 'react';
import { getAllData } from '../../utils/services/fetchBoardData';
import MembersBar from '../Components/MembersBar/MembersBar';
import MembersTableBody from '../Components/MembersTableBody/MembersTableBody';
import { StyledTablePagination } from '../Components/TablePagination/TablePagination.styled.js';
import { UsersContext } from '../context/UsersContext';

function MembersTablePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const headlines = ['User', 'Email', 'Tasks', 'Roles', 'Actions'];
  const { users, columns, tasks } = useContext(UsersContext);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    console.log(`Page: ${page}\nRows: ${rowsPerPage}`);
  }, [page, rowsPerPage]);
  return (
    <>
      <MembersBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Box border={'0.5rem solid #121231'} borderRadius={3}>
        <Table
          sx={{ minWidth: 650, borderCollapse: 'unset' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {headlines.map((headline, index) => {
                const align =
                  headline === 'Tasks' ||
                    headline === 'Roles' ||
                    headline === 'Actions'
                    ? 'center'
                    : 'left';
                return (
                  <TableCell
                    key={index}
                    align={align}
                    style={{ backgroundColor: '#121231', borderBottom: 'none' }}
                  >
                    {headline}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {tasks && columns && users && (
            <MembersTableBody
              users={users}
              searchQuery={searchQuery}
              rowsPerPage={rowsPerPage}
              page={page}
              amount={rowsPerPage}
              columns={columns}
              tasks={tasks}
            />
          )}
          <TableFooter>
            <TableRow>
              <StyledTablePagination
                count={users.length}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 100]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                page={page}
                onPageChange={handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    </>
  );
}

export default MembersTablePage;
