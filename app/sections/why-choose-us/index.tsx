import React from "react";
import data from "../../../utils/data.json";
import SectionContainer from "~/container/section-container";

export default function WhyChooseUs() {
  return (
    <>
      <SectionContainer
        isImageLeft
        style={{
          marginTop: "-120px",
          paddingLeft: "0px",
          backgroundColor: "white",
          "& .MuiBox-root img": {
            maxWidth: "805px !important",
            maxHeight: "100%",
          },
          "@media (min-width:319px) and (max-width:1024px)": {
            marginTop: "20px !important",
            height: "43rem !important",
            "& .MuiBox-root img": {
              maxWidth: "98%!important",
              mx: "10px",
              maxHeight: "100%",
            },
          },
          "@media (min-width:319px) and (max-width:768px)": {
            "& .MuiBox-root": {
              top: "20px !important",
            },
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            height:'61rem'
          },
        }}
        featuresBoxStyle={{
          paddingTop: "0px",
          position: "relative",
          paddinRight: "54px !important",
          "@media (min-width:319px) and (max-width:1024px)": {
            paddingTop: "20px",
          },
          "@media (min-width:425px) and (max-width:1024px)": {
            width: "100%",
          },
        }}
        outerContainerStyle={{
          maxWidth: "1583px !important",
          backgroundImage: "url(/why-choose-us-bg-image.png)",
          backgroundSize: "900px 500px",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          "@media (min-width:319px) and (max-width:1024px)": {
            backgroundSize: "340px",
            flexDirection: "column-reverse !important",
          },
        }}
        outerImageContainerStyle={{
          "@media (min-width:425px) and (max-width:1024px)": {
            width: "100%",
          },
        }}
        height="38"
        bgColor="white"
        {...data?.whyChooseUs}
      />
    </>
  );
}
