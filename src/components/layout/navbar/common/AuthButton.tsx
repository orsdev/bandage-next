import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export const AuthButton = () => {
  return (
    <Button
      type="button"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <Box>
        <Image
          src="/images/icons/avatar.svg"
          alt="User Avatar"
          width={12}
          height={12}
        />
      </Box>
      <Typography
        component="span"
        fontSize="1.4rem"
        fontWeight={600}
        textTransform="capitalize"
        color="primary.main"
      >
        Login / Register
      </Typography>
    </Button>
  );
};
