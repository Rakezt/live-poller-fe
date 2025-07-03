import { PollsState } from '@/types/poll.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PollsState = { all: [] };

const pollSlice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    setAllPolls: (state, action) => {
      state.all = action.payload;
    },
    setCurrentPoll: (state, action) => {
      state.current = action.payload;
    },
    updateVotes: (state, action) => {
      if (!state.current) return;
      state.current.options[action.payload.optionId].votes =
        action.payload.votes;
    },
  },
});

export const { setAllPolls, setCurrentPoll, updateVotes } = pollSlice.actions;
export default pollSlice.reducer;
