import { Button } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface MiniButton {
  title: string;
  icon: string;
  isDisabled?: boolean;
  handleClick(): void;
}
export const MiniButton: FC<MiniButton> = ({
  title,
  icon,
  isDisabled = false,
  handleClick,
}) => {
  return (
    <Button
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      sx={{
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #E8E8E8",
        minHeight: "auto",
        minWidth: "auto",
        width: "40px",
        height: "40px",
        opacity: isDisabled ? 0.5 : 1,
      }}
    >
      <Image src={icon} width={20} height={20} alt={title} />
    </Button>
  );
};
