// MehndiGallery.js
import React from "react";
import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import data from "../../../utils/data.json";
import TitleSection from "~/blocks/title-section";

const mehndiImages = [
  { id: 1, title: "Traditional Design", img: "hand-mehandi-image1.png" },
  { id: 2, title: "Arabic Design", img: "hand-mehandi-image2.png" },
  { id: 3, title: "Bridal Mehndi", img: "hand-mehandi-image3.png" },
  { id: 4, title: "Bridal Mehndi", img: "hand-mehandi-image4.png" },
  { id: 5, title: "Bridal Mehndi", img: "hand-mehandi-image5.png" },
  { id: 6, title: "Bridal Mehndi", img: "hand-mehandi-image6.png" },
  { id: 7, title: "Bridal Mehndi", img: "hand-mehandi-image7.png" },
  // Add more images as needed
];

const PortFolio = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <TitleSection {...data?.services} />
      <ImageList cols={3}>
        {mehndiImages.map((image) => (
          <ImageListItem
            key={image.id}
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              height={200}
              width={200}
              alt={image.title}
              src={image.img}
              loading="lazy"
            />
            <Button
              sx={{
                backgroundColor: "#F72585",
                color: "white",
                fontSize: "14px",
                padding: "15px",
                width: "max-content",
                marginTop: "20px",
              }}
            >
              View Details
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default PortFolio;
