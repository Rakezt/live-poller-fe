import Link from 'next/link';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPolls } from '@/service/api';
import { setAllPolls } from '@/store/pollSlice';
import { RootState } from '@/store';

const Polls = () => {
  const dispatch = useDispatch();
  const polls = useSelector((s: RootState) => s.polls.all);

  useEffect(() => {
    fetchPolls().then((res) => dispatch(setAllPolls(res.data)));
  }, [dispatch]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant='h4'
        fontWeight='bold'
        sx={{ color: 'text.primary' }}
        gutterBottom
      >
        Available Polls
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
          mt: 2,
        }}
      >
        {polls.map((poll, i) => (
          <Link key={poll._id} href={`/polls/${poll._id}`} passHref>
            <Card
              component={CardActionArea}
              sx={{
                transition: 'transform 0.2s',
                bgcolor: 'primary.light',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <CardContent>
                <Typography variant='h6' fontWeight={500}>
                  {i + 1}. {poll.question}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 1,
                  }}
                >
                  <Typography variant='body2' color='text.primary'>
                    {poll.options.length} options
                  </Typography>
                  <Typography variant='body2' color='text.primary'>
                    Created by {poll.createdBy}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Polls;
