"use client";

import { Box } from "@mui/material";
import { ProductCarousel } from "./carousel";
import { ProductContent } from "./content";

export const ProductInfo = () => {
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
          <ProductCarousel
            name=""
            images={[
              "https://cdn.dummyjson.com/product-images/2/1.jpg",
              "https://cdn.dummyjson.com/product-images/2/2.jpg",
              "https://cdn.dummyjson.com/product-images/2/3.jpg",
              "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
            ]}
          />
        </Box>
        <Box>
          <ProductContent />
        </Box>
      </Box>
    </Box>
  );
};
