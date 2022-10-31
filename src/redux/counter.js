import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    action: '',
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.action = 'inc'
    },
    decrement: (state) => {
      state.count -= 1;
      state.action = 'dec'
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
