"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Social = [
  { icon: "ig-light.png", url: "#", name: "Instagram" },
  { icon: "tube-light.png", url: "#", name: "Youtube" },
  { icon: "fb-light.png", url: "#", name: "Facebook" },
  { icon: "twitter-light.png", url: "#", name: "Twitter" },
];

export const InfoBanner = () => {
  return (
    <Stack
      display={{ xs: "none", lg: "flex" }}
      direction="row"
      height="46px"
      bgcolor="secondary.main"
      justifyContent="space-between"
      alignItems="center"
      px="2.4rem"
      color="primary.light"
    >
      <Stack gap="30px" alignItems="center" direction="row">
        {/* Phone */}
        <Box display="flex" alignItems="center" gap="5px">
          <Image
            src="/images/icons/phone-light.png"
            alt="Phone"
            width={16}
            height={16}
            style={{
              width: "16px",
              height: "16px",
            }}
          />
          <Box
            component="a"
            href="tel:+2255550118"
            color="primary.light"
            fontWeight={700}
            sx={{
              textDecoration: "none",
            }}
          >
            (225) 555-0118
          </Box>
        </Box>

        {/* Mail */}
        <Box display="flex" alignItems="center" gap="5px">
          <Image
            src="/images/icons/inbox.png"
            alt="Mail"
            width={16}
            height={16}
            style={{
              width: "16px",
              height: "16px",
            }}
          />
          <Box
            component="a"
            href="mailto:michelle.rivera@example.com"
            color="primary.light"
            fontWeight={700}
            sx={{
              textDecoration: "none",
            }}
          >
            michelle.rivera@example.com
          </Box>
        </Box>
      </Stack>

      <Typography fontWeight={700} variant="subtitle1">
        Follow Us and get a chance to win 80% off
      </Typography>

      {/* Social */}
      <Stack gap="5px" alignItems="center" direction="row">
        <Typography fontWeight={700} variant="subtitle1">
          Follow Us :
        </Typography>
        <Box display="flex" alignItems="center" position="relative" top="2px">
          {Social.map(({ name, url, icon }) => (
            <Box
              key={name}
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              fontWeight={700}
              sx={{
                textDecoration: "none",
              }}
            >
              <Image
                src={`/images/icons/${icon}`}
                alt="Mail"
                width={30}
                height={30}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
