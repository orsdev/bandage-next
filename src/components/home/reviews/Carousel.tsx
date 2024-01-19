"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Avatar, Box, Rating, Typography } from "@mui/material";
import { MockTestimonialData } from "./reviews.util";

import "swiper/css";

export const ReviewCarousel = () => {
  return (
    <Box width="100%">
      <Swiper autoplay speed={1000} modules={[Autoplay]}>
        {MockTestimonialData.map((item) => (
          <SwiperSlide key={item.name}>
            <Box
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                alt={item.name}
                src={item.avatar}
                sx={{
                  mb: "20px",
                  width: "90px",
                  height: "90px",
                }}
              />
              <Rating
                name="read-only"
                value={item.rating}
                readOnly
                size="large"
                sx={{
                  "& .MuiRating-icon": {
                    fontSize: "2.5rem",
                  },
                }}
              />
              <Typography
                mt="20px"
                component="p"
                variant="subtitle1"
                fontWeight={700}
                color="info.main"
              >
                {item.comment}
              </Typography>
              <Typography
                component="p"
                variant="subtitle1"
                fontWeight={700}
                mt="20px"
                color="primary.main"
              >
                {item.name}
              </Typography>
              <Typography
                component="p"
                variant="subtitle1"
                fontWeight={700}
                color="secondary.dark"
              >
                {item.role}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
