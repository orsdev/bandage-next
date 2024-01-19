"use client";

import { Box, Typography } from "@mui/material";

export const PanelOne = () => {
  return (
    <Box
      display="flex"
      gap="30px"
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* Content */}
      <Box pr={{ md: "50px" }}>
        <Typography variant="subtitle1" fontWeight={400} color="info.main">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </Typography>

        <br />
        <Box pl="24px" borderLeft="3px solid" borderColor="secondary.main">
          <Typography variant="subtitle1" fontWeight={400} color="info.main">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
        </Box>
        <br />
        <Typography variant="subtitle1" fontWeight={400} color="info.main">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </Typography>
      </Box>

      {/* Image */}
      <Box
        sx={{
          backgroundImage: `url(/images/products/others.png)`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "372px",
        }}
      />
    </Box>
  );
};
