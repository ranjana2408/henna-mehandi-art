/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Slide, Typography } from "@mui/material";
import TitleSection from "../blocks/title-block";
import MyStyledButton from "~/component/my-styled-button";

interface FeaturesBlockProps {
image?:string;
  description: string;
  features?: { isShowImage?: boolean; title: string }[];
  isImageLeft?: boolean;
  button?: { label?: string };
  featuresBoxStyele?: any;
  outerContainerStyle?:object;
  title: string;
  subTitle: string;
  showForm:boolean;
  style?:object;
  bgColor?:string;
  height?:string;
}

const Features: React.FC<FeaturesBlockProps> = (props) => {
  const { description, features, isImageLeft, button, featuresBoxStyele, } =
    props;

  const { featuresStyle } = styles;

  return (
    <Slide
      timeout={2000}
      direction={isImageLeft ? "left" : "right"}
      in={true}
      appear={true}
      easing={{ enter: "ease-in", exit: "ease-out" }}
    >
      <Box sx={{ ...featuresStyle, ...featuresBoxStyele }}>
        <TitleSection {...props} />
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Open Sans",
            fontWeight: "400",
            paddingTop: "24px",
            "@media (min-width:319px) and (max-width:620px)": {
              fontSize: "14px",
            },
            color:
              featuresBoxStyele?.backgroundColor === "#222222"
                ? "white"
                : "#222222",
            paddingBottom: "12px",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "10px",
          }}
        >
          {features?.map(({ title }) => (
            <Box
              key={title}
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <img src="/icons/check-icon.svg" height={30} width={25} />
              <Typography
                sx={{
                  margin: "1px 0",
                  fontSize: "26px",
                  fontStyle: "normal",
                  fontFamily: "Lora Open Sans",
                  lineHeight: "1.154em",
                  "@media (min-width:319px) and (max-width:620px)": {
                    fontSize: "20px",
                  },
                }}
              >
                {title}
              </Typography>
            </Box>
          ))}
        </Box>
        {button && (
          <MyStyledButton
            sx={{
              "@media (min-width:319px) and (max-width:620px)": {
                padding: "10px",
                px: "15px",
                fontSize: "14px !important",
              },
            }}
            isIcon
          >
            {button?.label}
          </MyStyledButton>
        )}
      </Box>
    </Slide>
  );
};

export default Features;

const styles = {
  featuresStyle: {
    px: "80px",
    paddingTop: "137px",
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
  },
};
