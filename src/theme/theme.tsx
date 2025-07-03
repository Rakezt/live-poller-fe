// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2', // Blue
      light: '#63A4FF', // Light Blue
      dark: '#004BA0', // Dark Blue
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF9800', // Orange
      light: '#FFC947', // Light Orange
      dark: '#C66900', // Dark Orange
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F7FA', // Very light gray
      paper: '#FFFFFF', // White
    },
    error: {
      main: '#D32F2F', // Red
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFA000', // Amber
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#0288D1', // Cyan
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#388E3C', // Green
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#212121', // Almost black
      secondary: '#1976D2', // Blue
      disabled: '#BDBDBD',
    },
    divider: '#E0E0E0', // Light gray
  },
  typography: {
    fontFamily: '"Roboto Slab", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 900,
    h1: {
      fontSize: '2.7rem',
      fontWeight: 900,
      letterSpacing: '-0.02em',
      color: '#1976D2',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: '#FF9800',
    },
    h3: {
      fontSize: '1.7rem',
      fontWeight: 800,
      color: '#388E3C',
    },
    subtitle1: {
      fontSize: '1.15rem',
      fontWeight: 700,
      color: '#63A4FF',
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
    '0px 2px 8px rgba(25,118,210,0.10)',
    '0px 4px 20px rgba(255,152,0,0.12)',
    '0px 4px 20px rgba(56,142,60,0.12)',
    '0px 4px 20px rgba(255,160,0,0.12)',
    '0px 4px 20px rgba(2,136,209,0.12)',
    '0px 4px 20px rgba(99,164,255,0.12)',
    '0px 4px 20px rgba(25,118,210,0.12)',
    '0px 4px 20px rgba(255,152,0,0.12)',
    '0px 4px 20px rgba(56,142,60,0.12)',
    '0px 4px 20px rgba(255,160,0,0.12)',
    '0px 4px 20px rgba(2,136,209,0.12)',
    '0px 4px 20px rgba(99,164,255,0.12)',
    '0px 4px 20px rgba(25,118,210,0.12)',
    '0px 4px 20px rgba(255,152,0,0.12)',
    '0px 4px 20px rgba(56,142,60,0.12)',
    '0px 4px 20px rgba(255,160,0,0.12)',
    '0px 4px 20px rgba(2,136,209,0.12)',
    '0px 4px 20px rgba(99,164,255,0.12)',
    '0px 4px 20px rgba(25,118,210,0.12)',
    '0px 4px 20px rgba(255,152,0,0.12)',
    '0px 4px 20px rgba(56,142,60,0.12)',
    '0px 4px 20px rgba(255,160,0,0.12)',
    '0px 4px 20px rgba(2,136,209,0.12)',
    '0px 4px 20px rgba(99,164,255,0.12)',
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
            boxShadow: '0px 2px 8px rgba(25,118,210,0.15)',
            backgroundColor: '#1565C0',
          },
        },
        containedPrimary: {
          backgroundColor: '#1976D2',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          boxShadow: '0px 2px 8px rgba(25,118,210,0.10)',
          color: '#212121',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#1976D2',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(255,152,0,0.12)',
          backgroundColor: '#FFC947',
          color: '#212121',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#F5F7FA',
          color: '#212121',
        },
      },
    },
  },
});

export default theme;
