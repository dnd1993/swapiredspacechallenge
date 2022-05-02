import React from "react";
import { Typography } from "@mui/material";

type MainHeaderProps = {
  header: string;
};

const MainHeader: React.FC<MainHeaderProps> = ({ header }) => {
  return (
    <Typography variant="h1" component="h1" gutterBottom align="center">
      {header}
    </Typography>
  );
};

export default MainHeader;
