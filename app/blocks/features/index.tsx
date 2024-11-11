import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppointmentForm from "~/forms/appointment-form";
import TitleSection from "../title-section";

interface FeaturesBlockProps {
  subTitle: string;
  title: string;
  description: string;
  items?: { isShowImage: boolean; title: string }[];
}

const FeaturesBlock: React.FC<FeaturesBlockProps> = (props) => {
  const theme = useTheme();
  const { description, items } = props;
  const { featuresStyle } = styles;

  return (
    <Box
      sx={{
        backgroundColor: "#FDE2E4",
        borderTop: "1px solid  #e3acb0",
        position: "relative",
        marginTop: "150px",
        height: "36rem",
        "@media (min-width:319px) and (max-width:620px)": {
          height: "72rem",
          marginTop: "60px",
        },
        "@media (min-width:620px) and (max-width:1023px)": {
          marginTop: "80px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
          "@media (min-width:319px) and (max-width:619px)": {
            flexDirection: "column-reverse",
            justifyContent: "center",
            alignItmes: "center",
          },
          display: "flex",
        }}
      >
        <Box sx={featuresStyle}>
          <TitleSection {...props} />
          <Typography>{description}</Typography>
          {items?.map(({ title }) => (
            <Box key={title}>
              <Typography color={theme.palette.primary.main}>
                {title}
              </Typography>
            </Box>
          ))}
          <Button
            sx={{
              backgroundColor: "#F72585",
              color: "white",
              height: "max-content",
              width: "max-content",
              "@media (min-width:319px) and (max-width:1023px)": {
                fontSize: "10px !important",
              },
            }}
          >
            Book An Appointment
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: 0,
            width: "50%",
            "@media (min-width:319px) and (max-width:619px)": {
              position: "relative",
              width: "100%",
            },
          }}
        >
          <img
            src="hero-image-one.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AppointmentForm />
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesBlock;

const styles = {
  featuresStyle: {
    px: "80px",
    paddingTop: "70px",
    width: "50%",
    "@media (min-width:319px) and (max-width:426px)": {
      width: "100%",
      padding: "20px",
    },
    "@media (min-width:426px) and (max-width:620px)": {
      width: "100%",
      padding: "40px",
      paddingTop: "20px",
    },
    "@media (min-width:620px) and (max-width:768px)": {
      paddingLeft: "40px",
    },
    "@media (min-width:769px) and (max-width:1024px)": {
      padding: "60px",
      paddingTop: "20px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};
