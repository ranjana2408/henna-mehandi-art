// theme.js
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#EC5598',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Courgette","Mulish"',
    h3: {
      fontFamily: "Mulish",
      fontWeight: 900,
    },
    h5: {
      fontWeight: 500,
      fontSize:'12px !important'
    },
    h6: {
      fontFamily: "Courgette",
      fontWeight: 400,
      fontSize:'20px',
      color:'#EC5598'
    },
  },
});

export default theme;
