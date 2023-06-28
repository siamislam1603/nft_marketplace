import { Container, styled, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SearchField from "./Header/SearchField";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const Layout = () => {
  return (
    <>
      <Header />
      <Offset sx={{my:4}}/>
      <Container maxWidth="xl">
        {useMediaQuery("(max-width:499.98px)") ? <SearchField /> : null}
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;
