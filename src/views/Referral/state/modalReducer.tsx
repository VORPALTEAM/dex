import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';

export const initialState = "none"

export const defaultAction = {
    type: "window",
    payload: "none"
}

export const selectWindow = createAction<string>("window")

export const SpecialReducer = (state = initialState, action = defaultAction) => {
  const newState = action ? action.payload : initialState
  return newState
}
