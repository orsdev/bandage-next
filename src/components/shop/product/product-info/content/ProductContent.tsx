import { Box, Rating, Snackbar, Typography } from "@mui/material";

import { CustomButton } from "@/components/common";
import { ProductColors } from "../colors";
import { MiniButton } from "../../../common";
import { FC, SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { ShoppingCart, addToCart } from "@/store/slices";
import { ProductType } from "@/store/api";
import { calculateDiscountedPrice } from "@/utils";
import { WishlistClass, addToWishlist } from "@/store/slices/wishlist";

interface ProductContent {
  product: ProductType;
}

export const ProductContent: FC<ProductContent> = ({ product }) => {
  const { cart } = useAppSelector((state) => state.cart);
  const { wishlists } = useAppSelector((state) => state.wishlists);

  const dispatch = useAppDispatch();

  // States
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const { title, price, rating, stock, id, discountPercentage } = product || {};

  const handleOpenSnack = () => {
    setOpen(true);
  };

  const handleCloseSnack = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackMessage("");
    setOpen(false);
  };

  return (
    <>
      <Box>
        {/* Name */}
        <Typography
          component="h3"
          variant="h3"
          fontWeight={400}
          color="secondary.dark"
        >
          {title}
        </Typography>

        {/* Rating & Reviews */}
        <Box display="flex" gap="10px" mt="12px">
          <Rating
            name="read-only"
            value={Math.floor(rating)}
            readOnly
            size="large"
            sx={{
              "& .MuiRating-icon": {
                fontSize: "2.5rem",
              },
            }}
          />
          <Typography
            component="p"
            variant="subtitle1"
            fontWeight={700}
            color="info.dark"
          >
            10 Reviews
          </Typography>
        </Box>

        {/* Price */}
        <Typography
          component="h2"
          mt="21px"
          variant="h2"
          fontWeight={700}
          color="secondary.dark"
        >
          $
          {calculateDiscountedPrice(price, discountPercentage).toLocaleString()}
        </Typography>

        {/* Availability */}
        <Box mt="10px" gap="5px" display="flex">
          <Typography
            component="p"
            variant="subtitle1"
            fontWeight={700}
            color="info.dark"
          >
            Availability :
          </Typography>
          <Typography
            component="p"
            variant="subtitle1"
            fontWeight={700}
            color="primary.main"
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            mt: "100px",
            mb: "28px",
            height: "1px",
            width: "100%",
            bgcolor: "secondary.contrastText",
          }}
        />

        {/* Colors */}
        <ProductColors
          colors={["#23A6F0", "#2DC071", "#E77C40", "#252B42"]}
          handleSelectedColor={(color) => {
            alert(`You selected ${color}`);
          }}
        />

        <Box mt="60px" gap="10px" display="flex" alignItems="center">
          <CustomButton
            title="Select Options"
            style={{
              textTransform: "capitalize",
              bgcolor: "primary.main",
              color: "primary.light",
              py: "10px",
              px: "20px",

              "&:hover": {
                bgcolor: "secondary.main",
                borderColor: "secondary.main",
              },
            }}
          />

          {/* Wishlist Button*/}
          <MiniButton
            icon="/images/icons/love.png"
            title="Favorite"
            isDisabled={WishlistClass.isInWishlists(id, wishlists)}
            handleClick={() => {
              dispatch(addToWishlist({ toBeAdded: product, items: wishlists }));
              setSnackMessage(`${title} added to wishlist`);
              handleOpenSnack();
            }}
          />

          {/* Cart Button*/}
          <MiniButton
            icon="/images/icons/wheel.png"
            title="Cart"
            isDisabled={ShoppingCart.isInCart(id, cart)}
            handleClick={() => {
              dispatch(addToCart({ toBeAdded: product, item: cart }));
              setSnackMessage(`${title} added to cart`);
              handleOpenSnack();
            }}
          />
          {/* View Button*/}
          <MiniButton
            icon="/images/icons/view.png"
            title="View Count"
            handleClick={() => {}}
          />
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiPaper-root": {
            justifyContent: "center",
          },
          "& .MuiSnackbarContent-message": {
            fontSize: "1.3rem",
          },
        }}
        message={snackMessage}
      />
    </>
  );
};
