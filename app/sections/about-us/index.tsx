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
          "@media (min-width:375px) and (max-width:425px)": {
            marginTop:'5px !important'
          }
        }}
        outerFeatContainerStyle={{
          width: "100%",
          backgroundColor: "#F8F8F8",
          paddingTop: isAboutPage ? "100px" : "250px",
          paddingBottom: isAboutPage ? "130px" :"100px",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
          "@media (min-width:375px) and (max-width:767px)": {
            paddingLeft: "32px !important",
            py: "30px !important",
            marginTop: "20px",
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            paddingLeft: "30px !important",
            marginTop: "0px",
            py: "70px !important",
            maxWidth: "493px",
          },
        }}
        outerImageContainerStyle={{
          marginTop: isAboutPage ? "110px" : "250px",
          "@media (min-width:375px) and (max-width:425px)": {
            marginTop:'185px !important'
          },
          "@media (min-width:768px) and (max-width:1024px)":{
             marginTop:'104px !important'
          }
        }}
        bgColor="white"
        {...data?.aboutUs}
      />
    </Box>
  );
};

export default AboutUs;
