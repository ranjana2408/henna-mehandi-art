import React from "react";
import {  Typography } from "@mui/material";

interface TitleSectionProps {
  subTitle: string;
  title: string;
}

export default function TitleSection({ subTitle, title }: TitleSectionProps) {

  return (
    <>
      <Typography sx={{ fontFamily: "Courgette"}} variant="h6" color="#F72585">
        {subTitle}
      </Typography>
      <Typography sx={{fontSize:'35px !important',  "@media (min-width:319px) and (max-width:767px)": {
                fontSize: "25px !important",
              },
              fontFamily: "Courgette", textOverflow:"ellipsis"}}  variant="h4">{title}</Typography>
    </>
  );
}

