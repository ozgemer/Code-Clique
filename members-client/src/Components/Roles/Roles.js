import React, { useContext, useState, useEffect, createElement } from "react";
import { RolesContext } from "../../context/RolesContext";
import { UsersContext } from "../../context/UsersContext";
import { StyledSelect, StyledBox, StyledOutlinedInput, StyledMenuItem, StyledListItemText, StyledCheckbox } from "./Roles.Styled";
import Role from "../Role/Role";
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//       backgroundColor: "#121231"
//     },
//   },
// };

export default function MultipleSelectChip({ user }) {
  const { updateUser } = useContext(UsersContext);
  const { teamRoles } = useContext(RolesContext);
  const [selectedRoleIds, setSelectedRoleIds] = useState(user.roles.map((role) => role._id));

  const handleRoleChange = (event) => {
    const { value } = event.target;
    setSelectedRoleIds(value);
  };
  useEffect(() => {
    updateUser({ ...user, roles: teamRoles.filter((role) => selectedRoleIds.includes(role._id)) }, "patch");
  }, [selectedRoleIds]);

  return (
    <StyledSelect
      multiple
      value={selectedRoleIds}
      onChange={handleRoleChange}
      input={<StyledOutlinedInput id="select-multiple-chip" label="Chip" />}
      renderValue={(selected) => (
        <StyledBox sx={{ display: 'flex', flexWrap: 'wrap' }}>
          < Role roledata={teamRoles.filter((role) => selected.includes(role._id))[0]} />
        </StyledBox>
      )}
    >
      {teamRoles.map((role) => (
        <StyledMenuItem key={role._id} value={role._id}>
          <StyledCheckbox checked={selectedRoleIds.includes(role._id)} />
          <StyledListItemText primary={role.name} rolecolor={role.color} />
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
}