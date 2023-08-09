import { createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#21213E',
      paper: '#121231',
    },
    text: {
      primary: '#ffffff',
    },
    success: {
      main: '#173918',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});

export { theme };
