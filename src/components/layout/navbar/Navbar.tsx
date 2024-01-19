"use client";

import { Box, Stack, Typography } from "@mui/material";
import { DesktopMenu } from "./desktop/Desktop";
import { MobileMenu } from "./mobile";
import { useIsHomepage } from "@/hooks";
import { DefaultWidth } from "@/utils";
import Link from "next/link";

export const Navbar = () => {
  const isHomePage = useIsHomepage();

  return (
    <Box
      position={{ base: "sticky", md: "relative" }}
      top={0}
      left={0}
      bgcolor="primary.light"
      zIndex="fab"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px="2.4rem"
        py="29px"
        bgcolor="primary.light"
        maxWidth={{ lg: isHomePage ? DefaultWidth.xl : DefaultWidth.md }}
        width="100%"
        mx="auto"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            component="p"
            variant="h2"
            fontWeight={700}
            color="secondary.dark"
          >
            Bandage
          </Typography>
        </Link>

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
