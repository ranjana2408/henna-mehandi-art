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
          padding: "10px 182px",
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
