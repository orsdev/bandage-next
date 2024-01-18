import {
  Box,
  MenuItem,
  Menu as MaterialMenu,
  Link as MaterialLink,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { MenuLinks } from "../navbar.utils";

export const Menu = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<{
    [key in string]: HTMLElement | null;
  }>({});

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setAnchorEl({ [index.toString()]: event.currentTarget });
  };

  const handleCloseMenu = () => {
    setAnchorEl({});
  };

  return (
    <>
      {MenuLinks.map(({ name, url, children }, index: number) => {
        return (
          <Fragment key={name}>
            {/* Render a simple link if there are no children */}
            {!children && (
              <Box>
                <Link
                  href={url}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    color="info.main"
                    fontSize="1.4rem"
                  >
                    {name}
                  </Typography>
                </Link>
              </Box>
            )}

            {/* Render a link with a submenu if there are children */}
            {children && (
              <>
                <MaterialLink
                  component="button"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "info.main",
                    gap: "5px",
                    position: "relative",
                    marginRight: "10px",
                  }}
                  onClick={(event) => {
                    handleOpenMenu(event, index);
                  }}
                >
                  <Typography
                    component="span"
                    fontWeight={500}
                    color="info.main"
                    fontSize="1.4rem"
                  >
                    {name}
                  </Typography>
                  <Box
                    position="absolute"
                    sx={{
                      right: "-20px",
                      top: 1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                    </svg>
                  </Box>
                </MaterialLink>

                <MaterialMenu
                  anchorEl={anchorEl[index]}
                  open={Boolean(anchorEl[index])}
                  onClose={handleCloseMenu}
                  sx={{
                    "& .MuiPaper-root": {
                      minWidth: "150px",
                      py: "10px",
                      borderRadius: "5px 5px 5px 5px",
                      boxShadow:
                        "0 0 20px 0 rgba(20,47.00000000000007,126,.13)",
                    },
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {/* Map through submenu items and render them as MenuItems */}
                  {children.map(({ title, route }) => (
                    <MenuItem
                      key={title}
                      sx={{
                        fontSize: "1.3rem",
                      }}
                      onClick={() => {
                        router.push(route);
                        handleCloseMenu();
                      }}
                    >
                      {title}
                    </MenuItem>
                  ))}
                </MaterialMenu>
              </>
            )}
          </Fragment>
        );
      })}
    </>
  );
};
