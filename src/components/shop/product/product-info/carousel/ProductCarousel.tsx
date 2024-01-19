import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ProductCarouselStyle, ThumbnailBreakpoint } from "./carousel-util";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductCarousel {
  images: Array<string>;
  name: string;
}

export const ProductCarousel: FC<ProductCarousel> = ({ images = [], name }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Box sx={ProductCarouselStyle}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper__one"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Box
              component="img"
              src={image}
              alt={name}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box mt="21px" />
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={19}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper__thumbs"
        breakpoints={ThumbnailBreakpoint}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Box
              component="img"
              src={image}
              alt={name}
              style={{
                width: "100%",
                objectFit: "cover",
                display: "block",
                height: "100%",
                cursor: "pointer",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
