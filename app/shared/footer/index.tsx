import React from "react";
import { buttonStyle } from "mui/mui-styles";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Link,
} from "@mui/material";
import BottomFooter from "./bottom-footer";
import { Form, useLocation } from "@remix-run/react";
import MyStyledButton from "~/component/my-styled-button";

const Footer = () => {
  const { fromMainStyle, formStyle, formRow, formColum } = styles;
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
          backgroundSize: "cover",
          position: "relative",
          top: pathname === "/about" ? "400px" : "583px",
          "@media (min-width:375px) and (max-width:767px)": {
            display: "block",
            top: pathname === "/about" ? "28rem" : "292rem",
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            display: "block", 
            top: pathname === "/about" ? "28rem" : "97rem",
          },
        }}
      >
        <Box sx={fromMainStyle}>
          <Box>
            <Typography
              sx={{ color: "black", textAlign: "center" }}
              variant="h6"
            >
              Book Mehandi Schedule
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Elevate your special occasion with the art of henna. We’ll be back
              in touch within 24 hours to confirm your booking and to detail
              next steps needed.
            </Typography>
          </Box>
          <Form method="post" action="/">
            <Box sx={formStyle}>
              <Box sx={formRow}>
                <TextField
                  multiline
                  variant="outlined"
                  fullWidth
                  placeholder="Email..."
                  minRows={1}
                  maxRows={6}
                  sx={{
                    ...formColum,
                    overflow: "hidden", // Hide scrollbar
                    "& .MuiOutlinedInput-root": {
                      "& textarea": {
                        overflow: "hidden", // Hide scrollbar for textarea
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    ...formColum,
                    flex: "1 1 25% !important",
                    "@media (min-width:375px) and (max-width:768px)": {
                      flex: "1 1 100% !important",
                    },
                  }}
                >
                  <MyStyledButton
                    sx={{
                      ...buttonStyle,
                      "@media (min-width:375px) and (max-width:1024px)": {
                        display: "flex",
                        alignItems: "center !important",
                        justifyContent: "center !important",
                        alignSelf: "center !important",
                        padding: "10px",
                        width: "100% ",
                        fontSize: "14px !important",
                        transition: "bounce",
                      },
                    }}
                    isIcon
                  >
                    Book Now
                  </MyStyledButton>
                </Box>
              </Box>
            </Box>
          </Form>
        </Box>
        <Container sx={{ maxWidth: "1110px !important" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "80px",
              "@media (min-width:375px) and (max-width:768px)": {
                paddingTop: "151px",
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
              "@media (min-width:375px) and (max-width:767px)": {
                paddingBottom: "108px",
              }
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

const styles = {
  fromMainStyle: {
    padding: "30px",
    backgroundColor: "white",
    opacity: "0.9",
    position: "absolute",
    zIndex: "999",
    width: "60%",
    marginTop: "-195px",
    maxWidth: "45%",
    mx: "25%",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
    "@media (min-width:375px) and (max-width:767px)": {
      marginTop: "-217px",
      width: "90%",
      maxWidth: "90%",
      mx: "5%",
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      width: "90%",
      mx: "5% !important",
      marginTop: "-164px",
      maxWidth: "75%",
    },
  },
  formStyle: {
    display: "flex",
    gap: "20px",
    flexGrow: "1",
    marginTop: "25px",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "5px",
    width: "798px",
    "@media (min-width:375px) and (max-width:767px)": {
      display: "block",
    },
  },
  formColum: {
    flex: "1 1 75% !important",
  },
};
