import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from '@mui/material/Slider';

const reviews = [
  { id: 1, text: "Great service, very satisfied!", author: "Alice" },
  { id: 2, text: "An amazing experience, highly recommend!", author: "Bob" },
  // Add more reviews as needed
];

const ReviewSlider = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleChange = (event:any, newValue:any) => {
    setCurrentReviewIndex(newValue);
  };

  return (
    <Box sx={{ width: 300, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h6">{reviews[currentReviewIndex].author}</Typography>
      <Typography variant="body1">{reviews[currentReviewIndex].text}</Typography>
      <Slider
        value={currentReviewIndex}
        onChange={handleChange}
        step={1}
        marks
        min={0}
        max={reviews.length - 1}
        valueLabelDisplay="on"
        sx={{ marginY: 2 }}
      />
      <Button
        variant="contained"
        onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)}
      >
        Next Review
      </Button>
    </Box>
  );
};

export default ReviewSlider;
