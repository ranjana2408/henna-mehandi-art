import React from "react";
import data from "../../../utils/data.json";
import SectionContainer from "~/container/section-container";

export default function WhyChooseUs({
  isAboutPage,
}: {
  isAboutPage?: boolean;
}) {
  return (
    <>
      <SectionContainer
        isImageLeft
        whyChooseUs
        style={{
          marginTop: isAboutPage ? "-228px" : "-120px",
          paddingLeft: "0px",
          marginBottom: isAboutPage ? "-275px" : "",
          height: isAboutPage ? "61rem !important" : "",
          backgroundColor: "white",
          "@media (min-width:319px) and (max-width:1024px)": {
            marginTop: "20px !important",
            "& .MuiBox-root img": {
              maxWidth: "98%!important",
              mx: "10px",
              maxHeight: "100%",
            },
          },
          "@media (min-width:426px) and (max-width:768px)": {
            "& .MuiBox-root": {
              top: "20px !important",
            },
          },
          "@media (min-width:425px) and (max-width:767px)": {
            height: "46rem !important",
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            height: "54rem !important",
            px: "32px !important",
          },
        }}
        featuresBoxStyle={{
          paddingTop: "0px",
          position: "relative",
          paddinRight: "54px !important",
          width: isAboutPage ? "100% !important" : "50%",
          background:isAboutPage?'#F8F8F8':'none',
          py: isAboutPage ? "50px" : "",
          "@media (min-width:319px) and (max-width:1024px)": {
            paddingTop: "20px",
          },
          "@media (min-width:425px) and (max-width:1024px)": {
            width: "100%",
          },
        }}
        outerContainerStyle={{
          maxWidth: isAboutPage ? "1019px !important" : "1583px !important",
          background: isAboutPage
            ? "transeparent"
            : "url(/why-choose-us-bg-image.png)",
          backgroundSize: "900px 500px",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          justifyContent: isAboutPage ? "center" : "start",
          flexDirection: isAboutPage ? "column-reverse !important" : "row",
          "@media (min-width:319px) and (max-width:1024px)": {
            backgroundSize: "340px",
            flexDirection: "column-reverse !important",
          },
        }}
        outerImageContainerStyle={{
          width: isAboutPage ? "100% !important" : "50%",
          paddingLeft: isAboutPage ? "120px" : "0px",
          paddingTop: isAboutPage ? "0px" : "0px",
          "& img": {
            height: "512px !important",
            width: "734px !important",
            maxWidth: "734px !important",
            maxHeight: "325px !important",
          },
          "@media(min-width:319px) and (max-width:768px)": {
            height: "323px !important",
            width: "606px !important",
          },
          "@media (min-width:425px) and (max-width:1024px)": {
            width: "100%",
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            "& img": { maxWidth: "100%" },
          },
        }}
        height="38"
        bgColor="white"
        isAboutPage={isAboutPage}
        {...data?.whyChooseUs}
      />
    </>
  );
}
