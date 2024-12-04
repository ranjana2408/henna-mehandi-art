import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
} from "@mui/material";
import BottomFooter from "./bottom-footer";
import {  useLocation } from "@remix-run/react";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Box
        component="footer"
        sx={{
          color: "white",
          py: 6,
          mt: "auto",
          backgroundImage: "url(/pattern-footer.png)",
          backgroundSize: "auto",
          position:'relative',
          "@media (min-width:319px) and (max-width:769px)": {
            display: "block",
            marginTop:pathname === "/about" ?'-39px':"-31px",
          },
          "@media (min-width:769px) and (max-width:1026px)": {
            display: "block",
            marginTop:pathname === "/about" ?'0px': "-41px",
          },
        }}
      >
        <Container sx={{ maxWidth: "1110px !important" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "@media (min-width:319px) and (max-width:769px)": {
                paddingTop: "15px",
              },
            }}
          >
            <img src="/logo.png" alt="Logo" />
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "Open Sans",
                fontWeight: "400",
                paddingTop: "24px",
                color: "#222222",
                paddingBottom: "12px",
                textAlign: "center",
                maxWidth: "900px",
              }}
            >
              Orcinteger faucibus odio cursus facilisi sitenim egestas ele
              imperdiet etiam situ eltrices vestibulum sit. Orcinteger faucibus
              odio cursus facilisi sitenim.
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              borderTop: "1px dotted pink",
              width: "100%",
              marginTop: "30px",
              paddingTop: "30px",
              paddingBottom: "40px",
              "@media (min-width:319px) and (max-width:426px)": {
                paddingBottom: "108px",
              },
              "@media (min-width:426px) and (max-width:1026px)": {
                paddingBottom: "55px",
              },
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" color="black" gutterBottom>
                Quick Menu
              </Typography>
              <Box
                sx={{ display: "flex", gap: "9px", flexDirection: "column" }}
              >
                <Link sx={{ textDecoration: "none" }} href="/">
                  <Typography color="black" variant="body2">
                    Home
                  </Typography>
                </Link>
                <Link sx={{ textDecoration: "none" }} href="/about">
                  <Typography color="black" variant="body2">
                    About
                  </Typography>
                </Link>
                <Typography color="black" variant="body2">
                  Services
                </Typography>
                <Typography color="black" variant="body2">
                  Portfolio
                </Typography>
                <Typography color="black" variant="body2">
                  Contact Us
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography color="black" variant="h6" gutterBottom>
                Support
              </Typography>
              <Box
                sx={{ display: "flex", gap: "9px", flexDirection: "column" }}
              >
                <Typography color="black" variant="body2">
                  Help Center
                </Typography>
                <Typography color="black" variant="body2">
                  Privacy Policy
                </Typography>
                <Typography color="black" variant="body2">
                  Terms of Service
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography color="black" variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box
                sx={{ display: "flex", gap: "9px", flexDirection: "column" }}
              >
                <Typography color="black" variant="body2">
                  Facebook
                </Typography>
                <Typography color="black" variant="body2">
                  Twitter
                </Typography>
                <Typography color="black" variant="body2">
                  Instagram
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ position: "absolute", bottom: "0px", width: "100%" }}>
          <BottomFooter />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
