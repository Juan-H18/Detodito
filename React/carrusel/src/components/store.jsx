import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice.jsx';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});