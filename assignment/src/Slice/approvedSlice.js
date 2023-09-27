// approvedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: {}, // Maintain status for each row by index
};

const approvedSlice = createSlice({
  name: 'approved',
  initialState,
  reducers: {
    toggleStatus: (state, action) => {
      const { itemId, status } = action.payload;
      state.status[itemId] = status;
    },
  },
});

export const { toggleStatus } = approvedSlice.actions;
export default approvedSlice.reducer;
