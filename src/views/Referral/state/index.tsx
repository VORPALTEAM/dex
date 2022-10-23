import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalReducer';

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
  reducer: modalReducer,
});

export default store;