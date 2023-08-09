import React from "react";
import UserAvatar from "../Avatar/Avatar";
import { StyledMember, StyledTypography } from "./Styled.Member";

function Member({ user }) {
  return (
    <StyledMember>
      <UserAvatar avatar={user} />
      <StyledTypography variant="p">{user.name}</StyledTypography>
    </StyledMember>
  );
}

export default Member;
