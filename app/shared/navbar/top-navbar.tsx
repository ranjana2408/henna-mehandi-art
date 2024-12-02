import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

export default function TopNavbar() {
  return (
    <Box sx={{ backgroundColor: '#212121' }}>
      <AppBar
        sx={{
          "@media (min-width:319px) and (max-width:769px)": {
            display: "none",
          },
          display: "flex",
          backgroundColor: '#212121',
          color: "white",
          "&:hover": {
            backgroundColor: '#212121',
          },
          padding: "10px 182px",
          "@media (min-width:319px) and (max-width:426px)": {
            padding: "10px 20px",
          },
          "@media (min-width:426px) and (max-width:1440px)": {
            padding: "10px 40px !important",
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
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/icons/facebook.svg" height={16} width={16} />
          <img src="/icons/twitter.svg" height={16} width={16} />
          <img src="/icons/youtube.svg" height={16} width={16} />
          <img src="/icons/instagram.svg" height={16} width={16} />
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              lineHeight: "2em",
              fontSize: "14px !important",
              color: "#FDE2E4",
              fontWeight: 700,
              fontFamily: "Open Sans",
              fontStyle:'normal',
              letterSpacing:'2px'
            }}
          >
            phone: (021) 345 6789
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              lineHeight: "2em",
              fontSize: "14px !important",
              color: "#FDE2E4",
              fontWeight: 700,
              fontFamily: "Open Sans",
              fontStyle:'normal',
              letterSpacing:'2px'
            }}
          >
            email: customer@domain.com
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
