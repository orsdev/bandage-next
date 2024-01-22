"use client";

import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { QuantityInput } from "../common";
import {
  CartItem,
  ShoppingCart,
  increaseCartQty,
  reduceCartQty,
  removeFromCart,
} from "@/store/slices";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { calculateDiscountedPrice } from "@/utils";
import { useCartDrawer } from "../layout/navbar/use-cart";

export const CartDrawer = () => {
  const { handleCloseCart, isOpenCart } = useCartDrawer();
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const isCartEmpty = cart?.length === 0;

  return (
    <Drawer anchor="right" open={isOpenCart} onClose={handleCloseCart}>
      <Stack
        direction="column"
        width="100vw"
        maxWidth="400px"
        padding="2.4rem"
        height="100%"
      >
        {/* Header */}
        <CartHeader />

        {isCartEmpty && <EmptyCart />}

        {!isCartEmpty && (
          <>
            {/* Items */}
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              rowGap="40px"
              py="30px"
              px="20px"
              sx={{
                overflowY: "auto",
              }}
            >
              {cart?.map((item) => (
                <CartItems
                  key={item.title}
                  item={item}
                  handleRemove={() => {
                    dispatch(removeFromCart({ id: item.id, item: cart }));
                  }}
                  handleDecrement={() => {
                    dispatch(reduceCartQty({ id: item.id, item: cart }));
                  }}
                  handleIncrement={() => {
                    dispatch(increaseCartQty({ id: item.id, item: cart }));
                  }}
                />
              ))}
            </Box>

            {/* Footer */}
            <CartFooter total={ShoppingCart.calculateSubTotal(cart)} />
          </>
        )}
      </Stack>
    </Drawer>
  );
};

const CartItems = ({
  item,
  handleDecrement,
  handleIncrement,
  handleRemove,
}: Omit<QuantityInput, "value"> & {
  item: CartItem;
  handleRemove(): void;
}) => (
  <>
    <Box
      display="flex"
      gap="10px"
      justifyContent="space-between"
      flexDirection={{ base: "column", xs: "row" }}
    >
      <Box display="flex" gap="10px">
        <Box position="relative" width="62px" height="62px">
          <Box
            component="img"
            src={item.thumbnail}
            width="100%"
            height="100%"
            sx={{
              objectFit: "cover",
            }}
          />
          <Button
            onClick={handleRemove}
            sx={{
              minWidth: "auto",
              height: "20px",
              width: "20px",
              bgcolor: "red",
              borderRadius: "50%",
              position: "absolute",
              top: -5,
              left: 0,
              color: "white",
              fontSize: "2rem",

              "&:hover": {
                bgcolor: "red",
              },
            }}
          >
            &times;
          </Button>
        </Box>
        <Typography
          component="p"
          variant="subtitle2"
          fontWeight={600}
          maxWidth="70px"
        >
          {item.title}
        </Typography>
      </Box>

      <Box>
        <Typography component="p" variant="subtitle1" fontWeight={600}>
          $
          {(
            calculateDiscountedPrice(item.price, item.discountPercentage) *
            item.quantity
          )?.toLocaleString()}
        </Typography>
        <Box>
          <QuantityInput
            value={item.quantity?.toString()}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </Box>
      </Box>
    </Box>

    <Divider
      sx={{
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    />
  </>
);

const CartHeader = () => {
  const { handleCloseCart } = useCartDrawer();
  return (
    <Box
      height="44px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography component="h3" variant="h3" fontWeight={700}>
        My Cart
      </Typography>
      <Button
        onClick={handleCloseCart}
        variant="contained"
        sx={{
          fontSize: "4rem",
          height: "30px",
          minWidth: "30px",
          width: "30px",
        }}
      >
        &times;
      </Button>
    </Box>
  );
};

const CartFooter = ({ total }: { total: number }) => {
  return (
    <Box
      height="130px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap="10px"
    >
      <Divider />
      <br />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography component="h4" fontSize="2rem" fontWeight={700}>
          Total
        </Typography>
        <Typography component="h4" fontSize="2rem" fontWeight={700}>
          ${total?.toLocaleString()}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          fontSize: "1.4rem",
          textTransform: "capitalize",
          py: "15px",
        }}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};

const EmptyCart = () => (
  <Box
    mt="40px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    gap="10px"
    flexDirection="column"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="51px"
      height="48px"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      ></path>
    </svg>
    <Typography component="h4" fontSize="2rem" fontWeight={700}>
      Your cart is empty.
    </Typography>
  </Box>
);
