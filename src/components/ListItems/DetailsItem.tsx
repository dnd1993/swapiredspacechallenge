import React from "react";
import { ListItem, Container, Typography, Divider } from "@mui/material";

type DetailsItemProps = {
  header: string,
  value: string | undefined,
};

const DetailsItem: React.FC<DetailsItemProps> = ({ header, value }) => {
  return (
    <>
      <ListItem>
        <Container>
          <Typography variant="h5" component="p" gutterBottom align="center">
            {header}
          </Typography>
          <Typography variant="h4" component="p" gutterBottom align="center">
            {value}
          </Typography>
        </Container>
      </ListItem>
      <Divider />
    </>
  );
};

export default DetailsItem;
