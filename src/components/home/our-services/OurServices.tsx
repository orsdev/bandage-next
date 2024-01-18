"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const MockServicesData = [
  {
    icon: "/images/icons/open-book.svg",
    name: "Easy Wins",
    info: "Get your best looking smile now!",
  },
  {
    icon: "/images/icons/book.svg",
    name: "Concrete",
    info: "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    icon: "/images/icons/arrow.svg",
    name: "Hack Growth",
    info: "Overcame any hurdle or any other problem.",
  },
];

export const OurServices = () => {
  return (
    <Box
      component="section"
      mt="80px"
      px={{ base: "40px", md: "80px" }}
      width="100%"
    >
      {/* Header */}
      <Box
        component="header"
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          component="p"
          variant="h3"
          fontWeight={400}
          color="info.main"
        >
          Featured Services
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          mt="5px"
          fontWeight={700}
          color="secondary.dark"
          textTransform="uppercase"
        >
          BESTSELLER SERVICES
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={400}
          color="info.main"
        >
          Problems trying to resolve the conflict between
        </Typography>
      </Box>

      {/* Services */}
      <Box mt="56px">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              base: "1fr",
              sm: "repeat(auto-fill, minmax(215px, 1fr))",
            },
            justifyContent: "center",
            gap: "30px",
            rowGap: "16px",
          }}
        >
          {MockServicesData.map((item) => (
            <Box
              key={item.name}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              py="35px"
              px="40px"
              textAlign="center"
            >
              <Image src={item.icon} alt={item.name} width={72} height={72} />
              <Typography
                component="h3"
                variant="h3"
                fontWeight={700}
                my="15px"
                color="secondary.dark"
                textTransform="capitalize"
              >
                {item.name}
              </Typography>
              <Typography
                component="p"
                variant="subtitle1"
                fontWeight={400}
                color="info.main"
                lineHeight="18px"
              >
                {item.info}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
