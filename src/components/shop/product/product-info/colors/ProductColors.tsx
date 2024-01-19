"use client";

import { Box } from "@mui/material";
import { FC } from "react";

interface ProductColors {
  colors: Array<string>;
  handleSelectedColor(color: string): void;
}
export const ProductColors: FC<ProductColors> = ({
  colors,
  handleSelectedColor,
}) => {
  return (
    <Box gap="10px" display="flex">
      {colors?.map((color) => (
        <Box
          key={color}
          width="30px"
          height="30px"
          borderRadius="50%"
          bgcolor={color}
          onClick={() => handleSelectedColor(color)}
          sx={{
            cursor: "pointer",
            "&:active": {
              transform: "scale(.9)",
              transition: "all .2s",
            },
          }}
        />
      ))}
    </Box>
  );
};
