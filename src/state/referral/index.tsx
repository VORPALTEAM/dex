import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, createSlice, combineReducers } from '@reduxjs/toolkit';


export const modalInitialState = "none"
export const notifyInitialState = "0"


export type ReferralStateType = {
  modal: string,
  notify: string
}

export const referralInitialState: ReferralStateType = {
  modal: modalInitialState,
  notify: notifyInitialState
}


export const modalRefAction = {
    type: "window",
    payload: "none"
}

export const notifyAction = {
  type: "notify",
  payload: "0"
}

export const refSelectWindow = createAction<string>("window")
export const refNotifyCopy = createAction<string>("notify")

export const ReferralSlice = createSlice({
  name: "Referral",
  initialState: referralInitialState,
  reducers: {
    modalReducer: (state, action) => {
      const newModalState : string = action ? ((action.type === "window" && action.payload) ? 
      action.payload : referralInitialState.modal) : referralInitialState.modal
      const newState : ReferralStateType = {
        modal: newModalState,
        notify: state.notify
      }
      return newState
    },
    notifyReducer: (state, action) => {
      const newNotifyState : string = action ? ((action.type === "notify" && action.payload) ? 
      action.payload : referralInitialState.notify) : referralInitialState.notify
      const newState : ReferralStateType = {
        modal: state.modal,
        notify: newNotifyState
      }
      return newState
    }
  }
})

export default ReferralSlice.reducer