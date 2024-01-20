import { ProductType } from "@/store/api";
import { WishlistItem } from ".";

type AddItemProps = {
  itemToBeAdded: ProductType;
  wishlists: Array<WishlistItem>;
};

export class WishlistClass {
  /**
   * Adds an item to the wishlists.
   *
   * @param {ProductType} itemToBeAdded - The product to be added to the wishlists.
   * @param {Array<WishlistItem>} wishlists - The current items in the wishlists.
   * @returns {Array<WishlistItem>} - The updated wishlists items after adding the new item.
   */
  static addItemToToWishlist = ({ itemToBeAdded, wishlists }: AddItemProps) => {
    // Check if the item is already in the wishlists
    const existingItem = wishlists.find((item) => item.id === itemToBeAdded.id);

    // If the item exist, return wishlists
    if (existingItem) return [...wishlists];

    // If the item doesn't exist, add it to the wishlists
    return [
      ...wishlists,
      {
        ...itemToBeAdded,
      },
    ];
  };

  /**
   * Removes an item from the wishlists.
   *
   * @param {number} itemToBeClearId - The ID of the item to be removed from the wishlists
   * @param {Array<WishlistItem>} wishlist- The current items in the wishlists.
   * @returns {Array<WishlistItem>} - The updated wishlist items after removing the specified item.
   */
  static removeItemFromWishlist = (
    itemToBeClearId: number,
    wishlists: Array<WishlistItem>
  ) => {
    // Filter out the item to be removed from the wishlist
    return wishlists.filter((item) => item.id !== itemToBeClearId);
  };

  /**
   * Check if item in in wishlist
   *
   * @param {number} itemId - The ID of the item to be checked
   * @param {Array<WishlistItem>} wishlists - The current items in the wishlists.
   * @returns {Boolean}
   */
  static isInWishlists = (itemId: number, wishlists: WishlistItem[]) => {
    // Find the item in the wishlists
    const existingItem = wishlists.find((item) => item.id === itemId);
    return Boolean(existingItem);
  };
}
