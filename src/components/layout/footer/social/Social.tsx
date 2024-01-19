import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { SocialMockData } from "../footer.util";

export const FooterSocial = () => {
  return (
    <Stack direction="row" gap={{ base: "10px", sm: "20px" }}>
      {SocialMockData.map((item) => (
        <Box
          key={item.title}
          component="a"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          mr="10px"
          my="10px"
          aria-label={item.title}
        >
          <Image src={item.icon} width={24} height={24} alt={item.title} />
        </Box>
      ))}
    </Stack>
  );
};
