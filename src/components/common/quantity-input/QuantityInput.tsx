import * as React from "react";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Input } from "@mui/material";

export interface QuantityInput {
  value: string;
  handleIncrement(): void;
  handleDecrement(): void;
}

export function QuantityInput({
  value,
  handleDecrement,
  handleIncrement,
}: QuantityInput) {
  return (
    <Box
      display="flex"
      gap="5px"
      alignItems="center"
      sx={{
        "& .MuiInputBase-root": {
          "&:before": {
            border: "none",
          },

          "&:hover:before": {
            borderBottom: "none !important",
          },
        },
      }}
    >
      {/* Decrement Button */}
      <Button
        variant="outlined"
        onClick={handleDecrement}
        sx={{
          height: "32px",
          width: "32px",
          minWidth: "auto",
          borderRadius: "100%",
        }}
      >
        <RemoveIcon fontSize="small" />
      </Button>

      {/* Input */}
      <Input
        aria-label="Quantity Input"
        slots={{
          input: StyledInput,
        }}
        value={value}
        readOnly
      />

      {/* Increment Button */}
      <Button
        variant="outlined"
        onClick={handleIncrement}
        sx={{
          height: "32px",
          width: "32px",
          minWidth: "auto",
          borderRadius: "100%",
        }}
      >
        <AddIcon fontSize="small" />
      </Button>
    </Box>
  );
}

const StyledInput = styled("input")(
  ({ theme }) => `
  font-size: 1.4rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  border: 1px solid #DAE2ED;
  box-shadow: rgba(0,0,0, 0.5);
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: transparent;
  }

  &:focus-visible {
    outline: 0;
  }
`
);
