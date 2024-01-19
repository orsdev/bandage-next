import { Button } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface MiniButton {
  title: string;
  icon: string;
  handleClick(): void;
}
export const MiniButton: FC<MiniButton> = ({ title, icon, handleClick }) => {
  return (
    <Button
      type="button"
      onClick={handleClick}
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
      }}
    >
      <Image src={icon} width={20} height={20} alt={title} />
    </Button>
  );
};
