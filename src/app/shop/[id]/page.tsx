"use client";

import { CenteredContainer } from "@/components";
import { Breadcrumb, Crumbs } from "@/components/common";
import { ProductInfo } from "@/components/shop/product";
import { Box } from "@mui/material";

const CrumbsData = [
  { name: "Home", route: "/", isDisabled: false },
  { name: "Shop", route: "/shop", isDisabled: true },
] as Crumbs;

export default function Product() {
  return (
    <>
      <CenteredContainer>
        <Box mt="57px">
          <Breadcrumb crumbs={CrumbsData} />
        </Box>

        <Box px={{ sm: "20vw", md: 0 }}>
          {/* Product Info */}
          <ProductInfo />
        </Box>
      </CenteredContainer>
    </>
  );
}
