import { createSlice } from "@reduxjs/toolkit";
import type Product from "../../types/Product";
import ProductAction from "../../types/ProductAction";

interface QuantityAction {
  payload: {
    product: Product;
    newQuantity: number;
  };
  type: string;
}

const cartSlice = createSlice({
  name: "favorites",
  initialState: {
    cartProducts: [] as Product[],
  },
  reducers: {
    toggleCartProduct(state, action: ProductAction) {
      const product = action.payload;

      const exist = state.cartProducts.find((p) => p.id === product.id);

      if (exist)
        state.cartProducts = state.cartProducts.filter(
          (p) => p.id !== product.id
        );
      else state.cartProducts.push(product);
    },

    updateQuantity(state, action: QuantityAction) {
      const { product, newQuantity } = action.payload;

      const exist = state.cartProducts.find((p) => p.id === product.id);
      if (!exist) {
        state.cartProducts.push(product);
      }

      const i = state.cartProducts.findIndex((p) => product.id === p.id);
      state.cartProducts[i] = { ...product, quantity: newQuantity };
    },
  },
});

export const { toggleCartProduct, updateQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
