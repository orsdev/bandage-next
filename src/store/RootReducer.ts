import { combineReducers } from "@reduxjs/toolkit";
import { ProductsApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartSlice from "./slices/cart/cartSlice";
import wishlistSlice from "./slices/wishlist/wishlistSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  wishlists: wishlistSlice,
  [ProductsApi.reducerPath]: ProductsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
