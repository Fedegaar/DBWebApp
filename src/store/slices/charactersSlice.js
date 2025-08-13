import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    links: {}
  },
  reducers: {
    setCharacters(state, action) {
      state.list = action.payload.items || [];
      state.links = action.payload.links || {};

    }
  }
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
