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
  outerMainContainerStyle?: any;
  outerContainerStyle?: object;
  button?: { label?: string };
  outerFeatContainerStyle?: any;
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
    image,
    outerMainContainerStyle,
    outerContainerStyle,
    outerImageContainerStyle,
  } = props;

  const { containerStyle, mainContainerStyle, imageContainerStyle } =
    styles;

  const { exact } = useOutletContext<OutletContext>();

  return (
    <Box
      sx={{
        ...mainContainerStyle,
        backgroundColor: bgColor,
        paddingLeft: "173px",
        "@media (min-width:319px) and (max-width:769px)": {
          marginTop: "90px",
          paddingLeft: "0px !important",
        },
        "@media (min-width:769px) and (max-width:1026px)": {
          paddingLeft: "32px",
        },
        ...outerMainContainerStyle,
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          flexDirection: isImageLeft ? "row-reverse" : "row",
          ...containerStyle,
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
                "@media (min-width:319px) and (max-width:769px)": {
                  position: "relative",
                  width: "100%",
                  left: isImageLeft ? "" : "0%",
                },
                "@media (min-width:769px) and (max-width:1026px)": {
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
  mainContainerStyle: {
    position: "relative",
    marginTop: "240px",
    overFlow: "hidden !important",
    "@media (min-width:620px) and (max-width:1026px)": {
      marginTop: "80px",
    },
  },
  containerStyle: {
    maxWidth: "1440px",
    margin: "auto",
    position: "relative",
    "@media (min-width:319px) and (max-width:769px)": {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItmes: "center",
    },
    "@media (min-width:769px) and (max-width:1026px)": {
      alignItmes: "center",
    },
    display: "flex",
  },
  imageContainerStyle: {
    width: "50%",
  },
};
