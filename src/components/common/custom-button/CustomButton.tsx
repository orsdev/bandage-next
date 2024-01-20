import { LoadingButton } from "@mui/lab";
import { SxProps } from "@mui/material";
import { FC } from "react";

interface CustomButton {
  title: string;
  isLoading?: boolean;
  handleClick?(): void;
  style?: SxProps | undefined;
}

export const CustomButton: FC<CustomButton> = ({
  title,
  handleClick,
  isLoading = false,
  style = {},
}) => {
  return (
    <LoadingButton
      type="button"
      loading={isLoading}
      onClick={handleClick}
      sx={{
        textTransform: "uppercase",
        borderRadius: "5px",
        border: "1px solid",
        borderColor: "primary.main",
        bgcolor: isLoading ? "primary.main" : "transparent",
        py: "15px",
        fontSize: { base: "1.2rem", sm: "1.4rem" },
        fontWeight: 700,
        px: { base: "20px", sm: "40px" },
        ...style,
      }}
    >
      {title}
    </LoadingButton>
  );
};
