"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

export const CenteredContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box px="2.4rem" maxWidth={{ lg: "1146px" }} width="100%" mx="auto">
      {children}
    </Box>
  );
};
