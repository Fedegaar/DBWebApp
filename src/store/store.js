import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './slices/charactersSlice';
import planetsSlice from './slices/planetsSlice'

const store = configureStore({
  reducer: {
    characters: charactersSlice,
    planets: planetsSlice
  }
});

export default store;
