import React from "react";
import { StyledRole, StyledRoleColor, StyledRoleName } from "./Role.styled";

function Role({ teamrole, onclick, selectedvalue }) {
  const selected = (selectedvalue === teamrole._id);

  return (
    <StyledRole selected={selected} onClick={() => onclick(teamrole._id)} >
      <StyledRoleColor color={teamrole.color} />
      <StyledRoleName>
        {teamrole.name}
      </StyledRoleName>
    </StyledRole>
  );
}

export default Role;
