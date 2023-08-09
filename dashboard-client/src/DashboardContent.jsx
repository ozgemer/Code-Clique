import { createTheme, ThemeProvider } from '@mui/material';
import Dashboard from './pages/Dashboard';
import { ThemeOptions } from './utils/Theme/MuiTheme';

function DashboardContent() {
  const theme = createTheme(ThemeOptions);
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default DashboardContent;
