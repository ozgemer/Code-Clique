import React from "react";
import { StyledTableHead, StyledTableRow, StyledTableCell } from "./Styled.Table";
import { Typography } from "@mui/material";

function UsersTableCriterias({ criterias }) {
  return (
    <StyledTableHead >
      <StyledTableRow>
        {criterias.map((criteria, index) => {
          if (criteria.toLowerCase() === "roles") return (
            <StyledTableCell key={index} topcell="true" size="15">
              <Typography variant={"h6"}>{criteria}</Typography>
            </StyledTableCell>

          )
          return (
            <StyledTableCell key={index} topcell="true">
              <Typography variant={"h6"}>{criteria}</Typography>
            </StyledTableCell>
          )
        })}
      </StyledTableRow>
    </StyledTableHead>
  );
}

export default UsersTableCriterias;
