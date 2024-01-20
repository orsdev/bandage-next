import { ProductType } from "@/store/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishlistClass } from "./wishlist.utils";

export type WishlistItem = ProductType;

type WishlistState = {
  wishlists: Array<WishlistItem>;
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlists: [],
  } as WishlistState,
  reducers: {
    addToWishlist: (
      state: WishlistState,
      action: PayloadAction<{
        toBeAdded: ProductType;
        items: WishlistItem[];
      }>
    ) => {
      state.wishlists = WishlistClass.addItemToToWishlist({
        itemToBeAdded: action.payload.toBeAdded,
        wishlists: action.payload.items,
      });
    },
    removeFromWishlist: (
      state: WishlistState,
      action: PayloadAction<{
        id: number;
        wishlists: Array<WishlistItem>;
      }>
    ) => {
      state.wishlists = WishlistClass.removeItemFromWishlist(
        action.payload.id,
        state.wishlists
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
