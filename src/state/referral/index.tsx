import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { createReducer, createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const windowNames = {
  none: "none",
  video: "video",
  withdraw: "withdraw",
  note: "note",
  link: "link",
  history: "history"
}


export const actionNames = {
 modal : "referral/modal",
 notify: "referral/notify"
}

export const modalInitialState = windowNames.none
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
    type: actionNames.modal,
    payload: windowNames.none
}

export const notifyAction = {
  type: actionNames.notify,
  payload: "0"
}

export const refSelectWindow = createAction<string>(actionNames.modal)
export const refNotifyCopy = createAction<string>(actionNames.notify)

export const ReferralSlice = createSlice({
  name: "Referral",
  initialState: referralInitialState,
  reducers: {
    modalReducer: (state, action: PayloadAction<string>) => {

      const newModalState : string = action ? ((action.type === actionNames.modal && action.payload) ? 
      action.payload : referralInitialState.modal) : referralInitialState.modal
      const newState : ReferralStateType = {
        modal: newModalState,
        notify: state.notify
      }
      return newState
    },
    notifyReducer: (state, action) => {
      const newNotifyState : string = action ? ((action.type === actionNames.notify && action.payload) ? 
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