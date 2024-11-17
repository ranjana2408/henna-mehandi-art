// MehndiGallery.js
import React, { useRef, useEffect } from "react";
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
// import MyStyledButton from "~/component/my-styled-button";

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
    "(min-width:319px) and (max-width:767px)"
  );
 
  const { setRouteRef } = useOutletContext<OutletContext>();
  const ref = useRef(null);

  // Determine number of columns based on screen size
  const cols = isSmallScreen ? 1  : 3;

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
        marginTop: "20px",
        "@media (min-width:319px) and (max-width:1024px)": {
          marginTop: "60px !important",
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
          "@media (min-width:319px) and (max-width:1024px)": {
            height: "min-content",
          },
        }}
      >
        <ImageList
          sx={{
            maxWidth: "1040px",
            position: "absolute",
            top: "-150px",
          }}
          cols={cols}
        >
          {data.services.items?.map((image) => (
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
              >
                <img
                  alt={image.title}
                  src={image.img}
                  loading="lazy"
                  style={{
                    height:"388px",
                    width:'440px',
                    maxWidth:'100%'
                  }}
                />
              </ImageListItem>
              <Typography
                sx={{
                  fontFamily: "Lora",
                  fontSize: "26px",
                  fontWeight: "400",
                  lineHeight: "1.154em",
                  textAlign: "center",
                  "@media (min-width:319px) and (max-width:1024px)": {
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
                }}
              >
                {image.description}
              </Typography>
            </Box>
          ))}
        </ImageList>
        {/* <Box
          sx={{
            maxHeight: "800px",
            display: "flex",
            justifyContent: "center",
            flexDirection:'column',
            alignItems: "center",
          }}
        >
          <ImageListItem
            sx={{
              boxShadow: "0 0px 0px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              position: "relative",
            }}
          >
            <img
              alt={lastItem.title}
              src={lastItem.img}
              loading="lazy"
              style={{
                width: "320px",
                height: "388px",
              }}
            />
          </ImageListItem>
          <Typography
            sx={{
              fontFamily: "Lora",
              fontSize: "26px",
              fontWeight: "400",
              lineHeight: "1.154em",
              textAlign: "center",
              "@media (min-width:319px) and (max-width:1024px)": {
                fontSize: "20px",
              },
            }}
          >
            {lastItem.title}
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
            }}
          >
            {lastItem.description}
          </Typography>
        </Box> */}
        {/* <MyStyledButton
          isIcon
          sx={{
            marginTop: "20px",
            backgroundColor: "#F72585",
            color: "white",
            height: "max-content",
            width: "max-content",
            // bottom: "50px",
            "@media (min-width:319px) and (max-width:1023px)": {
              fontSize: "10px !important",
            },
          }}
        >
          {data?.services?.button?.label}
        </MyStyledButton> */}
      </Box>
    </Box>
  );
};

export default Services;
