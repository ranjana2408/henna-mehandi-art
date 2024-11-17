import React, { useEffect, useRef } from "react";
import { Form, useOutletContext } from "@remix-run/react";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { buttonStyle } from "mui/mui-styles";
import MyStyledButton from "~/component/my-styled-button";

// React component
function AppointmentForm() {
  const { fromMainStyle, fomrContainerStyle, formStyle, formRow, formColum } =
    styles;
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
        <Typography variant="h6">Book Mehandi Schedule</Typography>
        <Typography sx={{ maxWidth: "74%" }}>
          Elevate your special occasion with the art of henna. We’ll be back in
          touch within 24 hours to confirm your booking and to detail next steps
          needed.
        </Typography>
      </Box>
      <Form method="post" action="/">
        <Box sx={formStyle}>
          <Box sx={formRow}>
            <Select
              name="services"
              placeholder="Select a Service"
              autoComplete="off"
              required
              value={"Select Services"}
              sx={formColum}
            >
              <MenuItem value="Select Services">Service Services</MenuItem>
              <MenuItem value="service1">Service 1</MenuItem>
              <MenuItem value="service2">Service 2</MenuItem>
              <MenuItem value="service3">Service 3</MenuItem>
            </Select>
            <TextField
              autoComplete="off"
              name="date"
              placeholder="Date"
              type="datetime"
              required
              sx={formColum}
            />
            <TextField
              name="time"
              placeholder="Time"
              type="time"
              autoComplete="off"
              required
              sx={formColum}
            />
            <TextField
              multiline
              variant="outlined"
              fullWidth
              placeholder="Notes..."
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
            <Box sx={formColum}>
              <MyStyledButton
                sx={{
                  ...buttonStyle,
                  "@media (min-width:319px) and (max-width:1024px)": {
                    display: "flex",
                    alignItems: "center !important",
                    justifyContent: "center !important",
                    alignSelf: "center !important",
                    padding: "10px",
                    width: "100%",
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
  );
}

export default AppointmentForm;

const styles = {
  fromMainStyle: {
    padding: "30px",
    backgroundColor: "white",
    opacity: "0.9",
    position: "absolute",
    width: "60rem",
    bottom: "-74px",
    zIndex: "999",
    marginLeft: "70px",
    boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
    "@media (min-width:319px) and (max-width:426px)": {
      width: "90%",
      bottom: "-270px",
      marginLeft: "20px",
    },
    "@media (min-width:425px) and (max-width:768px)": {
      marginLeft: "10px",
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      width: "90%",
      bottom: "-128px",
      mx:'5%',
      marginLeft:'2%'
    },
  },
  fomrContainerStyle: {
    gap: "20px",
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
    "@media (min-width:319px) and (max-width:768px)": {
      flex: "1 1 144px !important",
    },
    "@media (min-width:768px) and (max-width:1024px)": {
      flex: "1 1 20px !important",
    },
  },
};
