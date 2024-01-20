"use client";

import {
  CustomButton,
  ProductCard,
  ProductCardSkeleton,
} from "@/components/common";
import { useLazyGetAllProductsQuery } from "@/store/api";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFeaturedProduct } from "./use-featured-products";
import { useEffect } from "react";

export const FeaturedProducts = () => {
  const router = useRouter();

  const [trigger, result] = useLazyGetAllProductsQuery();

  const { data, isLoading, isFetching, error } = result || {};
  const { products, total } = data || { total: 1, products: [] };

  const { handlePagination } = useFeaturedProduct({
    total,
    products,
  });

  const isLastItem = products.length === total;

  useEffect(() => {
    // Fetch products api
    trigger("", true);
  }, []);

  if (error && !data) return <></>;

  return (
    <Box
      component="section"
      mt="160px"
      px={{ base: "40px", md: "30px" }}
      width="100%"
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          component="p"
          variant="h3"
          fontWeight={400}
          color="info.main"
        >
          Featured Products
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          mt="5px"
          fontWeight={700}
          color="secondary.dark"
          textTransform="uppercase"
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={400}
          color="info.main"
        >
          Problems trying to resolve the conflict between
        </Typography>
      </Box>

      {/* Products */}
      <Box mt="56px">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "30px",
            rowGap: "16px",
          }}
        >
          {/* Loading Card */}
          {((isLoading && !error) || (!data && !error)) && (
            <ProductCardSkeleton totalSkeleton={10} />
          )}

          {/* Products */}
          {data &&
            products?.map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                brand={product.brand}
                price={product.price}
                discount={product.discountPercentage}
                thumbnail={product.thumbnail}
                handleClick={() => {
                  router.push(`/shop/${product.id}`);
                }}
              />
            ))}
        </Box>

        {products && !isLastItem && (
          <Box display="flex" justifyContent="center" mt="50px">
            <CustomButton
              title="Load More Product"
              isLoading={isLoading || isFetching}
              handleClick={() => {
                handlePagination(({ skip }) => {
                  // Refetch products api
                  trigger(skip);
                });
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
