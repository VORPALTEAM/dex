import { configureStore } from '@reduxjs/toolkit';
import ModalAllReducers, { SpecialReducer } from './modalReducer';

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
  reducer: SpecialReducer,
});

export default store;