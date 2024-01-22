"use client";

import { useGetSingleProductQuery } from "@/store/api";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";

export const PanelDescription = () => {
  const params = useParams();
  const { id } = params || { id: "" };

  const { data } = useGetSingleProductQuery(id as string);

  const { description, thumbnail, category } = data || {};

  return (
    <Box
      display="flex"
      gap="30px"
      alignItems={{ base: "center", md: "flex-start" }}
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* Content */}
      <Box pr={{ md: "50px" }}>
        <Typography
          component="h2"
          variant="h2"
          fontWeight={700}
          color="secondary.dark"
          textTransform="capitalize"
        >
          {category}
        </Typography>
        <br />
        <Typography variant="subtitle1" fontWeight={400} color="info.main">
          {description}
        </Typography>
      </Box>

      {/* Image */}
      <Box
        sx={{
          backgroundImage: `url(${thumbnail})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "6px",
          width: { base: "100%", md: "50%" },
          height: "372px",
        }}
      />
    </Box>
  );
};
