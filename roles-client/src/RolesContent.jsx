import * as React from "react";
import Roles from "./Components/Roles/Roles";
import { RolesProvider } from "./context/RolesContext";

function RolesContent() {

  return (
    <RolesProvider>
      <Roles />
    </RolesProvider>
  );
}

export default RolesContent;
