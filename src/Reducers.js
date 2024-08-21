import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction('increment')
const decrement = createAction('decrement')
const incrementByValue = createAction('incrementByValue')

const initialState = {
    counter: 0
}

export const customReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.counter++;
        })
        .addCase(decrement, (state, action) => {
            state.counter--;
        })
        .addCase(incrementByValue, (state, action) => {
            state.counter = state.counter + action.payload;
        })
}
)