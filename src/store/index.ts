import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./slices/favoritesSlice";
import {
  cartReducer,
  toggleCartProduct,
  updateQuantity,
} from "./slices/cartSlice";

import { toggleLikeProduct } from "./slices/favoritesSlice";
import { productsApi } from "./api/productsApi";
import { useFetchProductsQuery } from "./api/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  store,
  toggleCartProduct,
  updateQuantity,
  toggleLikeProduct,
  useFetchProductsQuery,
};
export type RootState = ReturnType<typeof store.getState>;
