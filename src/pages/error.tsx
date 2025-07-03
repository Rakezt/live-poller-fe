import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Typography, Box, Button } from '@mui/material';

export default function ClientErrorPage() {
  const { query } = useRouter();
  const statusCode = parseInt((query.statusCode as string) || '500', 10);
  const errorMessage = (query.message as string) || '';

  const isNetwork = statusCode === 0;

  const title = isNetwork
    ? 'Network Error'
    : statusCode === 404
    ? 'Page Not Found'
    : 'Something Went Wrong';

  const description = isNetwork
    ? 'Unable to reach the server. Please check your connection and try again.'
    : errorMessage || 'An unexpected error occurred. Please try again.';

  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant='h1' color='error' gutterBottom>
        {isNetwork ? '⚠️' : statusCode}
      </Typography>
      <Typography variant='h5' gutterBottom>
        {title}
      </Typography>
      <Typography variant='body1' sx={{ mb: 4 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Link href='/login' passHref>
          <Button variant='outlined' sx={{ color: 'secondary.light' }}>
            Login
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
