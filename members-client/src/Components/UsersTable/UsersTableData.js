import React from "react";
import { StyledTableRow, StyledTableCell } from "./Styled.Table";
import Member from '../Member/Member';
import { Typography, Link } from "@mui/material";
import Roles from "../Roles/Roles";
import Action from "../Actions/Action";

function UsersTableData({ user }) {
  return (
    <StyledTableRow key={user.name}>
      <StyledTableCell component="th" scope="row">
        <Member user={user} />
      </StyledTableCell>
      <StyledTableCell>
        <Link underline={"hover"} href={`mailto:${user.email}`} >
          <Typography variant={"h6"}>{user.email}</Typography>
        </Link>
      </StyledTableCell>
      <StyledTableCell>
        <Typography variant={"h6"}>{user.tasks.length}</Typography>
      </StyledTableCell>
      <StyledTableCell size="15">
        <Roles user={user} />
      </StyledTableCell>
      <StyledTableCell>
        <Action user={user} ></Action>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default UsersTableData;
