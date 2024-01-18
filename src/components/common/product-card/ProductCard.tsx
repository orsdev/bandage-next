import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

interface ProductCard {
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
}) => {
  return (
    <Card
      style={{
        borderRadius: 0,
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
      }}
    >
      <CardMedia sx={{ height: 238 }} image={thumbnail} title={name} />
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
            $<span>{price}</span>
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            fontWeight={700}
            color="secondary.main"
          >
            $<span>{discount}</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
