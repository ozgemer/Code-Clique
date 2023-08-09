import React from 'react';
import DashboardContent from './DashboardContent';

function App() {
  const PageLayout = React.lazy(() => import('masterClient/PageLayout'));

  return (
    <React.Suspense fallback='Loading...'>
      <PageLayout>
        <DashboardContent />
      </PageLayout>
    </React.Suspense>
  );
}

export default App;
