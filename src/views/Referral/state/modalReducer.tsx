import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';

export const initialState = {
  window: "none"
}

export const selectWindow = createAction<string>("window")

export const SpecialReducer = createReducer(initialState, {
    selectWindow(state) {
       console.log(state)
       return state;
    }
}) 
