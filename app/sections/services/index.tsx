// MehndiGallery.js
import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import data from "../../../utils/data.json";
import TitleSection from "~/blocks/title-section";
import { useOutletContext } from "@remix-run/react";

interface OutletContext {
  routeRef: {
    homeRef: null;
    servicesRef: null;
    contactRef: null;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRouteRef:any,
  exact: string;
}

const Services = () => {
  const isSmallScreen = useMediaQuery(
    "(min-width:319px) and (max-width:620px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width:425px) and (max-width:768px)"
  );
  const { setRouteRef, exact } = useOutletContext<OutletContext>();
  const ref = useRef(null);

  // Determine number of columns based on screen size
  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  useEffect(() => {
    if (ref?.current) {
      setRouteRef({ servicesRef: ref });
    }
  }, [ref]);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        paddingTop: exact === "Services" ? "170px" : "0px",
        "@media (min-width:319px) and (max-width:425px)": {
          marginTop: "219px",
        },
        "@media (min-width:425px) and (max-width:768px)": {
          marginTop: "265px",
        },
      }}
    >
      <TitleSection {...data?.services} />
      <ImageList cols={cols}>
        {data.services.gallary?.map((image) => (
          <ImageListItem
            key={image.id}
            sx={{
              boxShadow: "0 0px 0px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "7px",
            }}
          >
            <img
              alt={image.title}
              src={image.img}
              loading="lazy"
              style={{
                width: "288px",
                height: "300px",
              }}
            />
            <Button
              sx={{
                marginTop: "20px",
                backgroundColor: "#F72585",
                color: "white",
                height: "max-content",
                width: "max-content",
                "@media (min-width:319px) and (max-width:1023px)": {
                  fontSize: "10px !important",
                },
              }}
            >
              {image?.title}
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Services;
