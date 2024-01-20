import { Box, Skeleton } from "@mui/material";

export const ProductInfoSkeleton = () => {
  return (
    <Box
      display="grid"
      sx={{
        gridTemplateColumns: { md: "506px 1fr" },
        gap: { base: "30px", md: "44px" },
      }}
    >
      {/* Image Carousel */}
      <Box>
        <Skeleton variant="rectangular" width={"100%"} height={350} />
        <Box mt="21px" display="flex" gap="19px">
          <Skeleton width={142} height={142} />
          <Skeleton width={142} height={142} />
          <Skeleton width={142} height={142} />
          <Skeleton width={142} height={142} />
        </Box>
      </Box>

      {/* Content */}
      <Box>
        <Skeleton width="50%" height={40} />
        <br />
        <Skeleton width={"70%"} height={40} />
        <br />
        <Skeleton width="50%" height={40} />
        <br />
        <Skeleton width="60%" height={40} />
        <br />
        <Skeleton width="60%" height={40} />
        <br />
        <br />
        <Skeleton width="80%" height={40} />
      </Box>
    </Box>
  );
};
