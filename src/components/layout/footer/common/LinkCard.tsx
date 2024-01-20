"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

interface LinkCard {
  title: string;
  routes: Array<{ name: string; pathname: string }>;
}

export const LinkCard: FC<LinkCard> = ({ title, routes }) => {
  return (
    <Box>
      <Typography
        component="h6"
        variant="h4"
        mt="5px"
        fontWeight={700}
        color="secondary.dark"
      >
        {title}
      </Typography>
      <Stack gap="10px" mt="20px">
        {routes.map((item) => (
          <Box key={item.name}>
            <Link
              href={item.pathname}
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                component="p"
                variant="subtitle1"
                fontWeight={700}
                color="info.main"
              >
                {item.name}
              </Typography>
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
