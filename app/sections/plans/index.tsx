import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const plans = [
  {
    name: 'Basic Mehandi',
    description: 'A simple and elegant design for any occasion.',
    price: '$30',
  },
  {
    name: 'Traditional Mehandi',
    description: 'Intricate designs that reflect cultural heritage.',
    price: '$50',
  },
  {
    name: 'Bridal Mehandi',
    description: 'Exquisite designs tailored for the bride on her special day.',
    price: '$100',
  },
  {
    name: 'Festive Mehandi',
    description: 'Vibrant designs perfect for festivals and celebrations.',
    price: '$40',
  },
];

const MehandiPlans = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Mehandi Plans
      </Typography>
      <Grid container spacing={4}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {plan.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plan.description}
                </Typography>
                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                  {plan.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Book Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MehandiPlans;
