import * as React from "react";
import SpecsContent from "./SpecsContent";

function App() {
  const PageLayout = React.lazy(() => import("masterClient/PageLayout"));
  return (
    <React.Suspense fallback="Loading...">
      <PageLayout>
        <SpecsContent />
      </PageLayout>
    </React.Suspense>
  );
}

export default App;
