import React, { useEffect, useRef } from "react";
import { Form, useOutletContext } from "@remix-run/react";
import { useTransition } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

// React component
function AppointmentForm() {
  const [isPending] = useTransition();
  const {
    fromMainStyle,
    fomrContainerStyle,
    formStyle,
    formRow,
    buttonStyle,
    formColum,
  } = styles;
  const ref = useRef(null);
  const { setRouteRef } = useOutletContext<OutletContext>();

  useEffect(() => {
    if (ref?.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setRouteRef((prevRefs: any) => ({ ...prevRefs, appointmentRef: ref }));
    }
  }, []);

  return (
    <Box ref={ref} sx={fromMainStyle}>
      <Box sx={fomrContainerStyle}>
        <Typography variant="h6">Book Your Appointment</Typography>
        <Typography sx={{ maxWidth: "74%" }}>
          Book your Mehndi appointment by providing the date, time, occasion,
          design preferences, and your contact info.
        </Typography>
      </Box>
      <Form method="post" action="/">
        <Box sx={formStyle}>
          <Box sx={formRow}>
            <TextField
              name="name"
              placeholder="Your Name"
              autoComplete="off"
              type="text"
              required
              sx={formColum}
            />
            <TextField
              name="email"
              placeholder="Email"
              type="email"
              autoComplete="off"
              required
              sx={formColum}
            />
            <TextField
              autoComplete="off"
              name="date"
              placeholder="Date"
              type="date"
              required
              sx={formColum}
            />
            <TextField
              autoComplete="off"
              name="phone"
              placeholder="Phone"
              required
              sx={formColum}
            />
            <Box sx={formColum}>
              <Button sx={buttonStyle} type="submit" disabled={isPending}>
                Book Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Form>
    </Box>
  );
}

export default AppointmentForm;

const styles = {
  fromMainStyle: {
    padding: "20px",
    backgroundColor: "white",
    opacity: "0.9",
    position: "absolute",
    width: "60rem",
    bottom: "-74px",
    marginLeft: "70px",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
    height: "200px",
    "@media (min-width:319px) and (max-width:426px)": {
      width: "90%",
      bottom: "-232px",
      marginLeft: "20px",
      height: "400px",
    },
    "@media (min-width:425px) and (max-width:768px)": {
      width: "90%",
      bottom: "-298px",
      height: "400px",
      marginLeft:'10px'
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      width: "55rem",
      bottom: "-128px",
      marginLeft: "-54px",
    },
  },
  fomrContainerStyle: {
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width:319px) and (max-width:1023px)": {
      display: "block",
    },
    display: "flex",
  },
  formStyle: {
    display: "flex",
    gap: "20px",
    flexGrow: "1",
    marginTop: "25px",
    justifyContent: "center",
    alignItems: "center",
  },
  formRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    "@media (min-width:319px) and (max-width:1023px)": {
      flexWrap: "wrap",
    },
  },
  formColum: {
    flex: "1 1 100px !important",
    "@media (min-width:319px) and (max-width:425px)": {
      flex: "1 1 120px !important",
    },
    "@media (min-width:425px) and (max-width:620px)": {
      flex: "1 1 80px !important",
    },
    "@media (min-width:620px) and (max-width:767px)": {
      flex: "1 1 155px !important",
    },
    "@media (min-width:768px) and (max-width:1023px)": {
      flex: "1 1 250px !important",
    },
  },
  buttonStyle: {
    backgroundColor: "#F72585",
    color: "white",
    height: "max-content",
    width: "100%",
    padding: "15px",
    "@media (min-width:319px) and (max-width:1023px)": {
      width: "100%",
      fontSize: "10px !important",
      marginTop: "10px",
      padding: "10px",
    },
  },
};
