import { useCustomPagination } from "@/hooks";
import { ProductType, ProductsApiInitials } from "@/store/api";
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

    // Retrieve page data from session storage
    const productSessionData = getItemFromSessionStorage<{
      page: string;
    }>(ProductsSessionName);

    if (!productSessionData) {
      page = 2;

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

      /**
       *  Prevents unnecessary skipping of products when session
       * is not empty.
       *
       * Eg. If RTK fetches the products initially and there is page data
       * still in session, when `load more` button is clicked some products
       * will be skipped which will results to not have the total products
       * rendered in the UI.
       *
       * The check reset page when current products length is same with the limit
       *
       *
       */
      if (products.length === ProductsApiInitials.limit) {
        page = 2;
      }

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

    // Calculate the skip value based on the current page
    let skip = handleChangePage(page, total as number);

    //  Call callback
    onPaginating({ skip: skip.toString() });
  };

  return {
    handlePagination,
  };
};
