"use client";

import { Box, Typography } from "@mui/material";
import { FooterSocial } from "./social";
import {
  CompanyInfoMockData,
  FeaturesMockData,
  LegalMockData,
  ResourcesMockData,
} from "./footer.util";
import { LinkCard } from "./common/LinkCard";
import { Subscribe } from "./subscribe";
import { useIsHomepage } from "@/hooks";
import { DefaultWidth } from "@/utils";
import Link from "next/link";

const onDefaultPadding = (is_home: boolean) =>
  is_home
    ? { base: "40px", sm: "90px", md: "195px" }
    : { base: "2.4rem", lg: 0 };

export const Footer = () => {
  const isHomepage = useIsHomepage();

  return (
    <Box component="footer">
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        bgcolor="primary.contrastText"
        flexDirection={{ base: "column", sm: "row" }}
        maxWidth={{ lg: isHomepage ? "auto" : DefaultWidth.md }}
        rowGap="20px"
        py="53px"
        mx="auto"
        px={onDefaultPadding(isHomepage)}
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

        {/* Social */}
        <FooterSocial />
      </Box>

      <Box
        bgcolor="primary.light"
        maxWidth={{ lg: isHomepage ? "auto" : DefaultWidth.md }}
        mx="auto"
        px={onDefaultPadding(isHomepage)}
      >
        {/* Divider */}
        <Box
          sx={{
            mb: "50px",
            height: "1px",
            width: "100%",
            background: "#E6E6E6",
          }}
        />

        {/* Links and form */}
        <Box
          sx={{
            display: "flex",
            gap: "63px",
            pb: "50px",
            rowGap: "30px",
            flexWrap: "wrap",
          }}
        >
          <Box flexGrow={1}>
            {/* Company info */}
            {CompanyInfoMockData.map((item) => (
              <LinkCard
                key={item.title}
                routes={item.routes}
                title={item.title}
              />
            ))}
          </Box>

          {/* Legal */}
          <Box flexGrow={1}>
            {LegalMockData.map((item) => (
              <LinkCard
                key={item.title}
                routes={item.routes}
                title={item.title}
              />
            ))}
          </Box>

          {/* Features */}
          <Box flexGrow={1}>
            {FeaturesMockData.map((item) => (
              <LinkCard
                key={item.title}
                routes={item.routes}
                title={item.title}
              />
            ))}
          </Box>

          {/* Resources */}
          <Box flexGrow={1}>
            {ResourcesMockData.map((item) => (
              <LinkCard
                key={item.title}
                routes={item.routes}
                title={item.title}
              />
            ))}
          </Box>

          {/* Subscribe form */}
          <Box width={isHomepage ? "320px" : "290px"}>
            <Subscribe />
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Box
        bgcolor="#FAFAFA"
        py="25px"
        textAlign={{ base: "center", sm: "left" }}
        maxWidth={{ lg: isHomepage ? "auto" : DefaultWidth.md }}
        mx="auto"
        px={onDefaultPadding(isHomepage)}
      >
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={700}
          color="info.main"
        >
          Made With Love By Finland All Right Reserved
        </Typography>
      </Box>
    </Box>
  );
};
