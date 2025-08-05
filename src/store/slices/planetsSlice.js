import { createSlice } from '@reduxjs/toolkit';

const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    list: []
  },
  reducers: {
    setPlanets(state, action) {
      state.list = action.payload;
    }
  }
});

export const { setPlanets } = planetsSlice.actions;
export default planetsSlice.reducer;
