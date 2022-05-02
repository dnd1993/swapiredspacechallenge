import React from "react";
import { Stack } from "@mui/material";

import MainHeader from "../../components/Headers/MainHeader";
import PageNavButton from "../../components/Buttons/PageNavButton";

const Home: React.FC = () => {
  return (
    <Stack>
      <MainHeader header="Star Wars Explorer" />
      <Stack style={{ flexDirection: "row", justifyContent: "center" }}>
        <PageNavButton link="/people" name="people" />
        <PageNavButton
          link="/movies"
          name="movies"
          style={{ margin: "0 1rem", backgroundColor: "#ff0000" }}
        />
        <PageNavButton
          link="/planets"
          name="planets"
          style={{ backgroundColor: "#008000" }}
        />
      </Stack>
    </Stack>
  );
};

export default Home;
