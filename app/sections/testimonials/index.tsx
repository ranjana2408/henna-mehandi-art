import React from "react";
import FeaturesBlock from "~/blocks/features";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";

const testimonials = [
  {
    subTitle: "Testimonials",
    title: "Words From Clients",
    name: "Riya Sharma",
    img: "/sam-sptimas.png",
    designation: "Mehndi for Engagement",
    isImageRight: true,
    description:
      "Orcinteger faucibus odio cursus facilisi sitenim egestas ele imperdiet etiam situ eltrices vestibulum orcinteger faucibus odio cursus facilisi sitenim egestas elementum imperdiet etiam situ eltrices vestibulum sit.",
    button: {
      label: "View All Testimonials",
    },
  },
  {
    subTitle: "Testimonials",
    title: "Words From Clients",
    name: "Sofia Malik",
    img: "/tatania-septimas.png",
    designation: "Bridal Mehndi Client",
    isImageRight: true,
    description:
      "Orcinteger faucibus odio cursus facilisi sitenim egestas ele imperdiet etiam situ eltrices vestibulum orcinteger faucibus odio cursus facilisi sitenim egestas elementum imperdiet etiam situ eltrices vestibulum sit.",
    button: {
      label: "View All Testimonials",
    },
  },
  {
    subTitle: "Testimonials",
    title: "Words From Clients",
    name: "Nadia Khan",
    img: "/tatania-septimas.png",
    designation: "Mehndi for Wedding Guest",
    isImageRight: true,
    description:
      "Orcinteger faucibus odio cursus facilisi sitenim egestas ele imperdiet etiam situ eltrices vestibulum orcinteger faucibus odio cursus facilisi sitenim egestas elementum imperdiet etiam situ eltrices vestibulum sit.",
    button: {
      label: "View All Testimonials",
    },
  },
  {
    subTitle: "Testimonials",
    title: "Words From Clients",
    isImageRight: true,
    name: "Aisha Patel",
    img: "/tatania-septimas.png",
    designation: "Henna Party Host",
    description:
      "Orcinteger faucibus odio cursus facilisi sitenim egestas ele imperdiet etiam situ eltrices vestibulum orcinteger faucibus odio cursus facilisi sitenim egestas elementum imperdiet etiam situ eltrices vestibulum sit.",
    button: {
      label: "View All Testimonials",
    },
  },
];

const itemData = [
  {
    id: 1,
    title: "Traditional Design",
    img: "hand-mehandi-image1.png",
  },
  {
    id: 2,
    title: "Arabic Design",
    img: "hand-mehandi-image2.png",
  },
  {
    id: 3,
    title: "Bridal Mehndi",
    img: "hand-mehandi-image3.png",
  },
  {
    id: 4,
    title: "Bridal Mehndi",
    img: "hand-mehandi-image4.png",
  },
];

export default function ClientTestimonials() {
  const isMobile = useMediaQuery("(min-width:319px) and (max-width:767px)");

  const ClientDestails = ({
    img,
    name,
    designation,
  }: {
    img: string;
    name: string;
    designation: string;
  }) => {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center",gap:'20px' }}
      >
        <img src={img} height={60} width={60} />
        <Box>
          <Typography color="white">{name}</Typography>
          <Typography color="white">{designation}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1440px",
        mx: "auto",
        my: "60px",
        "@media (min-width:319px) and (max-width:768px)": {
          display: "block",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "50%",
          overflowX: "scroll",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer and Edge
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Opera
          },
          "@media (min-width:319px) and (max-width:620px)": {
            width: "100%",
          },
          "@media (min-width:620px) and (max-width:767px)": {
            width: "100%",
          },
        }}
      >
        {testimonials?.map((item) => (
          <FeaturesBlock
            key={item.title}
            style={{
              marginTop: "150px",
              paddingLeft: "10px",
              "@media (min-width:319px) and (max-width:620px)": {
                marginTop: "0px !important",
                paddingLeft: "20px",
              },
              "@media (min-width:620px) and (max-width:767px)": {
                marginLeft: "100px !important",
                paddingLeft: "20px",
              },
            }}
            height="30"
            featuresBoxStyele={{
              maringTop: "0px",
              backgroundColor: "#222222",
              boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
              paddingBottom: "100px",
              width: "900px",
              "@media (min-width:319px) and (max-width:767px)": {
                paddingLeft: "10px !important",
                width: "365px",
              },
            }}
            bgColor="white"
            {...item}
            clientDetails={
              <ClientDestails
                name={item?.name}
                designation={item?.designation}
                img={item?.img}
              />
            }
          />
        ))}
      </Box>
      <Box
        sx={{
          width: "45%",
          "@media (min-width:319px) and (max-width:767px)": {
            width: "100%",
          },
        }}
      >
        <ImageList
          sx={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            boxShadow: "0 2px 2px rgba(0, 0, 0, 5%)",
            padding: "10px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          cols={2}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: isMobile ? "200px" : "350px",
                  height: isMobile ? "200px" : "350px",
                }}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
