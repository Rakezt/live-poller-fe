import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateVotes } from '@/store/pollSlice';

import { VoteUpdatePayload } from '@/types/poll.types';
import ioClient from 'socket.io-client';

type ClientSocket = ReturnType<typeof ioClient>;

export function useSocket(pollId: string) {
  const dispatch = useDispatch();
  const socketRef = useRef<ClientSocket | null>(null);

  useEffect(() => {
    const backendURL = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '');
    if (!backendURL) {
      console.error('NEXT_PUBLIC_API_URL is undefined');
      return;
    }

    socketRef.current = ioClient(backendURL, { transports: ['websocket'] });

    socketRef.current.on('connect', () => {
      console.log('socket connected');
    });

    socketRef.current.on(
      'vote-update',
      ({ pollId: pid, optionId, votes }: VoteUpdatePayload) => {
        if (pid === pollId) {
          dispatch(updateVotes({ optionId, votes }));
        }
      }
    );

    return () => {
      socketRef.current?.disconnect();
    };
  }, [pollId, dispatch]);

  const sendVote = (optionIndex: number) => {
    socketRef.current?.emit('vote', { pollId, optionId: optionIndex });
  };

  return { sendVote };
}
