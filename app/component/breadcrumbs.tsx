import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ROUTES } from "utils/constants";
import { useLocation  } from "@remix-run/react";

const BreadcrumbsComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "15px",
        marginTop:'20px'
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

