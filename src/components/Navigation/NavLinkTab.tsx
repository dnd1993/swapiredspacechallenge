import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

type NavLinkProps = {
  link: string;
  name: string;
};

const NavLinkTab: React.FC<NavLinkProps> = ({ link, name }) => {
  return (
    <NavLink className="nav-link" to={link}>
      <Typography variant="h4" component="div" gutterBottom>
        {name}
      </Typography>
    </NavLink>
  );
};

export default NavLinkTab;
