import { useSearchParams, useRouter, usePathname } from "next/navigation";

enum WishlistToggleState {
  OPEN = "open",
}

export const useWishlistDrawer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Get the current state of the wishlist from the query parameter
  const isOpen = searchParams.get("wishlist") as string;

  // Function to open the wishlist
  const handleOpenWishlist = () => {
    // Create a new URLSearchParams instance with the existing parameters
    const optionSearchParams = new URLSearchParams(searchParams.toString());

    // Set the "wishlist" parameter to "open"
    optionSearchParams.set("wishlist", WishlistToggleState.OPEN);

    // Construct the new URL with the updated parameters
    const url = `${pathname}?${optionSearchParams.toString()}`;

    // Navigate to the new URL
    router.replace(url);
  };

  // Function to close the wishlist
  const handleCloseWishlist = () => {
    // Create a new URLSearchParams instance with the existing parameters
    const optionSearchParams = new URLSearchParams(searchParams.toString());

    // Remove the "wishlist" parameter
    optionSearchParams.delete("wishlist");

    // Convert the updated parameters to a string
    const paramsString = optionSearchParams.toString();

    // Construct the new URL with or without parameters
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
    const url = `${pathname}${queryString}`;

    // Navigate to the new URL
    router.replace(url);
  };

  return {
    handleCloseWishlist,
    handleOpenWishlist,
    isOpenWishlist: Boolean(isOpen),
  };
};
