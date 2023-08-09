import React, { Fragment } from "react";
import { StyledSaveChanges, StyledButton } from "./SaveChanges.styled";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />
}

function SaveChanges({ message, open, handleclose }) {
  const action = (
    <Fragment>
      <StyledButton type="discard" onClick={() => handleclose(false)} >
        Discard
      </StyledButton>
      <StyledButton type="save" onClick={() => handleclose(true)} >
        Save
      </StyledButton>
    </Fragment>
  );

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      TransitionComponent={SlideTransition}
    >
      <StyledSaveChanges
        message={message}
        action={action}
      />
    </Snackbar>
  );
}

export default SaveChanges;
