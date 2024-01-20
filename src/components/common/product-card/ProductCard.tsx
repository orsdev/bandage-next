import { calculateDiscountedPrice } from "@/utils";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

interface ProductCard {
  handleClick(): void;
  thumbnail: string;
  name: string;
  brand: string;
  price: number;
  discount: number;
}

export const ProductCard: FC<ProductCard> = ({
  name,
  thumbnail,
  brand,
  price,
  discount,
  handleClick,
}) => {
  const isValidDiscount = calculateDiscountedPrice(price, discount) > 0;

  return (
    <Card
      style={{
        borderRadius: 0,
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      }}
      onClick={handleClick}
    >
      <CardMedia
        sx={{ width: "100%", height: 238 }}
        image={thumbnail}
        title={name}
      />
      <CardContent
        sx={{
          padding: "25px 25px 35px 25px",
          textAlign: "center",
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          fontWeight={700}
          color="secondary.dark"
        >
          {name}
        </Typography>
        <Typography
          component="p"
          my="10px"
          variant="subtitle1"
          fontWeight={600}
          color="info.main"
          textTransform="capitalize"
        >
          {brand}
        </Typography>
        <Box display="flex" gap="8px" justifyContent="center">
          <Typography
            component="p"
            variant="subtitle1"
            fontWeight={700}
            color="secondary.contrastText"
          >
            $<span>{price?.toLocaleString()}</span>
          </Typography>
          {isValidDiscount && (
            <Typography
              component="p"
              variant="subtitle1"
              fontWeight={700}
              color="secondary.main"
            >
              $<span>{calculateDiscountedPrice(price, discount)}</span>
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
