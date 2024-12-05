import React, { useEffect, useRef } from "react";
import SectionContainer from "~/container/section-container";
import { useOutletContext } from "@remix-run/react";
import { Box } from "@mui/material";

interface HeroSectionProps {
  image?: string;
  subTitle: string;
  title: string;
  description: string;
  features?: { isShowImage?: boolean; title: string }[];
  showTobBorder?: boolean;
  showForm?: boolean;
  isImageLeft?: boolean;
  height?: string;
  outerContainerStyle?: object;
  button?: { label?: string };
  isHomeHero?: boolean;
  showBreadCrumbs?: boolean;
  isAboutSection?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { setRouteRef } = useOutletContext<OutletContext>();
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setRouteRef((prevRefs: any) => ({ ...prevRefs, homeRef: ref }));
    }
  }, []);

  return (
    <Box ref={ref}>
      <SectionContainer
        outerMainContainerStyle={{
          height: props?.isAboutSection ? "36rem" : "47rem !important",
          marginTop: props?.isAboutSection ? "185px" : "226px",
          "@media (min-width:319px) and (max-width:426px)": {
            height: props?.isAboutSection ? "min-content" : "61rem !important",
          },
          "@media (min-width:426px) and (max-width:551px)": {
            height: props?.isAboutSection ? "min-content" : "68rem !important",
          },
          "@media (min-width:551px) and (max-width:769px)": {
            height: props?.isAboutSection ? "min-content" : "83rem !important",
          },
          "@media (min-width:769px) and (max-width:1026px)": {
            height: props?.isAboutSection ? "min-content" : "45rem !important",
            paddingLeft: "0px !important",
            marginTop: "239px",
          },
          "@media (min-width:1026px) and (max-width:1439px)": {
            height: props?.isAboutSection ? "min-content" : "45rem !important",
            paddingLeft: "0px !important",
            marginTop: "239px",
          },
        }}
        outerContainerStyle={{
          "@media (min-width:319px) and (max-width:767px)": {
            flexDirection: props.isAboutSection
              ? "row !important"
              : "column-reverse",
          },
        }}
        outerFeatContainerStyle={{
          minHeight: "200px",
          position: props?.isAboutSection ? "relative" : "",
          "@media (min-width:319px) and (max-width:769px)": {
            flexDirection: props?.isAboutSection ? "row !important" : "column",
            padding: "20px",
          },
          "@media (min-width:620px) and (max-width:769px)": {
            width: "100%",
            paddingTop: props?.isAboutSection ? "130px" : "7px !important",
          },
          "@media (min-width:769px) and (max-width:1026px)": {
            marginTop: "-35px",
            paddingTop: "185px !important",
          },
        }}
        outerImageContainerStyle={{
          paddingTop: props?.isAboutSection ? "0px" : "185px",
          paddingLeft: "200px",
          "& img": {
            maxWidth: "1005px !important",
            maxHeight: "96%",
          },
          "@media (min-width:319px) and (max-width:769px)": {
            paddingTop: props?.isAboutSection ? "8px" : "0px !important",
            paddingLeft: "0px",
            maxWidth: "768px",
            width: "100%",
            mx: "auto",
            left: "none",
            "& img": {
              maxWidth: "768px !important",
              maxHeight: "auto",
              width: "100%",
            },
          },
          "@media (min-width:769px) and (max-width:1026px)": {
            paddingTop: "100px !important",
            paddingLeft: "0px !important",
          },
          "@media (min-width:1026px) and (max-width:1441px)": {
            paddingLeft: "64px",
          },
        }}
        isHeroHome
        showTobBorder
        bgColor="#FDE2E4"
        {...props}
      />
    </Box>
  );
};

export default HeroSection;
