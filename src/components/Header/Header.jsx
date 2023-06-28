import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AppsIcon from "@mui/icons-material/Apps";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Box,
  Button,
  Container,
  Menu,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import MenuItems from "./MenuItems";
import SearchField from "./SearchField";
import { CompanyNameStyled, MenuButtonStyled, NavbarStyled } from "./styles";

const Header = () => {
  const theme = useTheme();
  const headerRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <NavbarStyled ref={headerRef} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 3 }} variant="dense">
            <CompanyNameStyled>nfters</CompanyNameStyled>
            {useMediaQuery(theme.breakpoints.up("lg")) ? <MenuItems /> : null}
            <Stack
              flexGrow={1}
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={{ xs: 0, sm: 2, md: 3 }}
            >
              {useMediaQuery("(min-width:500px)") ? <SearchField /> : null}
              <Button
                variant={
                  useMediaQuery(theme.breakpoints.up("md")) ? "contained" : ""
                }
                className="btns"
                sx={{ color: { md: "white" } }}
                startIcon={<UploadIcon />}
              >
                Upload
              </Button>
              <Button
                startIcon={<AccountBalanceWalletIcon />}
                variant={
                  useMediaQuery(theme.breakpoints.up("md")) ? "outlined" : ""
                }
                className="btns"
                color="primary"
              >
                Connect
                <Box
                  component="span"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  &nbsp;Wallet
                </Box>
              </Button>
            </Stack>
            <MenuButtonStyled
              id="header-menu-button"
              aria-controls={open ? "header-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AppsIcon sx={{ fontSize: 30 }} />
            </MenuButtonStyled>
          </Toolbar>
        </Container>
      </NavbarStyled>
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "header-menu-button",
        }}
      >
        <MenuItems handleClick={handleClose} />
      </Menu>
    </>
  );
};

export default Header;
