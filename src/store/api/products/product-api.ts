import { processEnv } from "@/utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApiInitials = {
  limit: 10,
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductsType = {
  products: Array<ProductType>;
  limit: number;
  skip: number;
  total: number;
};

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: processEnv.BASE_ENDPOINT }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsType, string>({
      query: (value) => {
        return `/products?limit=${ProductsApiInitials.limit}&skip=${value}`;
      },
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.products.push(...newItems.products);
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useLazyGetAllProductsQuery } =
  ProductsApi;
