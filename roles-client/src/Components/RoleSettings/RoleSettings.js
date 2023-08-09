import React, { useState, useContext } from "react";
import { RolesContext } from "../../context/RolesContext";
import Permissions from "../Permissions/Permissions";
import RoleSettingsField from "../RoleSettingsField/RoleSettingsField";
import RoleNameSettingsField from "../RoleNameSettingsField/RoleNameSettingsField";
import RoleColorSettingsField from "../RoleColorSettingsField/RoleColorSettingsField";
import SaveChanges from "../SaveChanges/SaveChanges";
import DeleteRole from "../DeleteRole/DeleteRole";

function RoleSettings({ teamrole }) {
  const { setRoles } = useContext(RolesContext);
  const [open, setOpen] = useState(false);
  const [lastSave, setLastSave] = useState({
    name: teamrole.name,
    color: teamrole.color
  });

  const handleClose = (save) => {
    setOpen(false);
    if (!save) return setLastSave({ name: teamrole.name, color: teamrole.color });
    const newRole = { ...teamrole, name: lastSave.name, color: lastSave.color };
    setRoles(true, newRole);
  }

  return (
    <>
      <RoleSettingsField title="Role Name" >
        <RoleNameSettingsField teamrole={teamrole} setlastsave={setLastSave} lastsave={lastSave} setopen={setOpen} />
      </RoleSettingsField>
      <RoleSettingsField title="Role Color" >
        <RoleColorSettingsField setlastsave={setLastSave} lastsave={lastSave} setopen={setOpen} />
      </RoleSettingsField>
      <Permissions teamrole={teamrole} />
      <DeleteRole teamrole={teamrole} />
      <SaveChanges message="You have unsaved changes." open={open} handleclose={handleClose} />
    </>
  );
}

export default RoleSettings;
