"use client";

import { Box, Stack } from "@mui/material";
import {
  AuthButton,
  CartButton,
  SearchButton,
  WishlistButton,
  Menu,
} from "../common";

export const DesktopMenu = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      {/* Menu */}
      <Stack direction="row" gap="25px" display={{ base: "none", md: "flex" }}>
        <Menu />
      </Stack>

      {/* Others */}
      <Box display="flex" gap="20px" alignItems="center">
        <AuthButton />
        <SearchButton />
        <CartButton />
        <WishlistButton />
      </Box>
    </Stack>
  );
};
