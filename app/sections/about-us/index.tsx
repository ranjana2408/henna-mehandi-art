import React, { useEffect, useRef } from "react";
import data from "../../../utils/data.json";
import SectionContainer from "~/container/section-container";
import { useOutletContext } from "@remix-run/react";
import { Box } from "@mui/material";

const AboutUs = () => {
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
        style={{
          marginTop: "0px",
          "& .MuiBox-root img": {
            top: "160px",
            position: 'relative',
          },
          "@media (min-width:319px) and (max-width:620px)": {
            marginTop: "240px !important",
            paddingLeft: "10px !important",
            "& .MuiBox-root img": {
              marginTop: "10px",
            },
          },
        }}
        height="52"
        featuresBoxStyele={{
          width: "100%",
          backgroundColor: "#F8F8F8",
          paddingTop: "185px",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
          paddingBottom: "150px",
          "@media (min-width:319px) and (max-width:767px)": {
            paddingLeft: "20px !important",
          },
        }}
        bgColor="white"
        {...data?.aboutUs}
      />
    </Box>
  );
};

export default AboutUs;
