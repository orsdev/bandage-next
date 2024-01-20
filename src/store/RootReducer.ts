import { combineReducers } from "@reduxjs/toolkit";
import { ProductsApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  [ProductsApi.reducerPath]: ProductsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
