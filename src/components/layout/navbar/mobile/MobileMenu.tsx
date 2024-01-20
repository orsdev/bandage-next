"use client";

import { Box, Fade, Stack } from "@mui/material";
import { Menu } from "../common/Menu";
import { AuthButton } from "../common/AuthButton";
import { SearchButton } from "../common/SearchButton";
import { CartButton } from "../common/CartButton";
import { WishlistButton } from "../common/WishlistButton";
import { ToggleIcon } from "./ToggleIcon";
import { useNavbar } from "../use-navbar";

export const MobileMenu = () => {
  const { isOpenMenu, handleCloseMenu } = useNavbar();

  return (
    <Box width="100%" position="relative">
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap="20px"
      >
        <Box display={{ base: "none", sm: "block" }}>
          <AuthButton />
        </Box>
        <SearchButton />
        <CartButton />
        <Box display={{ base: "none", xs: "block" }}>
          <WishlistButton />
        </Box>

        <ToggleIcon />
      </Stack>

      {/* Backdrop */}
      {isOpenMenu && (
        <Box
          onClick={handleCloseMenu}
          aria-label="backdrop"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            top: 70,
            left: 0,
            position: "fixed",
            width: "100%",
            height: "100%",
            bgcolor: "transparent",
          }}
        />
      )}

      <Fade in={isOpenMenu}>
        <Box
          sx={{
            position: "fixed",
            zIndex: (theme) => theme.zIndex.drawer + 2,
            top: 70,
            left: 0,
            width: "100%",
            bgcolor: "primary.light",
            padding: "40px 20px",
            boxShadow: "0 2px 5px 0 rgba(20,47.00000000000007,126,.13)",
          }}
        >
          <Stack direction="column" gap="25px" alignItems="center">
            <Menu />
            <Box display={{ base: "block", sm: "none" }}>
              <AuthButton />
            </Box>
            <Box display={{ base: "block", xs: "none" }}>
              <WishlistButton />
            </Box>
          </Stack>
        </Box>
      </Fade>
    </Box>
  );
};
