import React from "react";
import { Typography } from "@mui/material";

interface TitleSectionProps {
  subTitle: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  featuresBoxStyele?:any
}

export default function TitleSection({
  subTitle,
  title,
  featuresBoxStyele,
}: TitleSectionProps) {
  return (
    <>
      <Typography sx={{ fontFamily: "Courgette" }} variant="h6" color="#F72585">
        {subTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: "60px !important",
          lineHeight: "62px",
          "@media (min-width:319px) and (max-width:425px)": {
            fontSize: "32px !important",
            lineHeight: "40px",
          },
          "@media (min-width:425px) and (max-width:767px)": {
            fontSize: "42px !important",
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
