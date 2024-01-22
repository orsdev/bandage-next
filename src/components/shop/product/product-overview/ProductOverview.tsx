import { Box, Typography } from "@mui/material";
import { ProductTab } from ".";
import { useState } from "react";
import { PanelDescription, PanelTwo } from "./product-panels";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box mt="50px">{children}</Box>}
    </Box>
  );
}

export const ProductOverview = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box mt="60px">
      <Box display={{ base: "none", sm2: "block" }} width="100%" mx="auto">
        <ProductTab handleChange={handleChange} value={value} />
        <CustomTabPanel value={value} index={0}>
          <PanelDescription />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PanelTwo />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography variant="subtitle1" fontWeight={400} color="info.main">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};
