import React, { useEffect, useRef } from "react";
import FeaturesBlock from "~/blocks/features";
import data from "../../../utils/data.json";
import { useOutletContext } from "@remix-run/react";
import { Box } from "@mui/material";

const HeroSection = () => {
  const { setRouteRef, } = useOutletContext<OutletContext>();
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setRouteRef((prevRefs: any) => ({ ...prevRefs, homeRef: ref }));
    }
  }, []);

  return (
    <Box ref={ref}>
      <FeaturesBlock
        style={{
          "& .MuiBox-root img": {
            marginLeft: "160px",
          },
          "@media (min-width:319px) and (max-width:1024px)": {
            "& .MuiBox-root img": {
              marginLeft: "0px",
            },
          },
        }}
        height="38"
        isImageRight
        showTobBorder
        bgColor="#FDE2E4"
        {...data?.heroSection}
        showForm
      />
    </Box>
  );
};

export default HeroSection;
