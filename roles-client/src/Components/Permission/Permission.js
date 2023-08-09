import React, { useContext } from 'react';
import { RolesContext } from '../../context/RolesContext';
import {
  StyledPermission,
  StyledSwitch,
  StyledPermissionLine,
  StyledPermissionTitle,
  StyledPermissionDescription,
} from './Permission.styled';

function Permission({ permission, teamrole }) {
  const { setRoles } = useContext(RolesContext);
  const granted = teamrole.permissions[permission.code];

  const handleChange = () => {
    const newPermissions = {
      ...teamrole.permissions,
      [permission.code]: !teamrole.permissions[permission.code],
    };
    setRoles(true, { ...teamrole, permissions: newPermissions });
  };

  return (
    <StyledPermission>
      <StyledPermissionLine>
        <StyledPermissionTitle variant='h6'>
          {permission.name}
        </StyledPermissionTitle>
        <StyledSwitch
          color='primary'
          onClick={handleChange}
          checked={granted}
        />
      </StyledPermissionLine>
      <StyledPermissionDescription variant='subtitle1'>
        {permission.description}
      </StyledPermissionDescription>
    </StyledPermission>
  );
}

export default Permission;
