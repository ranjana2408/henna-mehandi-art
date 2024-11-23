import React, { useEffect, useRef } from "react";
import data from "../../../utils/data.json";
import SectionContainer from "~/container/section-container";
import { useOutletContext } from "@remix-run/react";
import { Box, useMediaQuery } from "@mui/material";

const AboutUs = ({ isAboutPage }: { isAboutPage: boolean }) => {
  const { setRouteRef } = useOutletContext<OutletContext>();
  const ref = useRef(null);
  const isSmallLaptop = useMediaQuery(
    "(min-width:375px) and (max-width:1024px)"
  );

  useEffect(() => {
    if (ref?.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setRouteRef((prevRefs: any) => ({ ...prevRefs, aboutRef: ref }));
    }
  }, []);

  return (
    <Box ref={ref}>
      <SectionContainer
        isImageLeft
        style={{
          marginTop: "0px",
          "@media (min-width:375px) and (max-width:620px)": {
            marginTop: isSmallLaptop ? "-2px" : "140px !important",
            paddingLeft: "0px !important",
          },
        }}
        height={isSmallLaptop ? "38" : "52"}
        featuresBoxStyle={{
          width: "100%",
          backgroundColor: "#F8F8F8",
          paddingTop: "185px",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
          paddingBottom: "150px",
          "@media (min-width:375px) and (max-width:767px)": {
            paddingLeft: "32px !important",
            marginTop: isAboutPage ? "37px" : "180px",
            py: "50px !important",
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            paddingLeft: "30px !important",
            marginTop: "0px",
            py: "70px !important",
            maxWidth: "360px",
          },
        }}
        outerImageContainerStyle={{
          position:isAboutPage?'relative':'',
          "& img": {
            position: isAboutPage?"absolute":'relative',
            top: "180px",
            bottom: isAboutPage?'-405px !important':'',
          },
          "@media (min-width:375px) and (max-width:768px)": {
            "& img": {
              marginTop: "10px",
              paddingLeft: "10px",
              top: isAboutPage ? "15px" : "180px",
              position: "relative",
            },
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            "& img": {
              top: isAboutPage ? "105px" : "180px",
             
            },
          },
        }}
        bgColor="white"
        {...data?.aboutUs}
      />
    </Box>
  );
};

export default AboutUs;
