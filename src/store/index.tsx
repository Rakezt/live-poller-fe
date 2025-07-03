import { configureStore } from '@reduxjs/toolkit';
import pollsReducer from './pollSlice';

export const store = configureStore({
  reducer: { polls: pollsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
