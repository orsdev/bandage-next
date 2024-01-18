import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import { FC } from "react";

interface GridItem {
  backgroundImage: string;
  title: string;
  titleVariant?: "h1" | "h2";
  buttonText: string;
  info: string;
  style?: SxProps | undefined;
}

export const GridItem: FC<GridItem> = ({
  backgroundImage,
  title,
  buttonText,
  info,
  style = {},
  titleVariant = "h1",
}) => {
  return (
    <Box
      position="relative"
      padding="24px"
      sx={{
        backgroundImage: `url(/images/home/hero/${backgroundImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <Stack position="absolute" top={24} gap="1px" alignItems="baseline">
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={700}
          my={0}
          py={0}
          textTransform="capitalize"
          color="info.contrastText"
        >
          {info}
        </Typography>
        <Typography
          variant={titleVariant}
          textTransform="uppercase"
          color="secondary.dark"
          my={0}
          py={0}
        >
          {title}
        </Typography>
        <Button
          type="button"
          sx={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "secondary.dark",
            padding: "0 4px",
            textTransform: "capitalize",
            width: "auto",
          }}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
};
