import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function BottomFooter() {
  
  const styles = {
    appBarStyle: {
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
    },
  };

  return (
    <Box sx={{ backgroundColor: grey[900] }}>
      <AppBar sx={styles.appBarStyle} position="static">
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              lineHeight: "2em",
              fontSize: "12px !important",
              color: "#FDE2E4",
              fontWeight: 600,
              fontFamily: "Open Sans",
              fontStyle: "normal",
              letterSpacing: "2px",
            }}
          >
            © {new Date().getFullYear()} {"Janki's mehndi"}. All rights reserved
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          {["Facebook", "Instagram", "Twitter"].map((item) => (
            <Typography
              key={item}
              sx={{
                textTransform: "uppercase",
                lineHeight: "2em",
                fontSize: "12px !important",
                color: "#FDE2E4",
                fontWeight: 700,
                fontFamily: "Open Sans",
                fontStyle: "normal",
                letterSpacing: "2px",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </AppBar>
    </Box>
  );
}
