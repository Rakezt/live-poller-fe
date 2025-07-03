import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Snackbar,
} from '@mui/material';
import { fetchPollById } from '@/service/api';
import { setCurrentPoll } from '@/store/pollSlice';
import { RootState } from '@/store';
import { useSocket } from '@/hooks/useSocket';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#d0ed57', '#a4de6c'];

const Poll = () => {
  const { query } = useRouter();
  const pollId = query.id as string;
  const dispatch = useDispatch();
  const poll = useSelector((s: RootState) => s.polls.current);
  const { sendVote } = useSocket((query.id as string) || '');
  const [isHost, setIsHost] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (!pollId) return;
    fetchPollById(pollId).then((res) => dispatch(setCurrentPoll(res.data)));
  }, [pollId, dispatch]);

  useEffect(() => {
    const role = localStorage.getItem('role');
    const userName = localStorage.getItem('userName');
    setIsHost(role === 'host');
    if (pollId && userName) {
      setHasVoted(Boolean(localStorage.getItem(`voted_${pollId}_${userName}`)));
    }
  }, [pollId]);

  if (!poll) return <Typography>Loading…</Typography>;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(poll._id);
      setSnackbarOpen(true);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };
  const handleVote = (optionIndex: number) => {
    const username = localStorage.getItem('userName');
    if (!username || hasVoted) return;
    sendVote(optionIndex);
    localStorage.setItem(`voted_${pollId}_${username}`, 'true');
    setHasVoted(true);
    setShowChart(true);
  };

  const chartData = poll.options.map((opt) => ({
    name: opt.text,
    value: opt.votes,
  }));

  return (
    <Container sx={{ py: 4 }}>
      <Paper sx={{ p: 4, mb: 3, borderRadius: 2, boxShadow: 4 }}>
        <Typography variant='h5' fontWeight='bold' gutterBottom>
          {poll.question}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography variant='body1' color='secondary.light'>
            {poll.createdBy ?? 'Anonymous'} created this poll
          </Typography>

          {isHost && (
            <Button
              variant='outlined'
              sx={{ color: 'secondary.light' }}
              size='small'
              onClick={handleShare}
            >
              Share Poll ID
            </Button>
          )}
        </Box>

        {!showChart ? (
          poll.options.map((opt, idx) => (
            <Box
              key={idx}
              sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant='subtitle1' color='secondary.contrastText'>
                  {opt.text}
                </Typography>
                <Typography variant='caption' color='secondary.light'>
                  {opt.votes} vote{opt.votes !== 1 ? 's' : ''}
                </Typography>
              </Box>
              <Button
                variant='contained'
                size='small'
                onClick={() => handleVote(idx)}
                disabled={hasVoted}
              >
                {hasVoted ? 'Voted' : 'Vote'}
              </Button>
            </Box>
          ))
        ) : (
          <Box sx={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey='value'
                  data={chartData}
                  nameKey='name'
                  outerRadius={100}
                  label
                >
                  {chartData.map((_, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={COLORS[idx % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign='bottom' height={36} />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message='Poll ID copied!'
      />
    </Container>
  );
};

export default Poll;
