import { Button, Typography } from "@mui/material";
import Image from "next/image";

export const CartButton = () => {
  return (
    <Button
      type="button"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        px: "2px",
        width: "auto",
        minWidth: "30px",
      }}
    >
      <Image
        src="/images/icons/basket.svg"
        alt="Cart Button"
        width={18}
        height={18}
      />
      <Typography variant="subtitle2">1</Typography>
    </Button>
  );
};
