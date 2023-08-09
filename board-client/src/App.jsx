import React from 'react';
import BoardContent from './BoardContent';

function App() {
  // eslint-disable-next-line import/no-unresolved
  const PageLayout = React.lazy(() => import('masterClient/PageLayout'));

  return (
    <React.Suspense fallback='Loading...'>
      <PageLayout>
        <BoardContent data-testid='test' />
      </PageLayout>
    </React.Suspense>
  );
}

export default App;
