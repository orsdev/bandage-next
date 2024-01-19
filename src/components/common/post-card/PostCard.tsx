import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import { FC } from "react";

interface PostCard {
  tags: Array<string>;
  title: string;
  info: string;
  thumbnail: string;
  postedOn: string;
  commentCount: number;
  handleClick(): void;
}

export const PostCard: FC<PostCard> = ({
  thumbnail,
  tags,
  title,
  info,
  postedOn,
  commentCount,
  handleClick,
}) => (
  <Card
    style={{
      position: "relative",

      borderRadius: 0,
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
    }}
  >
    <Box position="absolute" top="20px" left="30px">
      <Chip
        label="NEW"
        sx={{
          borderRadius: "3px",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: "primary.light",
          bgcolor: "#E74040",
          height: "28px",
        }}
      />
    </Box>
    <CardMedia sx={{ height: 300 }} image={thumbnail} title={title} />
    <CardContent
      sx={{
        padding: "25px 25px 35px 25px",
        textAlign: "left",
      }}
    >
      {/* Tags */}
      <Box display="flex" gap="15px">
        {tags.map((tag, index) => (
          <Typography
            key={tag + title}
            variant="subtitle2"
            textTransform="capitalize"
            color={index === 0 ? "info.light" : "info.main"}
          >
            {tag}
          </Typography>
        ))}
      </Box>

      {/* Title */}
      <Typography
        component="h3"
        variant="h3"
        fontWeight={400}
        color="secondary.dark"
        lineHeight="30px"
        sx={{
          maxWidth: { sm: "80%" },
          my: "10px",
        }}
      >
        {title}
      </Typography>

      {/* Info */}
      <Typography variant="subtitle1" color="info.main">
        {info}
      </Typography>

      <Box
        display="flex"
        flexDirection={{ base: "column", xs: "row" }}
        rowGap="15px"
        justifyContent="space-between"
        my="25px"
        alignItems="center"
      >
        {/* Created on */}
        <Box display="flex" alignItems="center" gap="5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M8.49933 14.6667C5.20378 14.6232 2.54277 11.9622 2.49933 8.66668C2.54277 5.37113 5.20378 2.71011 8.49933 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49933 14.6667ZM8.49933 4.00001C5.93611 4.03376 3.86641 6.10346 3.83266 8.66668C3.86641 11.2299 5.93611 13.2996 8.49933 13.3333C11.0625 13.2996 13.1322 11.2299 13.166 8.66668C13.1322 6.10346 11.0625 4.03376 8.49933 4.00001ZM11.8327 9.33334H7.83266V5.33334H9.16599V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97066 4.47201L2.02733 3.52734L4.02133 1.52734L4.96466 2.47201L2.972 4.47201H2.97066Z"
              fill="#23A6F0"
            />
          </svg>

          <Typography variant="subtitle2" color="info.main">
            {dayjs(postedOn).format("DD MMM YYYY")}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
          >
            <g clipPath="url(#clip0_4039_46)">
              <path
                d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
                fill="#23856D"
              />
            </g>
            <defs>
              <clipPath id="clip0_4039_46">
                <rect
                  width={16}
                  height="14.6667"
                  fill="white"
                  transform="translate(0.5 0.666748)"
                />
              </clipPath>
            </defs>
          </svg>

          <Typography variant="subtitle2" color="info.main">
            {commentCount} comments
          </Typography>
        </Box>
      </Box>

      <Box mt="8px">
        <Button
          type="button"
          onClick={handleClick}
          sx={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "info.main",
            padding: "0 6px",
            py: "6px",
            textTransform: "capitalize",
            width: "auto",
          }}
        >
          Learn More
          <Image
            src="/images/icons/right-arrow.svg"
            alt="Learn More"
            width={9}
            height={16}
            style={{
              marginLeft: "10px",
            }}
          />
        </Button>
      </Box>
    </CardContent>
  </Card>
);
