import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, Box } from '@mui/material';

const workoutPlans = [
  { title: "Today's workout plan", text: "We're gonna do 3 fundamental exercises." },
  { title: "First, 10 push-ups", text: "Do 10 reps. Remember about full range of motion. Don't rush." },
  { title: "Next, 20 squats", text: "Squats are important. Remember to keep your back straight." },
  { title: "Finally, 15 sit-ups", text: "Slightly bend your knees. Remember about full range of motion." },
  { title: "Great job!", text: "You made it, have a nice day and see you next time!" },
];

const WorkoutPlanSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : prevSlide));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide < workoutPlans.length - 1 ? prevSlide + 1 : prevSlide));
  };

  const handleRestart = () => {
    setCurrentSlide(0);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f4f8' }}>
      <Container maxWidth="md" sx={{ padding: '40px', backgroundColor: '#fff', borderRadius: '10px', textAlign: 'center' }}>
        <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: '20px' }}>
          <Grid item>
            <Button variant="contained" color="success" onClick={handlePrevious} disabled={currentSlide === 0}>
              Prev
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant={currentSlide === workoutPlans.length - 1 ? "contained" : "outlined"}
              color="success"
              onClick={handleRestart}
            >
              Restart
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="success" onClick={handleNext} disabled={currentSlide === workoutPlans.length - 1}>
              Next
            </Button>
          </Grid>
        </Grid>
        <Card elevation={3} sx={{ padding: '80px', marginBottom: '30px' }}>
          <CardContent>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>{workoutPlans[currentSlide].title}</Typography>
            <Typography variant="h6">{workoutPlans[currentSlide].text}</Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default WorkoutPlanSlider;
