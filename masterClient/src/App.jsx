import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './components/Auth/RequireAuth';
import PageLayout from './components/PageLayout/PageLayout';
import { AuthProvider } from 'masterClient/authContext';
import { ProjectProvider } from 'masterClient/projectContext';
import { AxiosProvider } from 'masterClient/axiosContext';
import Login from './pages/Login';
import muiTheme from './util/muiTheme/muiTheme';
import GlobalStyle from './util/theme/GlobalStyles';
import axiosinstance from './contexts/AxiosV2';
import { GlobalStore } from 'redux-micro-frontend';

function App({ children }) {
  const globalStore = GlobalStore.Get();

  window.axios = axiosinstance('63597a603b1b53020e8847fa');

  return (
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyle />
        <AuthProvider>
          <AxiosProvider>
            <ProjectProvider>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route element={<RequireAuth />}>
                  <Route
                    path='*'
                    element={<PageLayout>{children}</PageLayout>}
                  />
                </Route>
              </Routes>
            </ProjectProvider>
          </AxiosProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
