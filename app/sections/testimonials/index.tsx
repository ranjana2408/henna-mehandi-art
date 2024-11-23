import React, { useEffect, useState } from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import data from "../../../utils/data.json";
import MyStyledButton from "~/component/my-styled-button";
import TitleSection from "~/blocks/title-block";

export default function ClientTestimonials() {
  const isMobile = useMediaQuery("(min-width:375px) and (max-width:767px)");

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
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <img style={{ borderRadius: "50%" }} src={img} height={60} width={60} />
        <Box>
          <Typography
            sx={{ fontSize: "26px", fontFamily: "Lora Open Sans" }}
            color="white"
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Open Sans",
              fontWeight: "700",
            }}
            color="#FDE2E4"
          >
            {designation}
          </Typography>
        </Box>
      </Box>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex: number) =>
          (prevIndex + 1) % data?.clientSection?.testimonials?.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data?.clientSection?.testimonials?.length]);

  const clientItems = data?.clientSection?.testimonials[currentIndex];

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1582px",
        justifyContent: "center",
        mx: "auto",
        my: "60px",
        position: "relative",
        top: "488px",
        "@media (min-width:375px) and (max-width:768px)": {
          display: "block",
          top: "284rem",
        },
        "@media (min-width:768px) and (max-width:1024px)": {
          top: "100rem",
        },
        "@media(max-width:1440px)": {
          marginLeft: "auto",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          "@media (min-width:375px) and (max-width:768px)": {
            display: "block",
            justifyContent: "center",
            alignItems: "center",
          },
          "@media (min-width:768px) and (max-width:1024px)": {
            display: "block",
          },
        }}
      >
        <Box
          key={clientItems?.title}
          sx={{
            backgroundColor: "#222222",
            py: "110px",
            paddingBottom: "50px",
            paddingLeft: "150px",
            paddingRight: "100px",
            width: "60%",
            "@media (min-width:375px) and (max-width:768px)": {
              width: "100%",
              paddingLeft: "10px",
              textAlign: "center",
              paddingRight: "10px",
              py: "50px",
            },
            "@media (min-width:375px) and (max-width:1024px)": {
              width: "100%",
            },
          }}
        >
          <Slide
            timeout={500}
            direction={"left"}
            in={true}
            appear={true}
            easing={{ enter: "ease-in", exit: "ease-out" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                "@media (min-width:375px) and (max-width:768px)": {
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <TitleSection
                color="#FDE2E4"
                title={clientItems?.title}
                subTitle={clientItems?.subTitle}
                featuresBoxStyle={{ backgroundColor: "#222222" }}
              />
              <Box sx={{ display: "flex", gap: "5px", marginTop: "30px" }}>
                {[
                  "/icons/star-icon.svg",
                  "/icons/star-icon.svg",
                  "/icons/star-icon.svg",
                  "/icons/star-icon.svg",
                  "/icons/star-icon.svg",
                ].map((item) => (
                  <img key={item} src={item} height={20} width={20} />
                ))}
              </Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  "@media (min-width:375px) and (max-width:768px)": {
                    fontSize: "18px",
                  },
                  fontFamily: "Open Sans",
                  fontWeight: "400",
                  color: "white",
                  paddingBottom: "12px",
                  paddingTop: "20px",
                }}
              >
                {clientItems?.description}
              </Typography>
              <ClientDestails
                designation={clientItems?.designation}
                name={clientItems?.name}
                img={clientItems?.img}
              />
              <MyStyledButton
                isIcon
                sx={{
                  marginTop: "40px",
                  "@media (min-width:375px) and (max-width:768px)": {
                    width: "100%",
                  },
                  mx: "20px",
                }}
              >
                {clientItems?.button?.label}
              </MyStyledButton>
            </Box>
          </Slide>
        </Box>
        <Box
          sx={{
            width: "40%",
            "@media (min-width:375px) and (max-width:1024px)": {
              width: "100%",
            },
          }}
        >
          <ImageList cols={2} sx={{ overflow: "visible" }}>
            {data?.clientSection?.gallary?.map((item) => (
              <ImageListItem key={item.img}>
                <Box
                  sx={{
                    "& :nth-child(0)": {
                      maxHeight: "37px !important",
                      marginBottom: "40px",
                    },
                    "& :nth-child(3)": {
                      maxHeight: "237px",
                      marginBottom: "40px",
                    },
                  }}
                >
                  <img
                    src={item.img}
                    alt="gallary-image"
                    style={{
                      height: "350px",
                      width: "100%",
                      maxWidth: "100%",
                    }}
                    loading="lazy"
                  />
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  );
}
