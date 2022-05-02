import { Tabs, Container, Typography, Stack } from "@mui/material";
import NavLinkTab from "../components/Navigation/NavLinkTab";

const NavBar = () => {
  return (
    <nav>
      <Stack direction="row" style={{ justifyContent: "center" }}>
        <NavLinkTab link="/" name="Home" />
        <NavLinkTab link="/people" name="People" />
        <NavLinkTab link="/movies" name="Movies" />
        <NavLinkTab link="/planets" name="Planets" />
      </Stack>
    </nav>
  );
};
export default NavBar;
