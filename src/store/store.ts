import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProductsApi } from "./api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;
