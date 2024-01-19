import { ProductCard } from "@/components/common";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const BestProducts = () => {
  const router = useRouter();

  return (
    <Box mt="96px">
      <Typography
        component="h2"
        variant="h2"
        fontWeight={700}
        color="secondary.dark"
      >
        BESTSELLER PRODUCTS
      </Typography>

      {/* Divider */}
      <Box
        sx={{
          my: "24px",
          height: "1px",
          width: "100%",
          bgcolor: "info.100",
        }}
      />

      {/* Products */}
      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "30px",
            rowGap: "24px",
          }}
        >
          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
            handleClick={() => {
              router.push(`/shop/${1}`);
            }}
          />

          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
            handleClick={() => {
              router.push(`/shop/${2}`);
            }}
          />

          <ProductCard
            name="Iphone"
            brand="English Department"
            price={500}
            discount={100}
            thumbnail="/images/products/product-1.png"
            handleClick={() => {
              router.push(`/shop/${3}`);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
