import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#212121',
      light: '#BDBDBD',
    },
    secondary: {
      main: '#D32F2F',
      light: '#fff',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    h1: {
      fontWeight: 500,
      fontSize: 48,
    },
    h3: {
      fontWeight: 500,
      fontSize: 32,
    },
  },
});

export default theme;
