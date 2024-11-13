import React, { useEffect, useRef } from "react";
import data from "../../../utils/data.json";
import FeaturesBlock from "~/blocks/features";
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
      <FeaturesBlock
        style={{
          marginTop: "150px",
          "@media (min-width:319px) and (max-width:620px)": {
            marginTop: "280px !important",
            paddingLeft: "10px !important",
          },
        }}
        height="32"
        featuresBoxStyele={{
          maringTop: "150px",
          backgroundColor: "#F8F8F8",
          boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
          paddingBottom: "100px",
          "@media (min-width:319px) and (max-width:767px)": {
            paddingLeft: "20px !important",
          },
        }}
        bgColor="white"
        {...data?.aboutUs}      />
    </Box>
  );
};

export default AboutUs;
