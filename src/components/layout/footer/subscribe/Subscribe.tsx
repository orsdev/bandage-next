import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

export const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    if (!Boolean(value.trim())) return;
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!Boolean(email.trim())) return;
    alert("Subscribed successfully");

    setEmail("");
  };

  return (
    <Box width="100%">
      <Typography
        component="h6"
        variant="h4"
        mt="5px"
        fontWeight={700}
        color="secondary.dark"
      >
        Get In Touch
      </Typography>
      <Box
        component="form"
        display="flex"
        flexDirection={{ base: "column", xs: "row" }}
        rowGap="10px"
        mt="20px"
        width="100%"
        onSubmit={(event) => {
          event?.preventDefault();

          handleSubmit();
        }}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "5px",
            background: "#F9F9F9",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          "& .MuiFormControl-root": {
            flex: 1,

            "& fieldset": {
              borderColor: "info.200",
            },
          },
          "& .MuiFormControl-root input": {
            fontSize: "1.2rem",
          },
          "&  input::placeholder": {
            fontSize: "1.4rem",
            color: "info.main",
          },
        }}
      >
        <TextField
          name="newsletter"
          required
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <Button
          type="submit"
          sx={{
            fontSize: "1.4rem",
            fontWeight: 400,
            color: "primary.light",
            bgcolor: "primary.main",
            borderRadius: 0,
            width: { base: "100%", xs: "117px" },
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",

            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          Submit
        </Button>
      </Box>
      <Typography
        component="p"
        mt="10px"
        variant="subtitle2"
        fontWeight={600}
        color="info.main"
      >
        Keep up to date with industry insights and latest news
      </Typography>
    </Box>
  );
};
