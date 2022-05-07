import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialSlice';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
