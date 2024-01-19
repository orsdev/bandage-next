import { usePathname } from "next/navigation";

export const useIsHomepage = () => {
  const pathname = usePathname();

  // Check if the current page is the homepage
  const isHomepage = pathname === "/";

  return isHomepage;
};
