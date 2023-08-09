import React from 'react';
import { StyledTableHead, StyledTopTableCell } from './SpecsTable.styled';
import TableRow from '@mui/material/TableRow';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CategoryIcon from '@mui/icons-material/Category';

function SpecsTableHead({ toggleDate, toggleStatus, fetchSpecList }) {
  const [groupedByStatus, setGroupedByStatus] = React.useState(false);
  const [dateByAsc, setDateByAsc] = React.useState(false);

  function toggleStatusGrouping() {
    groupedByStatus ? fetchSpecList() : toggleStatus();
    setGroupedByStatus((prev) => !prev);
  }
  function toggleDateSate() {
    toggleDate();
    setDateByAsc((prev) => !prev);
  }
  return (
    <StyledTableHead>
      <TableRow>
        <StyledTopTableCell align='center' style={{ width: '115px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='selectable' onClick={toggleDateSate}>
              Date
            </span>
            {dateByAsc ? (
              <ArrowDownwardIcon fontSize='14' />
            ) : (
              <ArrowUpwardIcon fontSize='14px' />
            )}
          </div>
        </StyledTopTableCell>
        <StyledTopTableCell>Spec Information</StyledTopTableCell>
        <StyledTopTableCell
          align='center'
          style={{ width: '175px' }}
          className='selectable'
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className={`selectable`} onClick={toggleStatusGrouping}>
              Status
            </span>
            {groupedByStatus && <CategoryIcon fontSize='14' />}
          </div>
        </StyledTopTableCell>
        <StyledTopTableCell align='center' style={{ width: '150px' }}>
          Participants
        </StyledTopTableCell>
        <StyledTopTableCell align='center' style={{ width: '85px' }}>
          Delete
        </StyledTopTableCell>
      </TableRow>
    </StyledTableHead>
  );
}

export default SpecsTableHead;
