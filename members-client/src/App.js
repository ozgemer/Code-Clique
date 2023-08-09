import React from "react";
import MembersContent from "./MembersContent";

function App() {
  const PageLayout = React.lazy(() => import('masterClient/PageLayout'));

  return (
    <React.Suspense fallback='Loading...'>
      <PageLayout>
        <MembersContent />
      </PageLayout>
    </React.Suspense>
  );
}

export default App;
