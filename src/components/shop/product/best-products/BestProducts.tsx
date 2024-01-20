import { ProductCard, ProductCardSkeleton } from "@/components/common";
import { useGetAllProductsQuery } from "@/store/api";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const BestProducts = () => {
  const { isLoading, error, data } = useGetAllProductsQuery("2");
  const { products } = data || {};

  const router = useRouter();

  if (error) return <></>;

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
          {/* Loading Card */}
          {isLoading && !data && <ProductCardSkeleton totalSkeleton={10} />}

          {/* Products */}
          {data &&
            products?.slice(0, 8).map((product) => (
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
      </Box>
    </Box>
  );
};
