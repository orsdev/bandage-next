import { useCustomPagination } from "@/hooks";
import { ProductType } from "@/store/api";
import { getItemFromSessionStorage } from "@/utils";

type UseFeaturedProduct = {
  total: number;
  products: Array<ProductType>;
};

type OnPaginating = (value: { skip: string }) => void;

const ProductsSessionName = "all-products";

export const useFeaturedProduct = ({
  products = [],
  total,
}: UseFeaturedProduct) => {
  const { handleChangePage, isLastItemReached } = useCustomPagination();

  /**
   *
   * @param {OnPaginating} onPaginating - The callback function to be called when paginating.
   */

  const handlePagination = (onPaginating: OnPaginating) => {
    let page;
    let skip;

    // Retrieve page data from session storage
    const productSessionData = getItemFromSessionStorage<{
      page: string;
    }>(ProductsSessionName);

    if (!productSessionData) {
      page = 2;
      skip = handleChangePage(page, total as number);

      // Store the current page in session storage
      sessionStorage.setItem(
        ProductsSessionName,
        JSON.stringify({
          page,
        })
      );
    } else {
      const pageString = productSessionData.page;
      page = parseInt(pageString as string);

      page += 1;
      skip = handleChangePage(page, total as number);

      // Remove session storage if last item is reached and all items are fetched
      if (isLastItemReached(page, total) && products.length < total) {
        sessionStorage.removeItem(ProductsSessionName);
      } else {
        // Update the current page in session storage
        sessionStorage.setItem(
          ProductsSessionName,
          JSON.stringify({
            page,
          })
        );
      }
    }

    //  Call callback
    onPaginating({ skip: skip.toString() });
  };

  return {
    handlePagination,
  };
};
