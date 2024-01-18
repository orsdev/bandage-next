import { Button, Typography } from "@mui/material";
import Image from "next/image";

export const WishlistButton = () => {
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
        src="/images/icons/fav.svg"
        alt="Cart Button"
        width={18}
        height={18}
      />
      <Typography variant="subtitle2" component="p">
        1
      </Typography>
    </Button>
  );
};