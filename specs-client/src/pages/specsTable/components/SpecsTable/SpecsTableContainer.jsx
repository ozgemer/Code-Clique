import React from 'react';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { StyledTableContainer } from './SpecsTable.styled';

function SpecsTableContainer({ children }) {
  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label='simple table'>{children}</Table>
    </StyledTableContainer>
  );
}

export default SpecsTableContainer;
