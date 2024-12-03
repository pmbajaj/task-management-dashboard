import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#673ab7', // Purple for primary elements
    },
    secondary: {
      main: '#ff4081', // Pink for secondary elements
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e2f', // Slightly lighter for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
