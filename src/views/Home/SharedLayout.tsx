import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import NavBar from "../../containers/NavBar";

const SharedLayout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
