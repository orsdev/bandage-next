export const ProductCarouselStyle = {
  "& .swiper__one": {
    height: "clamp(350px, 45vw, 450px)",
  },

  "& .swiper__thumbs": {
    mt: "30px !important",
    boxSizing: "border-box !important",
    padding: "10px 0px !important",

    "& .swiper-slide": {
      width: "100px !important",
      height: "75px !important",
    },

    "& .swiper-slide-thumb-active": {
      transform: "scale(1.07) !important",
    },
  },

  "& .swiper-slide img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "& .swiper-button-prev, & .swiper-button-next": {
    color: "white",
    background: "#e8f4f9bf",
    borderRadius: "50%",
    height: { base: "40px !important", md: "60px !important" },
    width: { base: "40px !important", md: "60px !important" },

    "&:after, &:after": {
      color: "secondary.dark",
      fontSize: { base: "15px !important", md: "25px !important" },
    },
  },
};

export const ThumbnailBreakpoint = {
  200: {
    slidesPerView: 2,
  },
  400: {
    slidesPerView: 2.5,
  },
  600: {
    slidesPerView: 3,
  },
  900: {
    slidesPerView: 4,
  },
  1300: {
    slidesPerView: 5,
  },
};
