// statusSlice.js

import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: {},
  reducers: {
    setStatus: (state, action) => {
      const { productId, status } = action.payload;
      state[productId] = status;
    },
    markAsApproved:(state,action)=>{
        const { productId } = action.payload;
      state[productId] = 'Approve';
    },
    markAsMissingUrgent: (state, action) => {
      const { productId } = action.payload;
      state[productId] = 'Missing-Urgent';
    },
  },
});

export const { setStatus, markAsMissingUrgent,markAsApproved } = statusSlice.actions;
export default statusSlice.reducer;
