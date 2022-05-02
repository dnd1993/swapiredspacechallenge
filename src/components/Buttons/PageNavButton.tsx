import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

type PageNavButtonProps = {
  link: string;
  name: string;
  style?: {};
};

const PageNavButton: React.FC<PageNavButtonProps> = ({
  link,
  name,
  style,
}) => {
  return (
    <Button variant="contained" style={style}>
      <Typography
        variant="h3"
        component="span"
        gutterBottom
        align="center"
        style={{ marginBottom: "0" }}
      >
        <Link to={link}>{name.toUpperCase()}</Link>
      </Typography>
    </Button>
  );
};

export default PageNavButton;
