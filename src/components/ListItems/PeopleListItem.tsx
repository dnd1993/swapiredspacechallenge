import React from "react";
import { Link } from "react-router-dom";
import { ListItem, Avatar, Typography } from "@mui/material";

type PeopleListItemProps = {
  link: string;
  name: string | undefined;
};

const PeopleListItem: React.FC<PeopleListItemProps> = ({ link, name }) => {
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
        <Avatar style={{ marginRight: "1rem" }} />
        <Typography variant="h5" component="p" gutterBottom align="center">
          {name}
        </Typography>
      </Link>
    </ListItem>
  );
};

export default PeopleListItem;
