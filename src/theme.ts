import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h2: {
      fontFamily: `"Merriweather", serif`,
      fontSize: '2.5rem',
      //   fontStyle: 'italic',
      fontWeight: 700,
    },
    h6: {
      fontFamily: `'Merriweather', serif`,
      fontSize: '1.2rem',
      fontWeight: 700,
    },
    button: {
      fontFamily: `'Roboto', sans-serif`,
      textTransform: 'none',
    },
  },
  palette: {
    primary: { main: '#556cd6' },
    secondary: { main: '#19857b' },
    background: {
      default: '#d5dce6',
      paper: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          borderWidth: '2px',
          borderStyle: 'solid',
          textTransform: 'uppercase',
          fontWeight: 600,
          height: '40px',
          padding: '20px',
          boxShadow: 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          color: '#333',
        },
        containedPrimary: {
          backgroundColor: '#d5dce6',
          color: '#414e62',
          border: 'none',
          '&:hover': {
            backgroundColor: '#c0c9d9',
            boxShadow: 'none',
            color: '#414e62',
          },
        },
        containedSecondary: {
          backgroundColor: '#f5c1aa',
          color: '#723c26',
          border: 'none',
          '&:hover': {
            backgroundColor: '#ecb499',
            color: '#5a2a17',
            boxShadow: 'none',
          },
        },
        outlinedPrimary: {
          borderColor: '#c8d3e8',
          color: '#556cd6',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: '#e4eaf5',
            borderColor: '#aab9d6',
          },
        },
        outlinedSecondary: {
          borderColor: '#bdd9d6',
          color: '#19857b',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: '#d5e4e1',
            borderColor: '#9ec4bf',
          },
        },
        textPrimary: {
          color: '#556cd6',
          '&:hover': {
            backgroundColor: '#e4eaf5',
          },
        },
        textSecondary: {
          color: '#19857b',
          '&:hover': {
            backgroundColor: '#d5e4e1',
          },
        },
      },
    },
  },
});

export default theme;
