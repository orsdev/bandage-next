"use client";

import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { calculateDiscountedPrice } from "@/utils";
import { useWishlistDrawer } from "../layout/navbar/use-wishlist";
import { WishlistItem, removeFromWishlist } from "@/store/slices/wishlist";

export const WishlistDrawer = () => {
  const { handleCloseWishlist, isOpenWishlist } = useWishlistDrawer();
  const { wishlists } = useAppSelector((state) => state.wishlists);
  const dispatch = useAppDispatch();

  const isWishlistEmpty = wishlists?.length === 0;

  return (
    <Drawer anchor="right" open={isOpenWishlist} onClose={handleCloseWishlist}>
      <Stack
        direction="column"
        width="100vw"
        maxWidth="400px"
        padding="2.4rem"
        height="100%"
      >
        {/* Header */}
        <WishlistHeader />

        {isWishlistEmpty && <EmptyWishList />}

        {!isWishlistEmpty && (
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
              {wishlists.map((item) => (
                <WishlistItems
                  key={item.title}
                  item={item}
                  handleRemove={() => {
                    dispatch(removeFromWishlist({ id: item.id, wishlists }));
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </Stack>
    </Drawer>
  );
};

const WishlistItems = ({
  item,
  handleRemove,
}: {
  item: WishlistItem;
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
          {calculateDiscountedPrice(
            item.price,
            item.discountPercentage
          )?.toLocaleString()}
        </Typography>
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

const WishlistHeader = () => {
  const { handleCloseWishlist } = useWishlistDrawer();

  return (
    <Box
      height="44px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Typography component="h3" variant="h3" fontWeight={700}>
        My Wishlist
      </Typography>
      <Button
        onClick={handleCloseWishlist}
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

const EmptyWishList = () => (
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
      viewBox="0 0 24 24"
      width="51px"
      height="48px"
    >
      <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" />
    </svg>

    <Typography component="h4" fontSize="2rem" fontWeight={700}>
      Your wishlist is empty.
    </Typography>
  </Box>
);
