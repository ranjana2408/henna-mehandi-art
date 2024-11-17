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
          marginTop: "226px",
          "& .MuiBox-root img": {
            maxWidth: "1005px !important",
            maxHeight: "96%",
          },
          "@media (min-width:319px) and (max-width:426px)": {
            "& .MuiBox-root img": {
              marginLeft: "0px",
              maxWidth: "100% !important",
              maxHeight: "auto",
            },
          },
          "@media (min-width:426px) and (max-width:768px)": {
            "& .MuiBox-root img": {
              maxWidth: "722px",
            },
          },
        }}
        featuresBoxStyle={{
          "@media (min-width:768px) and (max-width:1024px)": {
            marginTop: "-35px",
          },
        }}
        height="48"
        isHeroHome
        showTobBorder
        bgColor="#FDE2E4"
        {...props}
        showForm
      />
    </Box>
  );
};

export default HeroSection;
