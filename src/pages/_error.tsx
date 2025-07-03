// pages/_error.tsx
import { NextPageContext } from 'next';
import Link from 'next/link';
import { Container, Typography, Box, Button } from '@mui/material';

interface ErrorProps {
  statusCode: number;
  errorMessage?: string;
}

export default function ErrorPage({ statusCode, errorMessage }: ErrorProps) {
  // Determine if it's a network/server-off situation
  const isNetworkError =
    statusCode === 0 || statusCode === 502 || statusCode === 503;

  const title = isNetworkError
    ? 'Cannot Connect to Server'
    : statusCode === 404
    ? 'Page Not Found'
    : 'Something Went Wrong';

  const description = isNetworkError
    ? 'We’re having trouble reaching our servers. Please check your connection or try again later.'
    : statusCode === 404
    ? 'Sorry, the page you’re looking for doesn’t exist.'
    : errorMessage
    ? errorMessage
    : 'An unexpected error occurred. Please try again later.';

  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant='h1' component='h1' color='error' gutterBottom>
        {isNetworkError ? '⚠️' : statusCode}
      </Typography>

      <Typography variant='h5' gutterBottom>
        {title}
      </Typography>

      <Typography variant='body1' sx={{ mb: 4 }}>
        {description}
      </Typography>

      <Box>
        <Link href='/' passHref>
          <Button variant='contained' color='primary' sx={{ mr: 2 }}>
            Go Home
          </Button>
        </Link>
        <Link href='/login' passHref>
          <Button variant='outlined' color='secondary'>
            Go to Login
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  let statusCode = 500;
  let errorMessage: string | undefined;

  if (res) {
    // Server-side HTTP status
    statusCode = res.statusCode;
  } else if (err) {
    // Client-side JS error
    statusCode = err.statusCode ?? 500;
    errorMessage = err.message;
  } else {
    // Likely network error (e.g. failed fetch to backend)
    statusCode = 0;
  }

  return { statusCode, errorMessage };
};
