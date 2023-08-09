import React from 'react';
import SettingsContent from './SettingsContent';
function App() {
  const PageLayout = React.lazy(() => import('masterClient/PageLayout'));

  return (
    <React.Suspense fallback='Loading... masterClient'>
      <PageLayout>
        <SettingsContent />
      </PageLayout>
    </React.Suspense>
  );
}

export default App;
