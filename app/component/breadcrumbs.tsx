import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ROUTES } from "utils/constants";
import { useLocation } from "@remix-run/react";

const BreadcrumbsComponent = () => {
  const navigate = useNavigate();
  const { pathname }: any = useLocation();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "15px",
        position: "absolute",
        top: "425px",
        left: "255px",
        "@media (min-width: 375px) and (max-width: 1024px)":{
            top: "629px",
            left: "22px",
        }
      }}
    >
      {Object.values(ROUTES).map((item, index) => (
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            color: pathname === item ? "#F72585" : "black",
          }}
          key={item}
          onClick={() => handleClick(item)}
        >
          {item.split("/")[1]}{" "}
          {index < Object.values(ROUTES).length - 1 && " >"}
        </Typography>
      ))}
    </Box>
  );
};

export default BreadcrumbsComponent;
