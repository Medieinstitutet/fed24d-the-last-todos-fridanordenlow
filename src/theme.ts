import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`, // Brödtext
    h2: {
      fontFamily: `'Merriweather', serif`, // Rubriker
      fontWeight: 700,
    },
    h6: {
      fontFamily: `'Merriweather', serif`,
      fontWeight: 700,
    },
    button: {
      fontFamily: `'Roboto', sans-serif`,
      textTransform: 'none',
      //   background: '#c1ccdb', funkar ej
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
          padding: '6px 22px',
          boxShadow: 'none',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
          color: '#333',
        },
        containedPrimary: {
          backgroundColor: '#d5e0db', // Din färg
          color: '#2e3f38', // Mörk grågrön för kontrast
          borderColor: '#a6beb3', // Mjukare, men tydlig border
          borderWidth: '2px',
          borderStyle: 'solid',
          '&:hover': {
            backgroundColor: '#a6beb3', // Lite mörkare vid hover
            borderColor: '#8fa99e',
            boxShadow: 'none',
          },
        },
        containedSecondary: {
          backgroundColor: '#f5d7d7', // Ljus rosa-röd ton
          color: '#8a1c1c', // Dov röd text
          borderColor: '#e4b4b4', // Ljusröd border
          borderWidth: '2px',
          borderStyle: 'solid',
          '&:hover': {
            backgroundColor: '#e4b4b4',
            borderColor: '#cc9999',
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
