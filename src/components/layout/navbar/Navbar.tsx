"use client";

import { Box, Stack, Typography } from "@mui/material";
import { DesktopMenu } from "./desktop/Desktop";
import { MobileMenu } from "./mobile";

export const Navbar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px="2.4rem"
        py="29px"
        bgcolor="primary.light"
        maxWidth={{ lg: "85%" }}
        width="100%"
        mx="auto"
      >
        {/* Logo */}
        <Typography
          component="h2"
          variant="h2"
          fontWeight={700}
          color="secondary.dark"
        >
          Bandage
        </Typography>

        {/* Desktop Menu */}
        <Box
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
          sx={{
            ml: { base: "50px", xl: "119px" },
          }}
        >
          <DesktopMenu />
        </Box>

        {/* Mobile Menu */}
        <Box display={{ base: "flex", md: "none" }} flexGrow={1}>
          <MobileMenu />
        </Box>
      </Stack>
    </Box>
  );
};
