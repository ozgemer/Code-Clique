import React from "react";
import { StyledAvatar } from "./Styled.Avatar";

function UserAvatar({ avatar: { image, name }, func = (() => null), size = 2.5 }) {
  return (
    <StyledAvatar
      size={size}
      src={image}
      string={name}
      onClick={(event) => func(event)}
    >{name}</StyledAvatar>
  );
}

export default UserAvatar;
