import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import data from "../../../utils/data.json";
import TitleSection from "~/blocks/title-block";
import { useOutletContext } from "@remix-run/react";
import MyStyledButton from "~/component/my-styled-button";

interface OutletContext {
  routeRef: {
    homeRef: null;
    servicesRef: null;
    contactRef: null;
    aboutRef: null;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRouteRef: any;
  exact: string;
}

const Services = () => {
  const isSmallScreen = useMediaQuery(
    "(min-width:319px) and (max-width:769px)"
  );

  const { setRouteRef } = useOutletContext<OutletContext>();
  const ref = useRef(null);
  const [showFeatures, setShowFeatures] = useState<number | null>(0);

  // Determine number of columns based on screen size
  const cols = isSmallScreen ? 1 : 3;

  useEffect(() => {
    if (ref?.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setRouteRef((prevRefs: any) => ({
        ...prevRefs,
        servicesRef: ref,
      }));
    }
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        marginTop: "90px",
        position: "relative",
        "@media (min-width:319px) and (max-width:769px)": {
          marginTop: "10px !important",
        },
        "@media (min-width:769px) and (max-width:1026px)": {
          marginTop: "40px !important",
        },
      }}
    >
      <TitleSection {...data?.services} />
      <Typography
        sx={{
          fontSize: "18px",
          fontFamily: "Open Sans",
          fontWeight: "400",
          paddingTop: "24px",
          color: "#222222",
          paddingBottom: "12px",
          textWrap: "wrap",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        {data?.services?.description}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#F8F8F8",
          height: "72rem",
          position: "relative",
          top: "154px",
          bottom: "0px",
          "@media (min-width:319px) and (max-width:1026px)": {
            height: "min-content",
          },
        }}
      >
        <ImageList
          sx={{
            maxWidth: "1040px",
            position: "absolute",
            top: "-150px",
            rowGap:"32px !important",
          }}
          cols={cols}
        >
          {data.services.items?.map((image, index) => (
            <Box key={image.id} sx={{ maxHeight: "800px" }}>
              <ImageListItem
                sx={{
                  boxShadow: "0 0px 0px rgba(0, 0, 0, 5%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                  position: "relative",
                }}
                onMouseEnter={() => {
                  setShowFeatures(index)}}
                onMouseLeave={() => setShowFeatures(null)}
              >
                <img
                  alt={image.title}
                  src={image.img}
                  loading="lazy"
                  style={{
                    height: "388px",
                    width: "440px",
                    maxWidth: "100%",
                  }}
                />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      right:"0",
                      bottom:"10px",
                      width: "calc(100% - 20px)",
                      height: "calc(100% - 20px)",
                      backgroundColor: "rgba(0, 0, 0, 0.7)", 
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      transition: "opacity 0.3s ease-in-out",
                      opacity: showFeatures===index ? 1 : 0,
                      display:'flex'
                    }}
                  >
                    <Typography variant="h5" sx={{ marginBottom: "10px",fontSize:'25px !important' }}>
                      Features
                    </Typography>
                    <ul>
                      {image.points.map((feature) => (
                        <li key={feature} style={{ marginBottom: "5px",fontSize:'20px' }}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Box>
              </ImageListItem>
              <Typography
                sx={{
                  fontFamily: "Lora",
                  fontSize: "26px",
                  fontWeight: "400",
                  lineHeight: "1.154em",
                  textAlign: "center",
                  "@media (min-width:319px) and (max-width:1026px)": {
                    fontSize: "20px",
                  },
                }}
              >
                {image.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Open Sans",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.563em",
                  letterSpacing: "0.5px",
                  wordSpacing: "1px",
                  textAlign: "center",
                  marginTop: "20px",
                  maxWidth: "440px",
                }}
              >
                {image.description}
              </Typography>
            </Box>
          ))}
        </ImageList>
      </Box>
      <MyStyledButton
        isIcon
        sx={{
          marginTop: "20px",
          backgroundColor: "#F72585",
          color: "white",
          height: "max-content",
          width: "max-content",
          position: "absolute",
          bottom: "-513px",
          "@media (min-width:319px) and (max-width:426px)": {
            bottom:"-4895px",
            fontSize: "10px !important",
          },
          "@media (min-width:424px) and (max-width:507px)": {
            bottom:"-4645px",
          },
          "@media (min-width:507px) and (max-width:769px)": {
            bottom:"-4621px",
            fontSize: "10px !important",
          },
          "@media (min-width:769px) and (max-width:1026px)": {
            bottom:"-1683px",
          },
        }}
      >
        {data?.services?.button?.label}
      </MyStyledButton>
    </Box>
  );
};

export default Services;
