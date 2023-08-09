import React, { useContext } from 'react';
import { UsersContext } from "../../context/UsersContext";
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { StyledTableContainer, StyledTable } from "./Styled.Table";
import UsersTableData from './UsersTableData';
import UsersTableCriterias from './UsersTableCriterias';

function UsersTable() {
  const criterias = ["User", "Email", "Assigned Tasks", "Roles", "Actions"];
  const { users } = useContext(UsersContext);

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable>
        <UsersTableCriterias criterias={criterias} />
        <TableBody>
          {users.map((user, index) => {
            return <UsersTableData user={user} key={index} />
          })}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

export default UsersTable;
