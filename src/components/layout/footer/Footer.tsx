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

export const Footer = () => {
  return (
    <Box component="footer">
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        bgcolor="primary.contrastText"
        flexDirection={{ base: "column", sm: "row" }}
        rowGap="20px"
        py="53px"
        sx={{
          px: { base: "40px", sm: "90px", md: "195px" },
        }}
      >
        {/* Logo */}
        <Typography
          component="h2"
          variant="h2"
          mt="5px"
          fontWeight={700}
          color="secondary.dark"
        >
          Bandage
        </Typography>

        {/* Social */}
        <FooterSocial />
      </Box>

      <Box
        bgcolor="primary.light"
        sx={{
          px: { base: "40px", sm: "90px", md: "195px" },
        }}
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
          <Box width="320px">
            <Subscribe />
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Box
        bgcolor="#FAFAFA"
        py="25px"
        textAlign={{ base: "center", sm: "left" }}
        sx={{
          px: { base: "40px", sm: "90px", md: "195px" },
        }}
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
