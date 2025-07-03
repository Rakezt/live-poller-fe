import Link from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('userName');
      setUser(storedUser);
    }
  }, []);
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 3,
          p: 5,
          gap: 3,
        }}
      >
        <Typography
          variant='h1'
          fontWeight='bold'
          sx={{ color: 'text.primary' }}
          gutterBottom
        >
          Live Poller
        </Typography>
        <Typography variant='subtitle1' color='secondary.main' gutterBottom>
          Hi {user ?? 'User'}, Create and participate in live polls instantly!
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Link href='/polls/create' passHref>
            <Button variant='contained' color='primary' size='large'>
              Create a New Poll
            </Button>
          </Link>
          <Link href='/polls' passHref>
            <Button
              variant='contained'
              size='large'
              sx={{ color: 'secondary.contrastText' }}
            >
              Vote an Existing Poll
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
