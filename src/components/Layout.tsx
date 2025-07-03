import { Container } from '@mui/material';
import { ReactNode } from 'react';
import NavControls from './NavControls';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: { xs: 'auto', md: '100vh' },
        mt: { xs: '5vh', md: 'auto' },
      }}
    >
      <NavControls />
      {children}
    </Container>
  );
}
