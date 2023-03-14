import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';

export const initialState = "none"
export const notifyInitialState = false
const account = "0x0000000000000000000000"
const referralIds : string[] = []

export type stringAction = {
   type: string,
   payload: string
}

export type stringArrAction = {
  type: string,
  payload: string[]
}

export const selectWindow = createAction<string>("window")
export const notifyCopy = createAction<string>("notify")
export const setAccount = createAction<string>("account")
export const setIds = createAction<string[]>("ids")

export const SpecialReducer = (state = initialState, action : stringAction) => {

  const newState = action ? ((action.type === "window" && action.payload) ? 
  action.payload : initialState) : initialState
  return newState
}

export const NotifyReducer = (state = notifyInitialState, action : stringAction) => {

  const newState = action ? ((action.type === "notify" && action.payload) ? 
  action.payload : notifyInitialState) : notifyInitialState
  return newState
}

export const AccountReducer = (state = account, action : stringAction) => {

  switch(action.type) {
    case "account" : 
      return (action.payload) ? action.payload : state
    default :
      return state
  }
}

export const UpdateRefLinks = (state = referralIds, action : stringArrAction) => {

  switch(action.type) {
    case "ids" : 
      return (action.payload) ? action.payload : state
    default :
      return state
  }
}

export const RootReducer = combineReducers({
  modals: SpecialReducer, 
  notify: NotifyReducer, 
  account: AccountReducer,
  refLinks: UpdateRefLinks
})

export type RootState = ReturnType<typeof RootReducer>