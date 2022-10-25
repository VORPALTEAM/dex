import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';

export const initialState = {
  window: "none"
}

export const selectWindow = createAction<string>("window")

export const SpecialReducer = createReducer(initialState, {
    selectWindow(state) {
       console.log(state)
       return state
    }
}) 

console.log(selectWindow)

const ModalRefReducer = (state = initialState, action) => {
  return state;
};

const ModalAllReducers = combineReducers({
  ModalRefReducer
})

export type RootState = ReturnType<typeof SpecialReducer>


export default ModalAllReducers