"use client";

import { useIsHomepage } from "@/hooks";
import { DefaultWidth } from "@/utils";
import { Box, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface CenteredContainer {
  children: ReactNode;
  style?: SxProps | undefined;
}

export const CenteredContainer: FC<CenteredContainer> = ({
  children,
  style = {},
}) => {
  const isHomepage = useIsHomepage();

  return (
    <Box
      px="2.4rem"
      maxWidth={{ lg: isHomepage ? DefaultWidth.lg : DefaultWidth.md }}
      sx={{
        ...style,
      }}
      width="100%"
      mx="auto"
    >
      {children}
    </Box>
  );
};
