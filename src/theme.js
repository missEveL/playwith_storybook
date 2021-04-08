import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8d6e63',
      light: '#be9c91',
      dark: '#5f4339'
    },
    secondary: {
      main: '#ff6e40',
      light: '#ffa06d',
      dark: '#c53d13'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;