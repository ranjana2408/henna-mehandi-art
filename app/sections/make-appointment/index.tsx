import React from "react";
import { Box } from "@mui/material";
import AppointmentForm from "~/forms/appointment-form";

export default function MakeAnAppointMent() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "40px",
        padding: "0px 80px 0px 80px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%" }}>
        <img src="make-appintment-left-banner.png" alt="appointment-banner" />
      </Box>
      <AppointmentForm />
    </Box>
  );
}
