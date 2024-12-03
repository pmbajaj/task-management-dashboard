import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Task Management Dashboard
      </Typography>
      <Typography variant="h6">This is the home page.</Typography>
      <Button variant="contained" color="secondary" href="/tasks" sx={{ marginTop: 3 }}>
        Go to Tasks
      </Button>
    </Box>
  );
};

export default Home;
