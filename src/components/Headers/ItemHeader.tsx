import React from "react";
import { Typography } from "@mui/material";

type ItemHeaderProps = {
  header: string | undefined;
};

const ItemHeader: React.FC<ItemHeaderProps> = ({ header }) => {
  return (
    <Typography variant="h3" component="h3" gutterBottom align="center">
      {header}
    </Typography>
  );
};

export default ItemHeader;
