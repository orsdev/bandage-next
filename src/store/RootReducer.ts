import { combineReducers } from "@reduxjs/toolkit";
import { ProductsApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartSlice from "./slices/cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  [ProductsApi.reducerPath]: ProductsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
