import React from "react";
import { StyledUserCard, StyledUserData, StyledTypography, StyledTopDecoration } from "./Styled.UserCard";

function UserCard({ user }) {
  return (
    <StyledUserCard>
      <StyledUserData>
        <StyledTopDecoration />
        <StyledTypography align="center" variant="paragraph" >
          {user.name}
        </StyledTypography>
      </StyledUserData>
    </StyledUserCard>
  )
}

export default UserCard;
