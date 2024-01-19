"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { FC } from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface ProductTab {
  value: number;
  handleChange(event: React.SyntheticEvent, newValue: number): void;
}

export const ProductTab: FC<ProductTab> = ({ value, handleChange }) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        aria-label="Product Overview Tab"
        sx={{
          "& .MuiTabs-centered": {
            gap: { lg: "45px" },
          },
        }}
      >
        <Tab
          label={
            <Box>
              <Box gap="5px" display="flex">
                <Typography
                  component="p"
                  variant="subtitle1"
                  fontWeight={600}
                  textTransform="capitalize"
                  color="info.dark"
                >
                  Description
                </Typography>
              </Box>
            </Box>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <Box>
              <Box gap="5px" display="flex">
                <Typography
                  component="p"
                  variant="subtitle1"
                  fontWeight={600}
                  textTransform="capitalize"
                  color="info.dark"
                >
                  Additional Information
                </Typography>
              </Box>
            </Box>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <Box>
              <Box gap="5px" display="flex">
                <Typography
                  component="p"
                  variant="subtitle1"
                  fontWeight={600}
                  textTransform="capitalize"
                  color="info.dark"
                >
                  Reviews
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  fontWeight={700}
                  color="secondary.main"
                >
                  (0)
                </Typography>
              </Box>
            </Box>
          }
          {...a11yProps(2)}
        />
      </Tabs>
    </Box>
  );
};
