// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#23272F', // Deep navy blue
      light: '#3A4052', // Slate blue
      dark: '#181B20', // Almost black
      contrastText: '#F5F7FA', // Off-white
    },
    secondary: {
      main: '#1F7A8C', // Steel blue
      light: '#3FB6C6', // Lighter blue
      dark: '#14505C', // Dark teal
      contrastText: '#F5F7FA',
    },
    background: {
      default: '#F5F7FA', // Light gray
      paper: '#23272F', // Deep navy blue
    },
    error: {
      main: '#D7263D', // Strong red
      contrastText: '#F5F7FA',
    },
    warning: {
      main: '#FFB400', // Bold amber
      contrastText: '#23272F',
    },
    info: {
      main: '#1F7A8C', // Steel blue
      contrastText: '#F5F7FA',
    },
    success: {
      main: '#21B573', // Emerald green
      contrastText: '#23272F',
    },
    text: {
      primary: '#23272F', // Deep navy blue
      secondary: '#1F7A8C', // Steel blue
      disabled: '#A0A4A8',
    },
    divider: '#3A4052', // Slate blue
  },
  typography: {
    fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 900,
    h1: {
      fontSize: '2.7rem',
      fontWeight: 900,
      letterSpacing: '-0.02em',
      color: '#23272F',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: '#1F7A8C',
    },
    h3: {
      fontSize: '1.7rem',
      fontWeight: 800,
      color: '#181B20',
    },
    subtitle1: {
      fontSize: '1.15rem',
      fontWeight: 700,
      color: '#3A4052',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 800,
      letterSpacing: '0.07em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(35,39,47,0.10)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
    '0px 4px 20px rgba(31,122,140,0.12)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 28px',
          boxShadow: 'none',
          fontWeight: 800,
          '&:hover': {
            boxShadow: '0px 2px 8px rgba(35,39,47,0.15)',
            backgroundColor: '#1F7A8C',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #23272F 0%, #1F7A8C 100%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#23272F',
          borderRadius: 8,
          boxShadow: '0px 2px 8px rgba(35,39,47,0.10)',
          color: '#F5F7FA',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          background: 'linear-gradient(90deg, #23272F 0%, #1F7A8C 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(31,122,140,0.12)',
          backgroundColor: '#181B20',
          color: '#F5F7FA',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#3A4052',
          color: '#F5F7FA',
        },
      },
    },
  },
});

export default theme;
