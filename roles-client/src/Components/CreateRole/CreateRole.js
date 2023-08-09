import React, { useContext } from "react";
import { RolesContext } from "../../context/RolesContext";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { StyledCreateRole } from "./CreateRole.styled";

function CreateRole() {
  const { updateRole, teamRoles } = useContext(RolesContext);
  const handleClick = () => {
    const newRole = {
      name: "New Role",
      color: "#999999",
      permissions: {
        MANAGE_TASKS: false,
        MANAGE_USERS: false,
        MANAGE_ROLES: false
      },
      index: teamRoles.length,
    }
    updateRole(newRole, "post");
  }

  return (
    <StyledCreateRole title="New Role">
      <IconButton onClick={handleClick} style={{ color: "white" }}>
        <AddIcon />
      </IconButton>
    </StyledCreateRole>
  );
}

export default CreateRole;
