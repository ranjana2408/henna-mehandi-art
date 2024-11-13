import React from "react";
import data from "../../../utils/data.json";
import FeaturesBlock from "~/blocks/features";

export default function WhyChooseUs() {
  return (
    <>
      <FeaturesBlock
        outerContainerStyle={{
          "@media (min-width:319px) and (max-width:768px)": {
            flexDirection: "column-reverse !important",
          },
        }}
        style={{
          marginTop: "130px",
          "@media (min-width:319px) and (max-width:1024px)": {
            marginTop: "100px !important",
            paddingLeft: "0px",
          },
          "@media (min-width:319px) and (max-width:768px)": {
            "& .MuiBox-root": {
              top: "20px !important",
            },
          },
        }}
        featuresBoxStyele={{
          "@media (min-width:319px) and (max-width:1024px)": {
            marginTop: "20px !important",
          },
        }}
        height="30"
        bgColor="white"
        {...data?.whyChooseUs}
      />
    </>
  );
}
