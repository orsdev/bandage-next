"use client";

import { Box } from "@mui/material";
import { ProductCarousel } from "./carousel";
import { ProductContent } from "./content";
import { FC } from "react";
import { ProductType } from "@/store/api";

interface ProductInfo {
  product: ProductType;
}

export const ProductInfo: FC<ProductInfo> = ({ product }) => {
  const { images, title } = product || {};

  return (
    <Box mt="34px">
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: { md: "506px 1fr" },
          gap: { base: "30px", md: "44px" },
        }}
      >
        <Box
          sx={{
            overflowX: "hidden",
          }}
        >
          <ProductCarousel name={title} images={images || []} />
        </Box>
        <Box>
          <ProductContent product={product} />
        </Box>
      </Box>
    </Box>
  );
};
