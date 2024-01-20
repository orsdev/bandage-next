import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useWishlistDrawer } from "../use-wishlist";
import { useAppSelector } from "@/store/hook";

export const WishlistButton = () => {
  const { handleOpenWishlist } = useWishlistDrawer();
  const { wishlists } = useAppSelector((state) => state.wishlists);

  return (
    <Button
      type="button"
      onClick={handleOpenWishlist}
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
        {wishlists.length}
      </Typography>
    </Button>
  );
};
