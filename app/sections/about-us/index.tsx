import React, { useEffect, useRef } from "react";
import data from "../../../utils/data.json";
import SectionContainer from "~/container/section-container";
import { useOutletContext } from "@remix-run/react";
import { Box } from "@mui/material";

const AboutUs = ({ isAboutPage }: { isAboutPage: boolean }) => {
  const { setRouteRef } = useOutletContext<OutletContext>();
  const ref = useRef(null);

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
          height: isAboutPage ? "30rem" : "34rem !important",
          '@media (min-width: 319px) and (max-width: 376px)': {
              marginTop: '-41px !important',
              height: '32rem !important',
            },
          "@media (min-width:376px) and (max-width:426px)": {
            marginTop: "5px !important",
            height: isAboutPage ? "30rem" : "46rem !important",
          },
          "@media (min-width:426px) and (max-width:769px)": {
            marginTop: "10px !important",
          },
        }}
        outerContainerStyle={{
          "@media (min-width:319px) and (max-width:769px)": {
            flexDirection: isAboutPage ? "column !important" : "column-reverse",
          },
        }}
        outerFeatContainerStyle={{
          width: "100%",
          backgroundColor: "#F8F8F8",
          paddingTop: isAboutPage ? "100px" : "213px",
          paddingBottom: isAboutPage ? "130px" : "200px",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
          "@media (min-width:319px) and (max-width:769px)": {
            paddingLeft: "32px !important",
            py: "30px !important",
            marginTop: "20px",
          },
          "@media (min-width:769px) and (max-width:1026px)": {
            paddingLeft: "30px !important",
            marginTop: "0px",
            py: "70px !important",
            paddingTop: "130px",
            maxWidth: "493px",
          },
        }}
        outerImageContainerStyle={{
          marginTop: isAboutPage ? "110px" : "213px",
          "@media (min-width:319px) and (max-width:481px)": {
            marginTop: isAboutPage ? "25px !important" : "151px !important",
          },
          "@media (min-width:481px) and (max-width:507px)": {
            marginTop: isAboutPage ? "30px !important" :"204px !important",
          },
          "@media (min-width:507px) and (max-width:1026px)": {
            marginTop: isAboutPage ? "30px !important" :"117px !important",
          },
        }}
        bgColor="white"
        {...data?.aboutUs}
      />
    </Box>
  );
};

export default AboutUs;
