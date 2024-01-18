"use client";

import { CustomButton, ProductCard } from "@/components/common";
import { Box, Typography } from "@mui/material";

export const FeaturedProducts = () => {
  return (
    <Box
      component="section"
      mt="80px"
      px={{ base: "40px", md: "80px" }}
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
          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
          />

          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
          />
          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
          />
          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
          />
          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
          />
          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
          />
          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
          />
        </Box>

        <Box display="flex" justifyContent="center" mt="50px">
          <CustomButton title="Load More Product" isLoading={false} />
        </Box>
      </Box>
    </Box>
  );
};
