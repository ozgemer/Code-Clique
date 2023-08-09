import React from "react";
import { StyledRoleNameSettingsField } from "./RoleNameSettingsField.styled";

function RoleNameSettingsField({ teamrole, setlastsave, lastsave, setopen }) {
  const handleChange = (event) => {
    const { value } = event.target;
    setlastsave({ ...lastsave, name: value });
    setopen(true);
  }

  return (
    <>
      <StyledRoleNameSettingsField
        hiddenLabel
        value={lastsave.name}
        variant="filled"
        size="small"
        color={teamrole.color}
        InputProps={{ disableUnderline: true }}
        onChange={handleChange}
      />
    </>
  );
}

export default RoleNameSettingsField;
