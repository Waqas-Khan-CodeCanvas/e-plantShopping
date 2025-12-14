import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // { plantId: { ...plant, quantity } }
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { ...plant, quantity: 1 };
        state.totalQuantity += 1;
        state.totalPrice += plant.price;
      }
    },
    increaseQty(state, action) {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += state.items[id].price;
    },
    decreaseQty(state, action) {
      const id = action.payload;
      if (state.items[id].quantity === 1) return;
      state.items[id].quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= state.items[id].price;
    },
    removeItem(state, action) {
      const id = action.payload;
      state.totalQuantity -= state.items[id].quantity;
      state.totalPrice -=
        state.items[id].quantity * state.items[id].price;
      delete state.items[id];
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
