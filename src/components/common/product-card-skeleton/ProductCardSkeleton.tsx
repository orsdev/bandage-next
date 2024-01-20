import { Box, Skeleton } from "@mui/material";
import { FC } from "react";

interface ProductCardSkeleton {
  totalSkeleton: number;
}

export const ProductCardSkeleton: FC<ProductCardSkeleton> = ({
  totalSkeleton = 4,
}) => {
  return (
    <>
      {new Array(totalSkeleton).fill("skeleton").map((item, index) => {
        const key = item + index;
        return (
          <Box key={key}>
            <Skeleton variant="rectangular" width={"100%"} height={238} />
            <Skeleton
              width="30%"
              sx={{
                mx: "auto",
              }}
            />
            <Skeleton
              width="30%"
              sx={{
                mx: "auto",
              }}
            />
            <Skeleton
              width="60%"
              sx={{
                mx: "auto",
              }}
            />
          </Box>
        );
      })}
    </>
  );
};
