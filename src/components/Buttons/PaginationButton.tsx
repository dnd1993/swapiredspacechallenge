import React from "react";
import { Button, Typography } from "@mui/material";

interface ItemsList {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: object;
}

type PaginationButtonProps = {
  itemsList: ItemsList;
  handleClick: () => void;
  name: string;
  type: string;
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  itemsList,
  handleClick,
  name,
  type,
}) => {
  return (
    <Button
      variant="contained"
      disabled={
        type === "previous"
          ? !itemsList.previous && true
          : !itemsList.next && true
      }
      onClick={handleClick}
      style={{ marginRight: "1rem" }}
    >
      <Typography
        variant="h5"
        component="span"
        gutterBottom
        align="center"
        style={{ marginBottom: "0" }}
      >
        {name}
      </Typography>
    </Button>
  );
};

export default PaginationButton;
