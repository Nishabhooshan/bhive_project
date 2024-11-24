import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFCA2C',
    },
    secondary: {
      main: '#000000',
    },
    text: {
      primary: '#333333',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
