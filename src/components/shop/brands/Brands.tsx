import { Box } from "@mui/material";
import Image from "next/image";

const BrandsData = [
  { name: "hooli", logo: "/images/brands/hooli.png" },
  { name: "lyft", logo: "/images/brands/lyft.png" },
  { name: "hat", logo: "/images/brands/hat.png" },
  { name: "stripe", logo: "/images/brands/stripe.png" },
  { name: "aws", logo: "/images/brands/aws.png" },
  { name: "reddit", logo: "/images/brands/reddit.png" },
];

export const Brands = () => {
  return (
    <Box
      mt="98px"
      mb="90px"
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      gap="30px"
      rowGap="60px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      {BrandsData.map((brand) => (
        <Box
          key={brand.name}
          width="146px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={83}
            height={59}
            style={{ objectFit: "contain" }}
          />
        </Box>
      ))}
    </Box>
  );
};
