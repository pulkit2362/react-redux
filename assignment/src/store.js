// Create a Redux store using Redux Toolkit
// store.js
import { configureStore } from '@reduxjs/toolkit';
import approvedReducer from './Slice/approvedSlice';

const store = configureStore({
  reducer: {
    approved: approvedReducer,
  },
});

export default store;
