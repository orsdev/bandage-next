import { Box, Button, Rating, Typography } from "@mui/material";

import { CustomButton } from "@/components/common";
import { ProductColors } from "../colors";
import { MiniButton } from "../../common";

export function ProductContent() {
  return (
    <Box>
      {/* Name */}
      <Typography
        component="h3"
        variant="h3"
        fontWeight={400}
        color="secondary.dark"
      >
        Floating Phone
      </Typography>

      {/* Rating & Reviews */}
      <Box display="flex" gap="10px" mt="12px">
        <Rating
          name="read-only"
          value={4}
          readOnly
          size="large"
          sx={{
            "& .MuiRating-icon": {
              fontSize: "2.5rem",
            },
          }}
        />
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={700}
          color="info.dark"
        >
          10 Reviews
        </Typography>
      </Box>

      {/* Price */}
      <Typography
        component="h2"
        mt="21px"
        variant="h2"
        fontWeight={700}
        color="secondary.dark"
      >
        $1,139.33
      </Typography>

      {/* Availability */}
      <Box mt="10px" gap="5px" display="flex">
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={700}
          color="info.dark"
        >
          Availability :
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          fontWeight={700}
          color="primary.main"
        >
          In Stock
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          mt: "100px",
          mb: "28px",
          height: "1px",
          width: "100%",
          bgcolor: "secondary.contrastText",
        }}
      />

      {/* Colors */}
      <ProductColors
        colors={["#23A6F0", "#2DC071", "#E77C40", "#252B42"]}
        handleSelectedColor={(color) => {
          alert(`You selected ${color}`);
        }}
      />

      <Box mt="60px" gap="10px" display="flex" alignItems="center">
        <CustomButton
          title="Select Options"
          style={{
            textTransform: "capitalize",
            bgcolor: "primary.main",
            color: "primary.light",
            py: "10px",
            px: "20px",

            "&:hover": {
              bgcolor: "secondary.main",
              borderColor: "secondary.main",
            },
          }}
        />

        {/* Favorite Button*/}
        <MiniButton
          icon="/images/icons/love.png"
          title="Favorite"
          handleClick={() => {}}
        />

        {/* Cart Button*/}
        <MiniButton
          icon="/images/icons/wheel.png"
          title="Cart"
          handleClick={() => {}}
        />
        {/* View Button*/}
        <MiniButton
          icon="/images/icons/view.png"
          title="View Count"
          handleClick={() => {}}
        />
      </Box>
    </Box>
  );
}
