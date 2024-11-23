import React from "react";
import { AppBar, Box, Typography } from "@mui/material";


export default function BottomFooter() {
  
  const styles = {
    appBarStyle: {
      display: "flex",
      backgroundColor: '#212121',
      color: "white",
      "&:hover": {
        backgroundColor: '#212121',
      },
      padding: "10px 182px",
      "@media (min-width:375px) and (max-width:426px)": {
        padding: "10px 20px",
        flexDirection: 'column-reverse'
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
    <Box sx={{ backgroundColor: '#212121' }}>
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
