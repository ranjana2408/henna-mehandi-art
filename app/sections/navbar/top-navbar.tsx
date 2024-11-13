import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function TopNavbar() {
  return (
    <Box sx={{ backgroundColor: grey[900] }}>
      <AppBar
        sx={{
          "@media (min-width:319px) and (max-width:767px)": {
            display: "none",
          },
          display: "flex",
          backgroundColor: grey[900],
          color: "white",
          "&:hover": {
            backgroundColor: grey[900],
          },
          padding: "10px 80px",
          "@media (min-width:319px) and (max-width:425px)": {
            padding: "10px 20px",
          },
          "@media (min-width:425px) and (max-width:768px)": {
            padding: "10px 40px",
          },
          "@media (min-width:769px) and (max-width:1024px)": {
            padding: "10px 60px",
          },
          maxWidth: "1440px",
          margin: "auto",
          justifyContent: "space-between",
          width: "100%",
          gap: "20px",
          flexDirection: "row",
        }}
        position="static"
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <img src="/icons/facebook.svg" height={20} width={20} />
          <img src="/icons/instagram.svg" height={20} width={20} />
          <img src="/icons/tweeter.svg" height={20} width={20} />
          <img src="/icons/linkedine.svg" height={20} width={20} />
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              lineHeight: "2em",
              fontSize: "14px !important",
            }}
          >
            phone: (021) 345 6789
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              lineHeight: "2em",
              fontSize: "14px !important",
            }}
          >
            email: customer@domain.com
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
