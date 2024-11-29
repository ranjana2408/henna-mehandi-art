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
        outerMainContainerStyle={{
          marginTop: isAboutPage ? "70px" : "200px",
          paddingLeft: "0px",
          height: isAboutPage ? "61rem !important" : "",
          backgroundColor: "white",
          "@media (min-width:375px) and (max-width:424px)": {
            marginTop: isAboutPage ? "180px" : "278px !important",
            height: isAboutPage ? "53rem !important" : "",
          },
          "@media (min-width:425px) and (max-width:481px)": {
            marginTop: isAboutPage ? "230px" : "300px !important",
            height: isAboutPage ? "53rem !important" : "50rem !important",
          },
          "@media (min-width:481px) and (max-width:586px)": {
            marginTop: isAboutPage ? "295px" : "360px !important",
            height: isAboutPage ? "53rem !important" : "50rem !important",
          },
          "@media (min-width:586px) and (max-width:620px)": {
            marginTop: isAboutPage ? "295px" : "400px !important",
            height: isAboutPage ? "53rem !important" : "50rem !important",
          },
          "@media (min-width:620px) and (max-width:767px)": {
            marginTop: isAboutPage ? "392px" : "500px !important",
            height: isAboutPage ? "53rem !important" : "50rem !important",
          },
          "@media (min-width:768px) and (max-width:1023px)": {
            height: "55rem !important",
            marginTop: isAboutPage ? "295px !important" : "0px !important",
            px: "32px !important",
          },
        }}
        outerFeatContainerStyle={{
          position: "relative",
          paddinRight: "54px !important",
          paddingLeft: "40px",
          width: isAboutPage ? "100% !important" : "55%",
          background: isAboutPage ? "#F8F8F8" : "none",
          paddingBottom: isAboutPage ? "50px" : "",
          paddingTop: isAboutPage ? "238px !important" : "0px",
          "@media (min-width:375px) and (max-width:767px)": {
            width: "100%",
            paddingTop: "20px",
          },
        }}
        outerContainerStyle={{
          maxWidth: isAboutPage ? "1019px !important" : "1583px !important",
          background: isAboutPage
            ? "transeparent"
            : "url(/why-choose-us-bg-image.png)",
          backgroundSize: "900px 584px",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom -13px right 50%",
          justifyContent: isAboutPage ? "center" : "start",
          flexDirection: isAboutPage
            ? "column-reverse !important"
            : "row-reverse",
          "@media (min-width:375px) and (max-width:1023px)": {
            backgroundSize: "340px",
            flexDirection: "column-reverse !important",
          },
        }}
        outerImageContainerStyle={{
          width: isAboutPage ? "100% !important" : "50%",
          paddingLeft: isAboutPage ? "120px" : "0px",
          paddingTop: isAboutPage ? "0px" : "0px",
          position: isAboutPage ? "absolute" : "relative",
          bottom: isAboutPage ? "581px" : "0",
          "& img": {
            height: isAboutPage ? "466px !important" : "512px !important",
            width: "734px !important",
            maxWidth: "734px !important",
            maxHeight: isAboutPage ? "600px" : "466px  !important",
          },
          "@media(min-width:375px) and (max-width:767px)": {
            "& img": {
              height: "323px !important",
              width: "100% !important",
              px: "10px !important",
              maxWidth: "100%!important",
            },
            position: isAboutPage ? "absolute" : "relative",
            bottom: isAboutPage ? "568px" : "0",
            height: "323px !important",
            width: "100% !important",
            paddingLeft: isAboutPage ? "0px" : "0px",
          },
          "@media (min-width:768px) and (max-width:1023px)": {
            "& img": {
              width: "1020px !important",
              maxWidth: "1020px !important",
            },
            top: "0px !important",
            right: "0px !important",
          },
          "@media (min-width:1024px) and (max-width:1439px)": {
            "& img": {
              width: "597px !important",
            },
          },
        }}
        bgColor="white"
        isAboutPage={isAboutPage}
        {...data?.whyChooseUs}
      />
    </>
  );
}
