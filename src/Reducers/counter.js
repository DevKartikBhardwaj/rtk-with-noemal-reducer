import { createAction, createReducer } from "@reduxjs/toolkit";

//action creators
export const increment = createAction("counter/increment");
export const decrement = createAction("counter/decrement");
export const incrementByAmount = createAction("counter/incrementByAmount");

const intialState = { value: 0 };

//reducers
export const counterReducer = createReducer(intialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++;
    })
    .addCase(decrement, (state, action) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    });
});
