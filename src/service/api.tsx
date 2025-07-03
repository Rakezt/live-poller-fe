import { CreateUserPayload, PollData } from '@/types/poll.types';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
});

export const createPoll = (pollData: PollData) => api.post('/polls', pollData);
export const fetchPolls = () => api.get('/polls');
export const fetchPollById = (id: string) => api.get(`/polls/${id}`);
// export const updatePollVotes = (id: string, optionIndex: number) =>
//   api.post(`/polls/${id}/vote`, { optionIndex });

export const createUser = (userData: CreateUserPayload) =>
  api.post('/users', userData);
