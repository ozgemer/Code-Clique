import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { StyledPicker, StyledSwatch, StyledPopover } from "./RoleColorSettingsField.styled"

import useClickOutside from "../../hooks/useClickOutside";

export const RoleColorSettingsField = ({ setlastsave, lastsave, setopen }) => {
  const popover = useRef();
  const [toggle, setToggle] = useState(false);

  const close = useCallback(() => setToggle(false), []);
  useClickOutside(popover, close);

  const handleChange = (color) => {
    setlastsave({ ...lastsave, color: color });
    setopen(true);
  }
  return (
    <StyledPicker>
      <StyledSwatch
        style={{ backgroundColor: lastsave.color }}
        onClick={() => setToggle(true)}
      />

      {toggle && (
        <StyledPopover ref={popover}>
          <HexColorPicker color={lastsave.color} onChange={handleChange} />
        </StyledPopover>
      )}
    </StyledPicker>
  );
};

export default RoleColorSettingsField;
