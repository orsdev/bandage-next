import { Button } from "@mui/material";
import Image from "next/image";

export const SearchButton = () => {
  return (
    <Button
      type="button"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        px: 0,
        width: "auto",
        minWidth: "30px",
      }}
    >
      <Image
        src="/images/icons/search.svg"
        alt="Search"
        width={18}
        height={18}
      />
    </Button>
  );
};
