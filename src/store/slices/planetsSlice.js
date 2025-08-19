import { createSlice } from '@reduxjs/toolkit';

const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    list: [],
    links: {}
  },
  reducers: {
    setPlanets(state, action) {
      state.list = action.payload.items || [];
      state.links = action.payload.links || {};
    }
  }
});

export const { setPlanets } = planetsSlice.actions;
export default planetsSlice.reducer;
