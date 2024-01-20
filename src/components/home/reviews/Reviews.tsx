"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ReviewCarousel } from "./Carousel";
import { MockFrameData } from "./reviews.util";

export const Reviews = () => {
  return (
    <Box
      component="section"
      mt="190px"
      px={{ base: "2.4rem", sm: "20vw", lg: "10px" }}
      width="100%"
      display="grid"
      gridTemplateColumns={{ lg: "repeat(2, 1fr)" }}
      alignItems="center"
      columnGap="120px"
      rowGap="48px"
    >
      {/* Carousel */}
      <Box
        width="100%"
        textAlign="center"
        sx={{
          overflowX: "hidden",
        }}
      >
        <Typography
          component="h3"
          variant="h2"
          fontWeight={700}
          color="secondary.dark"
        >
          What they say about us
        </Typography>

        <Box minHeight="200px" mt="50px" width="100%">
          <ReviewCarousel />
        </Box>
      </Box>

      {/* Frame */}
      <Box
        gap="17px"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(auto-fill, minmax(120px, 1fr))",
          md: "repeat(auto-fill, minmax(142px, 1fr))",
        }}
        gridAutoRows={{ base: "130px", lg: "142px" }}
      >
        {MockFrameData.map((frame) => (
          <Box
            component="img"
            key={frame.name}
            src={frame.thumbnail}
            alt={frame.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
