import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F6C927',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#21213E',
      darkTransparent: '#0a0a1bb5',
      paper: '#121231',
    },
    text: {
      primary: '#ffffff',
    },
    success: {
      main: '#173918',
    },
    action: {
      disabled: '#6b6b6b',
    },
    border: {
      main: '#1f1f53',
    },
    boxShadow: {
      main: '#0a0a1b6f',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  components: {
    // CTRL + SPACE to find the component you would like to override.
    // For most of them you will need to adjust just the root...
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:after': {
            borderBottomColor: '#1F1F53',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#1F1F53',
              borderRadius: 10,
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: '#1F1F53',
              borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1F1F53',
            },
          },
        },
      },
    },
  },
});

export default muiTheme;
