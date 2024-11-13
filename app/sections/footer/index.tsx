import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        color: 'white',
        py: 3,
        mt: 'auto',
        backgroundImage: 'url(/pattern-footer.png)',
        backgroundSize: 'cover', // or 'contain' depending on your needs
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color='black' gutterBottom>
              Quick Menu
            </Typography>
            <Typography color='black' variant="body2">Home</Typography>
            <Typography color='black' variant="body2">About</Typography>
            <Typography color='black' variant="body2">Services</Typography>
            <Typography color='black' variant="body2">Portfolio</Typography>
            <Typography color='black' variant="body2">Contact Us</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography color='black' variant="h6" gutterBottom>
              Support
            </Typography>
            <Typography color='black' variant="body2">Help Center</Typography>
            <Typography color='black' variant="body2">Privacy Policy</Typography>
            <Typography color='black' variant="body2">Terms of Service</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography color='black' variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography color='black' variant="body2">Facebook</Typography>
            <Typography color='black' variant="body2">Twitter</Typography>
            <Typography color='black' variant="body2">Instagram</Typography>
          </Grid>
        </Grid>
        <Typography color="black" variant="body2" align="center" sx={{ mt: 3 }}>
          © {new Date().getFullYear()} Henna Mehandi Art WP. All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
