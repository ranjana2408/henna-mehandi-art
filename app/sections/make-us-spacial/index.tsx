import React from "react";
import { Box } from "@mui/material";
import TitleSection from "~/blocks/title-block";
import data from "../../../utils/data.json";

const MakeUsSpecial = () => {
  return (
    <Box>
      <TitleSection {...data?.makeUsSpecial} />
    </Box>
  );
};

export default MakeUsSpecial;
