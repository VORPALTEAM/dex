import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { SpecialReducer, RootReducer } from './modalReducer';

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
  reducer: RootReducer,
});

export default store;