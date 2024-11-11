import React from "react";
import { Box } from "@mui/material";
import TitleSection from "~/blocks/title-section";
import data from "../../../utils/data.json";

const AboutUs = () => {
  const {aboutUsStyle}= styles
  
  return (
    <Box
      sx={aboutUsStyle}
    >
      <TitleSection {...data?.aboutUs} />
    </Box>
  );
};

export default AboutUs;

const styles={
  aboutUsStyle:{justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "40px 40px",}
}
