import React, { useEffect, useRef } from "react";
import SectionContainer from "~/container/section-container";
import { useOutletContext } from "@remix-run/react";
import { Box } from "@mui/material";
import BreadcrumbsComponent from "~/component/breadcrumbs";

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
        style={{
          marginTop: props?.isAboutSection ? "185px" : "226px",
          "& .MuiBox-root img": {
            maxWidth: "1005px !important",
            maxHeight: "96%",
          },
          "@media (min-width:375px) and (max-width:426px)": {
            height: props?.isAboutSection ? "38rem" : "66rem !important",
            "& .MuiBox-root img": {
              marginLeft: "0px",
              maxWidth: "100% !important",
              maxHeight: "auto",
            },
          },
          "@media (min-width:426px) and (max-width:767px)": {
            height: props?.isAboutSection ? "42rem" : "68rem !important",
            "& .MuiBox-root img": {
              maxWidth: "100% !important",
            },
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            height: props?.isAboutSection ? "36rem" : "68rem !important",
            paddingLeft: "0px !important",
            "& .MuiBox-root img": {
              maxWidth: "1005px !important",
              maxHeight: "86%",
            },
            marginTop: "239px",
          },
        }}
        featuresBoxStyle={{
          minHeight: "200px",
          position: props?.isAboutSection ? "relative" : "",
          "@media (min-width:620px) and (max-width:767px)": {
            width: "100%",
            paddingTop: "7px !important",
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            marginTop: "-35px",
            paddingTop: "165px !important",
          },
        }}
        outerImageContainerStyle={{
          paddingTop: props?.isAboutSection ? "0px" : "185px",
          "@media (min-width:374px) and (max-width:768px)": {
            paddingTop: "0px !important",
            display: "flex",
            alignSelft: "center",
            justifySelf: "center",
          },
          "@media (min-width:619px) and (max-width:768px)": {
           width:'100%',
           position:'relative',
           left:'10% !important'
          },
        }}
        isHeroHome
        showTobBorder
        bgColor="#FDE2E4"
        {...props}
      />

      {props?.showBreadCrumbs && <BreadcrumbsComponent />}
    </Box>
  );
};

export default HeroSection;
