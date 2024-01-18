"use client";

import { Box } from "@mui/material";
import { GridItem } from "./GridItem";

export const Hero = () => {
  return (
    <Box
      display="grid"
      mt={{ base: "50px", md: "80px" }}
      sx={{
        gap: "16px",
        gridTemplateColumns: { sm: "repeat(2,1fr)" },
        gridTemplateRows: { sm: "308px 308px" },
      }}
    >
      <GridItem
        title="Furniture"
        backgroundImage="cover-1.png"
        buttonText="Read More"
        info="5 Items"
        style={{
          gridRow: { sm: "1/2", md: "1/-1" },
          gridColumn: { sm: "1/2" },
          minHeight: { base: 300, sm: "auto" },
        }}
      />
      <GridItem
        title="Furniture"
        titleVariant="h2"
        backgroundImage="cover-2.png"
        buttonText="Read More"
        info="5 Items"
        style={{
          gridRow: { sm: "1/2" },
          gridColumn: { sm: "2/-1" },
          minHeight: { base: 300, sm: "auto" },
        }}
      />
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        gap="16px"
        sx={{
          gridRow: { sm: "2" },
          gridColumn: { sm: "1/-1", md: "2/2" },
        }}
      >
        <GridItem
          title="Furniture"
          titleVariant="h2"
          backgroundImage="cover-3.png"
          buttonText="Read More"
          info="5 Items"
          style={{
            flex: 1,
            minHeight: { base: 300, sm: "auto" },
          }}
        />
        <GridItem
          title="Furniture"
          titleVariant="h2"
          backgroundImage="cover-4.png"
          buttonText="Read More"
          info="5 Items"
          style={{
            flex: 1,
            minHeight: { base: 300, sm: "auto" },
          }}
        />
      </Box>
    </Box>
  );
};
