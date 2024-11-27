import React, { useEffect, useRef } from "react";
import data from "../../../utils/data.json";
import SectionContainer from "~/container/section-container";
import { useOutletContext } from "@remix-run/react";
import { Box, useMediaQuery } from "@mui/material";

const AboutUs = () => {
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
        outerMainContainerStyle={{
          marginTop: "0px",
          height: "34rem !important",
          "@media (min-width:375px) and (max-width:620px)": {
            marginTop: isSmallLaptop ? "-2px" : "140px !important",
            paddingLeft: "0px !important",
          },
          "@media (min-width:425px) and (max-width:768px)": {
            marginTop: "0px !important",
            height: "48rem !important",
          },
        }}
        outerFeatContainerStyle={{
          width: "100%",
          backgroundColor: "#F8F8F8",
          paddingTop: "250px",
          paddingBottom:'100px',
          boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
          "@media (min-width:375px) and (max-width:767px)": {
            paddingLeft: "32px !important",
            py: "30px !important",
            marginTop:'20px'
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            paddingLeft: "30px !important",
            marginTop: "0px",
            py: "70px !important",
            maxWidth: "360px",
          },
        }}
        outerImageContainerStyle={{
         marginTop:'250px',
        }}
        bgColor="white"
        {...data?.aboutUs}
      />
    </Box>
  );
};

export default AboutUs;
