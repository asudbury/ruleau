import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { Cases } from '../models/Cases';

export const casesSlice = createSlice({
  name: 'cases',
  initialState: {
    meta: {},
    payload: {},
    error: false
  } as Cases,
  reducers: {
    getCases: (state) => {
      state.payload = {};
      state.error = false;
    }
  }
});

export const { getCases } = casesSlice.actions;
export default casesSlice.reducer;