import React from "react";
import { Typography } from "@mui/material";

type SectionHeaderProps = {
  header: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ header }) => {
  return (
    <Typography variant="h2" component="h2" gutterBottom align="center">
      {header}
    </Typography>
  );
};

export default SectionHeader;
