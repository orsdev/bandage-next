import { Box, Typography } from "@mui/material";
import { ProductTab } from ".";
import { useState } from "react";
import { PanelOne } from "./product-panels";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box mt="50px">{children}</Box>}
    </div>
  );
}

export const ProductOverview = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box mt="60px">
      <Box sx={{ width: "100%", display: { base: "none", sm2: "block" } }}>
        <ProductTab handleChange={handleChange} value={value} />
        <CustomTabPanel value={value} index={0}>
          <PanelOne />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="subtitle1" fontWeight={400} color="info.main">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <PanelOne />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};
