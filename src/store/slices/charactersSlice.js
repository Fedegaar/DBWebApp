import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    list: []
  },
  reducers: {
    setCharacters(state, action) {
      state.list = action.payload;
    }
  }
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
