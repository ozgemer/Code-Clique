import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  StyledPageLayout,
  StyledPageWidth,
  StyledContentLayout,
  StyledDefaultHeader,
} from './PageLayout.styled';
import { PageContext } from '../../contexts/PageContext';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

function PageLayout({ children }) {
  // eslint-disable-next-line import/no-unresolved
  const SpecsContent = React.lazy(() => import('specsClient/SpecsContent'));
  // eslint-disable-next-line import/no-unresolved
  const BoardContent = React.lazy(() => import('boardClient/BoardContent'));
  // eslint-disable-next-line import/no-unresolved
  const MembersContent = React.lazy(() =>
    import('membersClient/MembersContent')
  );
  const DashboardContent = React.lazy(() =>
    // eslint-disable-next-line import/no-unresolved
    import('dashboardClient/DashboardContent')
  );
  const CalenderContent = React.lazy(() =>
    // eslint-disable-next-line import/no-unresolved
    import('calenderClient/CalenderContent')
  );
  const SettingsContent = React.lazy(() =>
    // eslint-disable-next-line import/no-unresolved
    import('settingsClient/SettingsContent')
  );

  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(true);

  return (
    <PageContext>
      <StyledPageLayout>
        <Sidebar
          ismediumscreen={isMediumScreen}
          issmallscreen={isSmallScreen}
          openstate={{ open, setOpen }}
        />
        <StyledPageWidth>
          <Header issmallscreen={isSmallScreen} openstate={{ open, setOpen }} />
          <StyledContentLayout>
            <Routes>
              <Route path='/' element={<Navigate replace to='/dashboard' />} />
              <Route
                path='/dashboard'
                element={
                  children || (
                    <Suspense fallback='Loading...'>
                      <DashboardContent />
                    </Suspense>
                  )
                }
              />

              <Route
                path='/board'
                element={
                  children || (
                    <Suspense fallback='Loading...'>
                      <BoardContent />
                    </Suspense>
                  )
                }
              />

              <Route
                path='/specs'
                element={
                  children || (
                    <Suspense fallback='Loading...'>
                      <SpecsContent />
                    </Suspense>
                  )
                }
              />

              <Route
                path='/members'
                element={
                  children || (
                    <Suspense fallback='Loading...'>
                      <MembersContent />
                    </Suspense>
                  )
                }
              />

              <Route
                path='/calender'
                element={
                  children || (
                    <Suspense fallback='Loading...'>
                      <CalenderContent />
                    </Suspense>
                  )
                }
              />

              <Route
                path='/settings'
                element={
                  children || (
                    <Suspense fallback='Loading...'>
                      <SettingsContent />
                    </Suspense>
                  )
                }
              />

              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </StyledContentLayout>
        </StyledPageWidth>
      </StyledPageLayout>
    </PageContext>
  );
}

export default PageLayout;
