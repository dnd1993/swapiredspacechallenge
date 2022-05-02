import React from "react";
import { Link } from "react-router-dom";
import { ListItem, Typography } from "@mui/material";

type BasicListItemProps = {
  link: string;
  name: string | undefined;
};

const BasicListItem: React.FC<BasicListItemProps> = ({ link, name }) => {
  return (
    <ListItem key={name}>
      <Link
        to={link}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <Typography variant="h4" component="p" gutterBottom align="center">
          {name}
        </Typography>
      </Link>
    </ListItem>
  );
};

export default BasicListItem;
