import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';

export const initialState = "none"
export const notifyInitialState = false
const account = "0x0000000000000000000000"

export const defaultAction = {
    type: "window",
    payload: "none"
}

export const notifyAction = {
  type: "notify",
  payload: "0"
}

export const accountAction = {
  type: "notify",
  payload: "0x0000000000000000"
}

export const selectWindow = createAction<string>("window")
export const notifyCopy = createAction<string>("notify")
export const setAccount = createAction<string>("account")

export const SpecialReducer = (state = initialState, action = defaultAction) => {

  const newState = action ? ((action.type === "window" && action.payload) ? 
  action.payload : initialState) : initialState
  return newState
}

export const NotifyReducer = (state = notifyInitialState, action = notifyAction) => {

  const newState = action ? ((action.type === "notify" && action.payload) ? 
  action.payload : notifyInitialState) : notifyInitialState
  return newState
}

export const AccountReducer = (state = account, action = accountAction) => {

  switch(action.type) {
    case "account" : 
      return (action.payload) ? action.payload : state
    default :
      return state
  }
}

export const RootReducer = combineReducers({
  modals: SpecialReducer, 
  notify: NotifyReducer, 
  account: AccountReducer 
})

export type RootState = ReturnType<typeof RootReducer>