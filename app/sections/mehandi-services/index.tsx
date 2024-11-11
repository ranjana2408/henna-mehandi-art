import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Collapse,
  Box,
} from '@mui/material';
import { mehndiData } from 'utils/constants';

const MehndiDesignsSection = () => {
  const [expanded, setExpanded] = useState(0);

  const handleToggle = (index:number) => {
    setExpanded(expanded === index ? 0 : index);
  };

  return (
    <Container sx={{ py: { xs: 3, md: 5 }, }}>
      <Typography variant="h4" align="center" gutterBottom>
        Mehndi Designs
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {mehndiData.map((design, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              variant="outlined"
              onClick={() => handleToggle(index)}
              sx={{
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={design.image}
                alt={design.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {design.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {design.description}
                </Typography>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">{design.details}</Typography>
                  </Box>
                </Collapse>
              </CardContent>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MehndiDesignsSection;
