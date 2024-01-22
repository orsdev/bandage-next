import { useAppSelector } from "@/store/hook";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useCartDrawer } from "../use-cart";

export const CartButton = () => {
  const { handleOpenCart } = useCartDrawer();
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <Button
      type="button"
      onClick={handleOpenCart}
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
      <Typography variant="subtitle2" component="p">
        {cart?.length}
      </Typography>
    </Button>
  );
};
