import React from "react";
import { UsersProvider } from "./context/UsersContext";
import { RolesProvider } from "./context/RolesContext";
import MembersTablePage from "./Pages/MembersTablePage";
import { QueryClient, QueryClientProvider } from "react-query";
function MembersContent() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RolesProvider>
        <UsersProvider>
          <MembersTablePage />
        </UsersProvider>
      </RolesProvider>
    </QueryClientProvider>
  );
}

export default MembersContent;