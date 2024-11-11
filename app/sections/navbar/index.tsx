import React, { useState } from "react";
import {
  Box,
  ListItem,
  List,
  ListItemText,
  Button,
  useMediaQuery,
  AppBar,
  Drawer,
} from "@mui/material";
import TopNavbar from "./top-navbar";
import data from "../../../utils/data.json";
import { useOutletContext } from "@remix-run/react";

interface OutletContext {
  routeRef: {
    homeRef: null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    servicesRef: any;
    contactRef: null;
  };
  exact: string;
  setExact: (arg: string) => void;
}

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(min-width:319px) and (max-width:767px)");
  const [showMenu, setShowMenu] = useState(false);
  const { routeRef, setExact, exact } = useOutletContext<OutletContext>();

  const {
    navStyle,
    navItemsStyle,
    navButtonStyle,
    navListStyle,
    navMenuIconStyle,
  } = styles;

  const handleClick = (type: string) => {
    setExact(type);
    switch (type) {
      case "Services":
        return routeRef?.servicesRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "Home":
        return routeRef?.homeRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  return (
    <AppBar elevation={0} sx={{ backgroundColor: "transparent" }}>
      <TopNavbar />
      <Box sx={{ backgroundColor: "white" }}>
        <Box position="static" sx={navStyle}>
          <Box
            sx={{
              ...navItemsStyle,
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
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
              <img
                src={data?.navbar?.logo}
                alt="Logo"
                style={{ width: isMobile ? "100px" : "150px", height: "auto" }}
              />
            </Box>
            <List
              sx={{
                ...navListStyle,
                "@media (min-width:320px) and (max-width:767px)": {
                  gap: "10px",
                  display: "none",
                },
              }}
              component="nav"
              aria-label="navigation"
            >
              {data?.navbar?.links?.map(({ label }) => (
                <ListItem key={label} onClick={() => handleClick(label)}>
                  <ListItemText
                    sx={{
                      color: `${exact === label ? "#F72585" : "black"}`,
                      cursor: "pointer",
                    }}
                    primary={label}
                  />
                </ListItem>
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
                  top: "55px",
                  height: showMenu ? "calc(100% - 255px)" : "0px", // Adjust height based on showMenu
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
                        fontWeight: 700,
                      }}
                      primary={label}
                    />
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Button sx={navButtonStyle}>Book An Appointment</Button>
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
    padding: "10px 70px",
    maxWidth: "1440px",
    margin: "auto",
    "@media (min-width:319px) and (max-width:425px)": {
      padding: "5px 20px",
    },
    "@media (min-width:425px) and (max-width:768px)": {
      padding: "5px 40px",
      paddingLeft: "20px",
    },
    "@media (min-width:769px) and (max-width:1024px)": {
      padding: "5px 60px",
    },
  },
  navItemsStyle: {
    justifyContent: "space-between",
  },
  navListStyle: {
    display: "flex",
    marginLeft: "200px",
    "@media (min-width:319px) and (max-width:768px)": {
      marginLeft: "-18px",
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      marginLeft: "100px",
    },
    flexWrap: "nowrap",
  },
  navMenuIconStyle: {
    "@media (min-width:319px) and (max-width:767px)": {
      display: "block",
    },
    display: "none",
  },
  navButtonStyle: {
    backgroundColor: "#F72585",
    color: "white",
    fontSize: "10px",
    height: "max-content",
    "@media (min-width:319px) and (max-width:767px)": {
      display: "block",
    },
    display: "none",
  },
};
