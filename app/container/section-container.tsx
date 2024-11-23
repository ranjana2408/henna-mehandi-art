/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Slide } from "@mui/material";
import AppointmentForm from "~/container/appointment-form";
import { useOutletContext } from "@remix-run/react";
import Features from "~/blocks/features";

interface SectionContainerProps {
  image?: string;
  subTitle: string;
  title: string;
  description: string;
  features?: { isShowImage?: boolean; title: string }[];
  bgColor: string;
  showTobBorder?: boolean;
  showForm?: boolean;
  isImageLeft?: boolean;
  height?: string;
  style?: any;
  outerContainerStyle?: object;
  button?: { label?: string };
  featuresBoxStyle?: any;
  isHeroHome?: boolean;
  outerImageContainerStyle?: object;
  showBreadCrumbs?: boolean;
  whyChooseUs?: boolean;
  isAboutPage?:boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = (props) => {
  const {
    bgColor,
    showForm,
    isImageLeft,
    height,
    image,
    style,
    outerContainerStyle,
    outerImageContainerStyle,
  } = props;

  const { featureContainerStyle, featuresMainStyle, imageContainerStyle } =
    styles;

  const { exact } = useOutletContext<OutletContext>();

  return (
    <Box
      sx={{
        ...featuresMainStyle,
        backgroundColor: bgColor,
        paddingLeft: "173px",
        height: `${Number(height)}rem`,
        "@media (min-width:375px) and (max-width:767px)": {
          height: `${Number(height) + 2}rem`,
          marginTop: "90px",
          paddingLeft: "0px !important",
        },
        "@media (min-width:768px) and (max-width:1024px)": {
          paddingLeft: "32px",
        },
        ...style,
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          flexDirection: isImageLeft ? "row-reverse" : "row",
          ...featureContainerStyle,
          ...outerContainerStyle,
        }}
      >
        <Features {...props} />
        {image && (
          <Slide
            timeout={2000}
            direction={isImageLeft ? "left" : "right"}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Box
              sx={{
                ...imageContainerStyle,
                right: isImageLeft ? 0 : "",
                left: isImageLeft ? "" : "50px",
                "@media (min-width:375px) and (max-width:619px)": {
                  position: "relative",
                  width: "100%",
                  left: isImageLeft ? "" : "0",
                },
                "@media (min-width:767px) and (max-width:1024px)": {
                  top: "200px",
                  right: "70px",
                },
                ...outerImageContainerStyle,
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
          timeout={2000}
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

export default SectionContainer;

const styles = {
  featuresMainStyle: {
    position: "relative",
    marginTop: "240px",
    overFlow: "hidden !important",
    "@media (min-width:620px) and (max-width:1023px)": {
      marginTop: "80px",
    },
  },
  featureContainerStyle: {
    maxWidth: "1440px",
    margin: "auto",
    position: "relative",
    "@media (min-width:375px) and (max-width:767px)": {
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
    width: "50%",
  },
};
