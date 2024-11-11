import React from 'react'
import { Box, Typography } from "@mui/material";
import data from "../../../utils/data.json";
import TitleSection from "~/blocks/title-section";

export default function WhyChooseUs() {

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        position:'relative',
        margin:'40px 40px'
      }}
    >
      <TitleSection {...data?.whyChooseUs} />
      <Box sx={{ display: "flex" ,marginTop:'100px'}}>
        <Box
          sx={{
            background: `linear-gradient(90deg, #FFFFFF 18.83%, #FFC8E0 100%) !important`,
            borderRadius: "0px 150px 150px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding:'100px !important'
          }}
        >
          {data?.whyChooseUs?.features
            ?.slice(0, 3)
            .map(({ title, description, image }) => (
              <Box
                sx={{ display: "flex", textAlign: "right", gap: "12px" }}
                key={title}
              >
                <Box sx={{width:'300px',}}>
                  <Typography variant="h5">{title}</Typography>
                  <Typography sx={{ textWrap: "wrap" }}>
                    {description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor:'#F72585',
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight:'40px',
                    
                  }}
                >
                  {" "}
                  <img src={image} alt={title} />
                </Box>
              </Box>
            ))}
        </Box>
        <img style={{position:'absolute',left:'45%',top:'250px'}} src="mehandi-image.png" alt="mehandi" height={323} />
        <Box
          sx={{
            background: `linear-gradient(90deg, #FFC8E0 18.83%, #FFFFFF 100%) !important`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "150px 0px 0px 150px",
            padding:'100px !important'
          }}
        >
          {data?.whyChooseUs?.features
            ?.slice(3)
            .map(({ title, description, image }) => (
              <Box
                sx={{ display: "flex", textAlign: "right", gap: "12px", }}
                key={title}
              >
                <Box
                  sx={{
                    backgroundColor: "#F72585",
                    borderRadius: "50%",
                    height: "80px",
                    width: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft:'40px'
                  }}
                >
                  {" "}
                  <img src={image} alt={title} />
                </Box>
                <Box sx={{width:'300px'}}>
                  <Typography variant="h5">{title}</Typography>
                  <Typography sx={{ textWrap: "wrap"}}>{description}</Typography>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
