import { configureStore } from '@reduxjs/toolkit';
import { humansSlice } from './humansSlice';
import { tasksSlice } from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humansSlice.reducer
  }
});
