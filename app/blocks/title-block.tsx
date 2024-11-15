import React from "react";
import { Typography } from "@mui/material";

interface TitleSectionProps {
  subTitle: string;
  title: string;
  color?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  featuresBoxStyele?: any;
  isHeroHome?: boolean;
}

export default function TitleSection({
  subTitle,
  title,
  featuresBoxStyele,
  isHeroHome,
  color,
}: TitleSectionProps) {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontWeight: "600",
          textTransform: "uppercase",
        }}
        color={color ? color : "#F72585"}
      >
        {subTitle}
      </Typography>
      <Typography
        sx={{
          marginTop: "10px",
          fontSize: isHeroHome ? "85px !important" : "64px !important",
          lineHeight: "1.059em",
          "@media (min-width:319px) and (max-width:425px)": {
            fontSize: isHeroHome ? "42px !important" : "28px !important",
            lineHeight: "40px",
          },
          "@media (min-width:425px) and (max-width:767px)": {
            fontSize: isHeroHome ? "42px !important" : "28px !important",
            lineHeight: "40px",
          },
          fontFamily: "Courgette",
          textOverflow: "ellipsis",
          color:
            featuresBoxStyele?.backgroundColor === "#222222"
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
