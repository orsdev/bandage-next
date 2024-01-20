"use client";

import { Box } from "@mui/material";
import { ProductCarousel } from "./carousel";
import { ProductContent } from "./content";
import { FC } from "react";

interface ProductInfo {
  images: Array<string>;
  name: string;
  price: number;
  rating: number;
  stock: number;
  id: number;
}

export const ProductInfo: FC<ProductInfo> = ({
  images,
  name,
  price,
  rating,
  stock,
  id,
}) => {
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
          <ProductCarousel name={name} images={images || []} />
        </Box>
        <Box>
          <ProductContent
            id={id}
            name={name}
            price={price}
            rating={rating}
            stock={stock}
          />
        </Box>
      </Box>
    </Box>
  );
};
