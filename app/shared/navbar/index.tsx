import React, { useState } from "react";
import {
  Box,
  ListItem,
  List,
  ListItemText,
  useMediaQuery,
  AppBar,
  Drawer,
} from "@mui/material";
import TopNavbar from "./top-navbar";
import data from "../../../utils/data.json";
import { Link, useOutletContext } from "@remix-run/react";
import MyStyledButton from "~/component/my-styled-button";
interface OutletContext {
  routeRef: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    portfolioRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    appointmentRef: React.RefObject<HTMLDivElement>;
  };
  exact: string;
  setExact: (arg: string) => void;
}

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(min-width:375px) and (max-width:767px)");
  const [showMenu, setShowMenu] = useState(false);
  const { routeRef, setExact, exact } = useOutletContext<OutletContext>();

  const { navStyle, navItemsStyle, navListStyle, navMenuIconStyle } = styles;

  const handleClick = (type: string) => {
    setExact(type);
    switch (type) {
      case "Home":
        return routeRef?.homeRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "About":
        return routeRef?.aboutRef?.current?.scrollIntoView({
          behavior: "smooth",
        });

      case "Services":
        return routeRef?.servicesRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "Porfolio":
        return routeRef?.portfolioRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "Appointment":
        return routeRef?.appointmentRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "Contact":
        setExact(type);
        return routeRef?.contactRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  return (
    <AppBar elevation={0} sx={{ backgroundColor: "white", padding: "0px" }}>
      <TopNavbar />
      <Box sx={{ display: isMobile ? "none" : "flex", alignSelf: "center" }}>
        <img
          src={data?.navbar?.logo}
          alt="Logo"
          style={{
            width: isMobile ? "100px" : "196px",
            height: "62",
            maxWidth: "200px",
            padding: "25px 0",
          }}
        />
      </Box>
      <Box sx={{ backgroundColor: "white", borderTop: "1px solid #FDE2E4" }}>
        <Box position="static" sx={navStyle}>
          <Box
            sx={{
              ...navItemsStyle,
              display: isMobile ? "flex" : "block",
              justifyItems: isMobile ? "center" : "start",
              alignItems: isMobile ? "center" : "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={navMenuIconStyle}>
                <img
                  src={
                    showMenu
                      ? "/icons/close-icon.svg"
                      : "/icons/menu-navbar.svg"
                  }
                  alt="menu"
                  width={20}
                  onClick={() => setShowMenu(!showMenu)}
                />
              </Box>
              <Box sx={{ display: isMobile ? "block" : "none" }}>
                <img
                  src={data?.navbar?.logo}
                  alt="Logo"
                  style={{
                    width: isMobile ? "100px" : "150px",
                    height: "auto",
                    display: "flex",
                    alignSelf: "center",
                    padding: "25px 0",
                  }}
                />
              </Box>
            </Box>
            <List
              sx={{
                ...navListStyle,
                "@media (min-width:320px) and (max-width:767px)": {
                  gap: "10px",
                  display: "none",
                },
                "a":{
                  textDecoration:'none'
                }
              }}
              component="nav"
              aria-label="navigation"
            >
              {data?.navbar?.links?.map(({ label,url }) => (
                <Link to={url??"#"} key={label}>
                  <ListItem  onClick={() => handleClick(label)}>
                    <ListItemText
                      sx={{
                        color: `${exact === label ? "#F72585" : "black"}`,
                        cursor: "pointer",
                        "& .MuiTypography-root": {
                          textTransform: "uppercase",
                          lineHeight: "2em",
                          fontSize: "14px !important",
                          fontWeight: "700",
                          fontFamily: "Open Sans",
                          fontStyle: "normal",
                          letterSpacing: "2px",
                        },
                      }}
                      primary={label}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
            <Drawer
              variant="permanent"
              open={showMenu}
              onClose={() => setShowMenu(false)}
              transitionDuration={1000}
              sx={{
                "& .MuiDrawer-paper": {
                  background: "white",
                  boxSizing: "border-box",
                  width: "100%",
                  top: "65px",
                  height: showMenu ? "calc(100% - 230px)" : "0px", // Adjust height based on showMenu
                  overflow: "hidden", // Prevent overflow when hidden
                  transition: "height 0.3s ease", // Smooth transition
                },
                "& .MuiModal-backdrop": {
                  opacity: "0 !important",
                },
              }}
            >
              <List
                sx={{
                  ...navListStyle,
                  "@media (min-width:320px) and (max-width:767px)": {
                    gap: "0px",
                    display: "block",
                    justifyContent: "start",
                  },
                }}
                component="nav"
                aria-label="navigation"
              >
                {data?.navbar?.links?.map(({ label }) => (
                  <ListItem
                    sx={{
                      py: "0",
                      paddingLeft: "35px",
                      borderTop: "1px solid #F72585",
                      backgroundColor: `${
                        exact === label ? "#F72585" : "white"
                      }`,
                    }}
                    key={label}
                    onClick={() => handleClick(label)}
                  >
                    <ListItemText
                      sx={{
                        color: `${exact === label ? "white" : "black"}`,
                        cursor: "pointer",
                        "& .MuiTypography-root": {
                          textTransform: "uppercase",
                          lineHeight: "2em",
                          fontSize: "14px !important",
                          fontWeight: "700",
                          fontFamily: "Open Sans",
                          fontStyle: "normal",
                          letterSpacing: "2px",
                        },
                      }}
                      primary={label}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <MyStyledButton
              sx={{
                display: "none",
                "@media (min-width:320px) and (max-width:767px)": {
                  display: "flex",
                },
              }}
              isIcon
            >
              Book Now
            </MyStyledButton>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;

const styles = {
  navStyle: {
    backgroundColor: "white",
    maxWidth: "1440px",
    margin: "auto",
    "@media (min-width:375px) and (max-width:425px)": {
      padding: "5px 20px",
    },
    "@media (min-width:425px) and (max-width:768px)": {
      padding: "5px 40px",
      paddingLeft: "20px",
    },
  },
  navItemsStyle: {
    justifyContent: "space-between",
  },
  navListStyle: {
    display: "flex",
    marginLeft: "200px",
    "@media (min-width:375px) and (max-width:768px)": {
      marginLeft: "-18px",
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      marginLeft: "100px",
    },
    flexWrap: "nowrap",
  },
  navMenuIconStyle: {
    "@media (min-width:375px) and (max-width:767px)": {
      display: "block",
    },
    display: "none",
  },
};
