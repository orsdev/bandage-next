"use client";

import { CustomButton } from "@/components/common";
import { Box, Typography } from "@mui/material";

export const Experience = () => {
  return (
    <Box
      component="section"
      mt="86px"
      width="100%"
      sx={{
        backgroundImage: `url(/images/home/banner.png)`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        textAlign: "center",
        py: "160px",
        px: { base: "40px", sm: "90px", md: "195px" },
      }}
    >
      <Typography
        component="p"
        variant="subtitle1"
        fontWeight={700}
        color="primary.main"
      >
        Designing Better Experience
      </Typography>
      <Typography
        component="h1"
        variant="h1"
        my="25px"
        fontWeight={700}
        color="secondary.dark"
        maxWidth="600px"
        mx="auto"
      >
        Problems trying to resolve the conflict between
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        fontWeight={400}
        color="info.main"
        maxWidth="450px"
        mx="auto"
      >
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </Typography>
      <Typography
        component="p"
        variant="h2"
        fontWeight={700}
        color="secondary.main"
        my="25px"
      >
        $16.48
      </Typography>
      <Box display="flex" justifyContent="center" mt="50px">
        <CustomButton
          title="ADD YOUR CALL TO ACTION"
          style={{
            border: "none",
            bgcolor: "primary.main",
            color: "primary.light",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        />
      </Box>
    </Box>
  );
};
