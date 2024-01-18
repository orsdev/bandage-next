import { useSearchParams, useRouter, usePathname } from "next/navigation";

enum MenuToggleState {
  OPEN = "open",
}

export const useNavbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Get the current state of the menu from the query parameter
  const isOpen = searchParams.get("menu") as string;

  // Function to open the menu
  const handleOpenMenu = () => {
    // Create a new URLSearchParams instance with the existing parameters
    const optionSearchParams = new URLSearchParams(searchParams.toString());

    // Set the "menu" parameter to "open"
    optionSearchParams.set("menu", MenuToggleState.OPEN);

    // Construct the new URL with the updated parameters
    const url = `${pathname}?${optionSearchParams.toString()}`;

    // Navigate to the new URL
    router.push(url);
  };

  // Function to close the menu
  const handleCloseMenu = () => {
    // Create a new URLSearchParams instance with the existing parameters
    const optionSearchParams = new URLSearchParams(searchParams.toString());

    // Remove the "menu" parameter
    optionSearchParams.delete("menu");

    // Convert the updated parameters to a string
    const paramsString = optionSearchParams.toString();

    // Construct the new URL with or without parameters
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
    const url = `${pathname}${queryString}`;

    // Navigate to the new URL
    router.push(url);
  };

  return {
    handleCloseMenu,
    handleOpenMenu,
    isOpenMenu: Boolean(isOpen),
  };
};
