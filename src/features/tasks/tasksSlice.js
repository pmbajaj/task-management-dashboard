import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      if (taskIndex >= 0) state[taskIndex] = { ...state[taskIndex], ...updatedTask };
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload);
      if (taskIndex >= 0) state[taskIndex].completed = !state[taskIndex].completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
