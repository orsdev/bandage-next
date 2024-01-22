import { useSearchParams, useRouter, usePathname } from "next/navigation";

enum CartToggleState {
  OPEN = "open",
}

export const useCartDrawer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Get the current state of the cart from the query parameter
  const isOpen = searchParams.get("cart") as string;

  // Function to open the cart
  const handleOpenCart = () => {
    // Create a new URLSearchParams instance with the existing parameters
    const optionSearchParams = new URLSearchParams(searchParams.toString());

    // Set the "cart" parameter to "open"
    optionSearchParams.set("cart", CartToggleState.OPEN);

    // Construct the new URL with the updated parameters
    const url = `${pathname}?${optionSearchParams.toString()}`;

    // Navigate to the new URL
    router.replace(url);
  };

  // Function to close the cart
  const handleCloseCart = () => {
    // Create a new URLSearchParams instance with the existing parameters
    const optionSearchParams = new URLSearchParams(searchParams.toString());

    // Remove the "cart" parameter
    optionSearchParams.delete("cart");

    // Convert the updated parameters to a string
    const paramsString = optionSearchParams.toString();

    // Construct the new URL with or without parameters
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
    const url = `${pathname}${queryString}`;

    // Navigate to the new URL
    router.replace(url);
  };

  return {
    handleCloseCart,
    handleOpenCart,
    isOpenCart: Boolean(isOpen),
  };
};
