import { createSlice, nanoid } from '@reduxjs/toolkit';
import { tasksSlice } from './taskSlice';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('Mobashir'),
  createHuman('Rizwan'),
  createHuman('Marc'),
  createHuman('Brian')
];

export const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      const human = createHuman(action.payload);
      state.push(human);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(tasksSlice.actions.assignedTo, (state, action) => {
      for (let human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskId
          );
        }
      }
    });
  }
});
