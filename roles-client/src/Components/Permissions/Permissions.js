import React from "react";
import Permission from "../Permission/Permission";
import { StyledPermissions } from "./Permissions.styled";

function Permissions({ teamrole }) {

  const permissions = [
    {
      name: "Manage Users",
      description: "Allows for users to manage other team members.",
      code: "MANAGE_USERS"
    },
    {
      name: "Manage Tasks",
      description: "Allows for users to manage tasks.",
      code: "MANAGE_TASKS"
    },
    {
      name: "Manage Roles",
      description: "Allows for users to create, delete, grant and remove roles from the project and its users.",
      code: "MANAGE_ROLES"
    }
  ];

  return (
    permissions.map((permission, index) => {

      return (
        <StyledPermissions key={index}>
          <Permission permission={permission} teamrole={teamrole} />
        </StyledPermissions>
      );
    })
  );
}

export default Permissions;
