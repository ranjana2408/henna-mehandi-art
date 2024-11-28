/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Slide, Typography } from "@mui/material";
import TitleSection from "../blocks/title-block";
import MyStyledButton from "~/component/my-styled-button";
import BreadcrumbsComponent from "~/component/breadcrumbs";

interface FeaturesBlockProps {
  image?: string;
  description: string;
  features?: { isShowImage?: boolean; title: string }[];
  isImageLeft?: boolean;
  button?: { label?: string };
  outerFeatContainerStyle?: any;
  title: string;
  subTitle: string;
  showForm?: boolean;
  outerMainContainer?: object;
  bgColor?: string;
  height?: string;
  whyChooseUs?: boolean;
  isAboutPage?: boolean;
  showBreadCrumbs?:boolean;
}

const Features: React.FC<FeaturesBlockProps> = (props) => {
  const {
    description,
    features,
    isImageLeft,
    button,
    outerFeatContainerStyle,
    whyChooseUs,
    isAboutPage,
    showBreadCrumbs
  } = props;

  const { featContainerStyle } = styles;
  const isAboutUs=Boolean(isAboutPage&&whyChooseUs)

  return (
    <Slide
      timeout={2000}
      direction={isImageLeft ? "left" : "right"}
      in={true}
      appear={true}
      easing={{ enter: "ease-in", exit: "ease-out" }}
    >
      <Box sx={{ ...featContainerStyle, ...outerFeatContainerStyle }}>
        <TitleSection {...props} isAboutUs={isAboutUs}/>
        {showBreadCrumbs && <BreadcrumbsComponent />}
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Open Sans",
            fontWeight: "400",
            paddingTop: "24px",
            textAlign:isAboutUs?'center':'start',
            "@media (min-width:375px) and (max-width:620px)": {
              fontSize: "14px",
            },
            color:
              outerFeatContainerStyle?.backgroundColor === "#222222"
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
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px", // Adjust gap between items
            }}
          >
            {features?.map(({ title }) => (
              <Box
                key={title}
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  flex: isAboutUs ? "1 1 calc(50% - 10px)" : "1 1 100%", 
                  "@media (min-width:375px) and (max-width:767px)": {
                    flex:  "1 1 100%", 
                  },
                }}
              >
                <img
                  src="/icons/check-icon.svg"
                  height={30}
                  width={25}
                  alt="check icon"
                />
                <Typography
                  sx={{
                    margin: "1px 0",
                    fontSize: "26px",
                    fontStyle: "normal",
                    fontFamily: "Lora, Open Sans", // Ensure proper font stack
                    lineHeight: "1.154em",
                    "@media (min-width: 375px) and (max-width: 620px)": {
                      fontSize: "20px",
                    },
                  }}
                >
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {button && (
          <MyStyledButton
            sx={{
              "@media (min-width:375px) and (max-width:620px)": {
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
  featContainerStyle: {
    pl: "80px",
    paddingTop: "137px",
    paddingRight: "54px",
    width: "50%",
    "@media (min-width:375px) and (max-width:426px)": {
      width: "100%",
      padding: "20px",
    },
    "@media (min-width:426px) and (max-width:620px)": {
      width: "100%",
      padding: "40px",
      paddingTop: "20px",
    },
    "@media (min-width:620px) and (max-width:1024px)": {
      paddingLeft: "32px",
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      padding: "60px",
      paddingLeft: "32px",
      paddingTop: "20px",
    },
    display: "flex",
    flexDirection: "column",
  },
};
