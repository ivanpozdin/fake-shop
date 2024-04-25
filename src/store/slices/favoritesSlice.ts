import { createSlice } from "@reduxjs/toolkit";
import type Product from "../../types/Product";
import ProductAction from "../../types/ProductAction";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    likedProducts: [] as Product[],
  },
  reducers: {
    toggleLikeProduct(state, action: ProductAction) {
      const product = action.payload;

      const exist = state.likedProducts.find((p) => p.id === product.id);

      if (exist)
        state.likedProducts = state.likedProducts.filter(
          (p) => p.id !== product.id
        );
      else state.likedProducts.push(product);
    },
  },
});

export const { toggleLikeProduct } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
