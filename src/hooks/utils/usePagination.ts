import { ProductsApiInitials } from "@/store/api";

export const useCustomPagination = () => {
  /**
   * Calculates the skip value based on the current page and total items.
   *
   * @param {number} currentPage - The current page number.
   * @param {number} total - The total number of items.
   * @returns {number} - The calculated skip value for paginating data.
   */
  const handleChangePage = (currentPage: number, total: number) => {
    // Ensure page is at least 1
    let page = currentPage <= 0 ? 1 : currentPage;

    // Check if the last item is reached
    if (isLastItemReached(page, total))
      return total - ProductsApiInitials.limit;

    // Calculate the skip value based on the current page
    return (page - 1) * ProductsApiInitials.limit;
  };

  /**
   * Checks if the last item is reached based on the current page and total items.
   *
   * @param {number} currentPage - The current page number.
   * @param {number} total - The total number of items.
   * @returns {boolean} - True if the last item is reached, false otherwise.
   */
  const isLastItemReached = (currentPage: number, total: number) => {
    // Ensure both currentPage and total are numbers
    if (typeof currentPage !== "number" || typeof total !== "number")
      return false;

    // Calculate the total number of pages
    const totalPages = Math.ceil(total / ProductsApiInitials.limit);

    // Check if the current page is the last page
    return currentPage >= totalPages;
  };

  return {
    isLastItemReached,
    handleChangePage,
  };
};
