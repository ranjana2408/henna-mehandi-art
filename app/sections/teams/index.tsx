import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Mehandi Artist',
    description: 'Expert in traditional and contemporary Mehandi designs.',
    image: 'https://via.placeholder.com/100', // Placeholder image
  },
  {
    name: 'Bob Smith',
    role: 'Customer Service',
    description: 'Dedicated to ensuring an excellent experience for our clients.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Cathy Lee',
    role: 'Event Coordinator',
    description: 'Specializes in organizing Mehandi events and festivals.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'David Kim',
    role: 'Social Media Manager',
    description: 'Handles our online presence and customer engagement.',
    image: 'https://via.placeholder.com/100',
  },
];

const TeamMembers = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Avatar alt={member.name} src={member.image} sx={{ width: 100, height: 100, margin: '0 auto' }} />
                <Typography variant="h5" component="div" align="center" sx={{ mt: 2 }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamMembers;
