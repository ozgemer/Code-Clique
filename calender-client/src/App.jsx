import React from 'react';
import CalenderContent from './CalenderContent';
function App() {
  const PageLayout = React.lazy(() => import('masterClient/PageLayout'));

  return (
    <React.Suspense fallback='Loading...'>
      <PageLayout>
        <CalenderContent />
      </PageLayout>
    </React.Suspense>
  );
}

export default App;