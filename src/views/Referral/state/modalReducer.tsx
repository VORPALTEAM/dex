import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';

export const initialState = "none"
export const notifyInitialState = false

export const defaultAction = {
    type: "window",
    payload: "none"
}

export const notifyAction = {
  type: "notify",
  payload: "0"
}

export const selectWindow = createAction<string>("window")
export const notifyCopy = createAction<string>("notify")

export const SpecialReducer = (state = initialState, action = defaultAction) => {

  const newState = action ? ((action.type === "window" && action.payload) ? 
  action.payload : initialState) : initialState
  return newState
}

export const NotifyReducer = (state = notifyInitialState, action = notifyAction) => {
  console.log(state)
  console.log(action)
  const newState = action ? ((action.type === "notify" && action.payload) ? 
  action.payload : notifyInitialState) : notifyInitialState
  return newState
}

export const RootReducer = combineReducers({modals: SpecialReducer, notify: NotifyReducer})

export type RootState = ReturnType<typeof RootReducer>