import React from "react";
import { Form } from "@remix-run/react";
import { useTransition } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

// React component
function AppointmentForm() {
  const [isPending] = useTransition();
  const { formStyle, formRow, buttonStyle,formColum } = styles;

  return (
    <Box
      sx={{
        padding: "20px",
        paddingRight:'-10px !important',
        backgroundColor: "white",
        position: "absolute",
        width:'60rem',
        bottom: "-74px",
        "@media (min-width:319px) and (max-width:426px)": {
          width:'90%',
          bottom: "-215px",
        },
        "@media (min-width:426px) and (max-width:768px)": {
          width: "90%",
          bottom: "-244px",
        },
        "@media (min-width:769px) and (max-width:1024px)": {
          width:'55rem',
          bottom: "-128px",
        },
      }}
    >
      {" "}
      <Box
        sx={{
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          "@media (min-width:319px) and (max-width:1023px)": {
            display: "block",
          },
          display: "flex",
        }}
      >
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
            <Box
              sx={formColum}
            >
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
  formColum:{
    flex: "1 1 100px !important",
    "@media (min-width:319px) and (max-width:426px)": {
      flex: "1 1 400px !important",
    },
    "@media (min-width:426px) and (max-width:1023px)": {
      flex: "1 1 250px !important",
    },
  },
  buttonStyle: {
    backgroundColor: "#F72585",
    color: "white",
    height: "max-content",
    width: "100%",
    padding:'15px',
    "@media (min-width:319px) and (max-width:1023px)": {
      width: "100%",
      fontSize: "10px !important",
    },
  },
};
