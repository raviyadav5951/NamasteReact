import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
