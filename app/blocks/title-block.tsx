import React from "react";
import { Typography } from "@mui/material";

interface TitleSectionProps {
  subTitle: string;
  title: string;
  color?: string;
  outerFeatContainerStyle?: {backgroundColor:string};
  isHeroHome?: boolean;
  isAboutUs?:boolean;
}

export default function TitleSection({
  subTitle,
  title,
  outerFeatContainerStyle,
  isHeroHome,
  color,
  isAboutUs
}: TitleSectionProps) {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontWeight: "600",
          textTransform:'uppercase',
          textAlign:isAboutUs?'center':'start',
        }}
        color={color ? color : "#F72585"}
      >
        {subTitle}
      </Typography>
      <Typography
        sx={{
          marginTop: "10px",
          fontSize: isHeroHome ? "74px !important" : "64px !important",
          lineHeight: "1.059em",
          textTransform:'captilized',
          textAlign:isAboutUs?'center':'start',
          "@media (min-width:319px) and (max-width:426px)": {
            fontSize: isHeroHome ? "32px !important" : "28px !important",
            lineHeight: "40px",
          },
          "@media (min-width:426px) and (max-width:769px)": {
            fontSize: isHeroHome ? "42px !important" : "28px !important",
            lineHeight: "50px",
          },
          "@media (min-width:769px) and (max-width:1440px)": {
            fontSize: isHeroHome ? "48px !important" : "28px !important",
            lineHeight: "57px",
          },
          fontFamily: "Lora, Open Sans",
          textOverflow: "ellipsis",
          color:
          outerFeatContainerStyle?.backgroundColor === "#222222"
              ? "white"
              : "#222222",
        }}
        variant="h4"
      >
        {title}
      </Typography>
    </>
  );
}
