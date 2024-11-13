/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Button, Slide, Typography } from "@mui/material";
import AppointmentForm from "~/forms/appointment-form";
import TitleSection from "../title-section";
import { useOutletContext } from "@remix-run/react";

interface FeaturesBlockProps {
  image?: string;
  subTitle: string;
  title: string;
  description: string;
  features?: { isShowImage?: boolean; title: string }[];
  bgColor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clientDetails?: any;
  showTobBorder?: boolean;
  showForm?: boolean;
  isImageRight?: boolean;
  height?: string;
  style?: any;
  outerContainerStyle?: object;
  button?: { label?: string };
  featuresBoxStyele?: any;
}

const FeaturesBlock: React.FC<FeaturesBlockProps> = (props) => {
  const {
    description,
    features,
    bgColor,
    showForm,
    showTobBorder,
    isImageRight,
    height,
    image,
    button,
    style,
    clientDetails,
    featuresBoxStyele,
    outerContainerStyle,
  } = props;

  const {
    featuresStyle,
    featureContainerStyle,
    featuresMainStyle,
    imageContainerStyle,
    buttonStyle
  } = styles;
  
  const { exact } = useOutletContext<OutletContext>();

  return (
    <Box
      sx={{
        ...featuresMainStyle,
        backgroundColor: bgColor,
        paddingLeft: "150px",
        borderTop: showTobBorder ? "1px solid  #e3acb0" : "",
        height: `${Number(height)}rem`,
        "@media (min-width:319px) and (max-width:620px)": {
          height: `${Number(height) + 26}rem`,
          marginTop: "90px",
          paddingLeft: "0px !important",
        },
        "@media (min-width:620px) and (max-width:767px)": {
          paddingLeft: "20px",
        },
        ...style,
      }}
    >
      <Box
        sx={{
          flexDirection: isImageRight ? "row" : "row-reverse",
          ...featureContainerStyle,
          ...outerContainerStyle, 
        }}
      >
        <Slide
          timeout={500}
          direction={isImageRight ? "right" : "left"}
          in={true}
          mountOnEnter
          unmountOnExit
        >
          <Box sx={{ ...featuresStyle, ...featuresBoxStyele }}>
            <TitleSection {...props} />
            <Typography
              sx={{
                fontSize: "18px",
                color:
                  featuresBoxStyele?.backgroundColor === "#222222"
                    ? "white"
                    : "#222222",
                paddingBottom: "12px",
              }}
            >
              {description}
            </Typography>
            {features?.map(({ title }) => (
              <Box
                key={title}
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                <img src="/icons/check-icon.svg" height={30} width={30} />
                <p style={{ margin: "1px 0", fontSize: "18px" }}>
                  <b>{title}</b> {description}
                </p>
              </Box>
            ))}
            {clientDetails}
            {button && <Button sx={buttonStyle}>{button?.label}</Button>}
          </Box>
        </Slide>
        {image && (
          <Slide
            timeout={500}
            direction={isImageRight ? "left" : "right"}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Box
              sx={{
                ...imageContainerStyle,
                right: isImageRight ? 0 : "",
                left: isImageRight ? "" : "50px",
                "@media (min-width:319px) and (max-width:619px)": {
                  position: "relative",
                  width: "100%",
                  left: isImageRight ? "" : "0",
                },
                "@media (min-width:767px) and (max-width:1024px)": {
                  top: "200px",
                  right: "70px",
                },
              }}
            >
              <img
                src={image}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Slide>
        )}
      </Box>
      {showForm && (
        <Slide
          timeout={500}
          direction={"up"}
          in={true}
          mountOnEnter
          unmountOnExit
        >
          <Box
            sx={{
              maxWidth: "1440px",
              margin: "auto",
              paddingTop: exact === "Home" ? "240px" : "0px",
            }}
          >
            <AppointmentForm />
          </Box>
        </Slide>
      )}
    </Box>
  );
};

export default FeaturesBlock;

const styles = {
  featuresMainStyle: {
    position: "relative",
    marginTop: "240px",
    "@media (min-width:620px) and (max-width:1023px)": {
      marginTop: "80px",
    },
  },
  featureContainerStyle: {
    maxWidth: "1440px",
    margin: "auto",
    position: "relative",
    "@media (min-width:319px) and (max-width:619px)": {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItmes: "center",
    },
    "@media (min-width:767px) and (max-width:1024px)": {
      alignItmes: "center",
    },
    display: "flex",
  },
  imageContainerStyle: {
    position: "absolute",
    bottom: "0",
    top: "0px",
    width: "50%",
  },
  featuresStyle: {
    px: "80px",
    paddingTop: "70px",
    width: "50%",
    "@media (min-width:319px) and (max-width:426px)": {
      width: "100%",
      padding: "20px",
    },
    "@media (min-width:426px) and (max-width:620px)": {
      width: "100%",
      padding: "40px",
      paddingTop: "20px",
    },
    "@media (min-width:620px) and (max-width:1024px)": {
      paddingLeft: "10px",
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      padding: "60px",
      paddingTop: "20px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  buttonStyle: {
    backgroundColor: "#F72585",
    color: "white",
    height: "max-content",
    width: "max-content",
    padding: "15px",
    "@media (min-width:319px) and (max-width:1023px)": {
      fontSize: "10px !important",
      padding: "10px",
    },
  },
};
