"use client";

import { CenteredContainer } from "@/components";
import { Breadcrumb, Crumbs } from "@/components/common";
import { Brands } from "@/components/shop/brands";
import {
  BestProducts,
  ProductInfo,
  ProductInfoSkeleton,
} from "@/components/shop/product";
import { ProductOverview } from "@/components/shop/product/product-overview/ProductOverview";
import { useGetSingleProductQuery } from "@/store/api";
import { Box } from "@mui/material";
import { redirect, useParams } from "next/navigation";

const CrumbsData = [
  { name: "Home", route: "/", isDisabled: false },
  { name: "Shop", route: "/shop", isDisabled: true },
] as Crumbs;

export default function Product() {
  const params = useParams();
  const { id } = params || { id: "" };

  const { data, error, isLoading } = useGetSingleProductQuery(id as string);
  const { images, title, price, stock, rating } = data || {};

  if (error) return redirect("/");

  return (
    <>
      <CenteredContainer>
        <Box mt="57px">
          <Breadcrumb crumbs={CrumbsData} />
        </Box>

        <Box px={{ sm: "20vw", md: 0 }}>
          {/* Product Info Skeleton */}
          {isLoading && !data && <ProductInfoSkeleton />}
          {/* Product Info */}
          {data && (
            <ProductInfo
              images={images as Array<string>}
              name={title as string}
              price={price as number}
              rating={rating as number}
              stock={stock as number}
              id={data?.id as number}
            />
          )}

          {/* Product Overview */}
          {data && <ProductOverview />}

          {/* Best Product */}
          <BestProducts />

          {/* Brands */}
          <Brands />
        </Box>
      </CenteredContainer>
    </>
  );
}
