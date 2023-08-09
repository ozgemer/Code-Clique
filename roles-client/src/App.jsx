import React from "react";
import RolesContent from "./RolesContent";

export default function App() {
  return (
    <React.Suspense fallback='Loading...'>
      <RolesContent />
    </React.Suspense>
  );
}