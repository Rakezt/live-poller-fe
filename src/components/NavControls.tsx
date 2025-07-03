import { Box, IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavControls() {
  const router = useRouter();

  const handleLogout = () => {
    // clear all user data
    localStorage.removeItem('userName');
    localStorage.removeItem('role');
    // optionally clear any vote flags
    Object.keys(localStorage)
      .filter((key) => key.startsWith('voted_'))
      .forEach((key) => localStorage.removeItem(key));
    router.push('/login');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        display: 'flex',
        gap: 1,
        zIndex: 1000,
      }}
    >
      <Tooltip title='Go Back'>
        <IconButton color='primary' onClick={handleBack}>
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title='Logout'>
        <IconButton color='error' onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
