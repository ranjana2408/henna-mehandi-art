import React from "react";
import { Box, Typography, Container, Grid, Link, ImageList, ImageListItem } from "@mui/material";
import BottomFooter from "./bottom-footer";
import { useLocation } from "@remix-run/react";
import data from '../../../utils/data.json'

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
          position: "relative",
          "@media (min-width:319px) and (max-width:769px)": {
            display: "block",
            marginTop: pathname === "/about" ? "-39px" : "-31px",
          },
          "@media (min-width:769px) and (max-width:1026px)": {
            display: "block",
            marginTop: pathname === "/about" ? "0px" : "-41px",
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
            <Typography
              sx={{
                fontSize: "32px",
                fontFamily: "Lora",
                fontWeight: "700",
                paddingTop: "24px",
                color: "#222222",
                paddingBottom: "12px",
                textAlign: "center",
                maxWidth: "900px",
                padding: "0.5rem",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-8px",
                  width: "60%",
                  height: "32px",
                  border: "1px solid #F72585",
                  borderBottom: "none",
                  borderRight: "none",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "97px",
                  width: "62%",
                  height: "21px",
                  border: "1px solid #F72585",
                  borderLeft: "none",
                  borderTop: "none",
                },
              }}
            >
              {"Janki's mehndi"}
            </Typography>
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
              variant="h6"
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
                {["Home", "About"].map((item, index) =>
                  index < 2 ? (
                    <Link
                      key={item}
                      sx={{ textDecoration: "none" }}
                      href={`/${item.toLowerCase()}`}
                    >
                      <Typography color="black" variant="body2">
                        {item}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography key={item} color="black" variant="body2">
                      {item}
                    </Typography>
                  )
                )}
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
            <Grid item xs={12} sm={6} md={4}>
              <Typography color="black" variant="h6" gutterBottom>
                Gallary
              </Typography>
              <ImageList
              cols={4}
              >
              {data.services.items.slice(0,8)?.map((image) => (
                <Box key={image.id} sx={{ maxHeight: "800px" }}>
                  <ImageListItem
                  sx={{border:'5px solid gray'}}
                  >
                    <img
                      alt={image.title}
                      src={image.img}
                      loading="lazy"
                      style={{
                        height: "100px",
                        width: "200px",
                        maxWidth: "100%",
                      }}
                    />
                  </ImageListItem>
                </Box>
              ))}
            </ImageList>
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
