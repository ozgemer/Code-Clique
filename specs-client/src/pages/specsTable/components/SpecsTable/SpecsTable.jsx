import React from 'react';
import SpecsTableContainer from './SpecsTableContainer';
import SpecsTableHead from './SpecsTableHead';
import SpecsTableBody from './SpecsTableBody';
import { StyledTablePagination } from './SpecsTable.styled';
import { TableRow, TableFooter } from '@mui/material';

function SpecsTable({
  specList,
  select,
  onDelete,
  toggleDate,
  toggleStatus,
  fetchSpecList,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <SpecsTableContainer>
      <SpecsTableHead
        toggleDate={toggleDate}
        toggleStatus={toggleStatus}
        fetchSpecList={fetchSpecList}
      />
      <SpecsTableBody
        list={specList.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )}
        select={select}
        onDelete={onDelete}
        page={page}
        amount={rowsPerPage}
      />
      <TableFooter>
        <TableRow>
          <StyledTablePagination
            count={specList.length}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page}
            onPageChange={handleChangePage}
          />
        </TableRow>
      </TableFooter>
    </SpecsTableContainer>
  );
}

export default SpecsTable;
