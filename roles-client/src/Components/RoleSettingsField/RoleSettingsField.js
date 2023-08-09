import React from "react";
import { StyledRoleSettingsFieldTitle, StyledRoleSettingsField } from "./RoleSettingsField.styled";

function RoleSettingsField({ title, children }) {
  return (
    <StyledRoleSettingsField>
      <StyledRoleSettingsFieldTitle variant="caption">{title}</StyledRoleSettingsFieldTitle>
      {children}
    </StyledRoleSettingsField>
  );
}

export default RoleSettingsField;
