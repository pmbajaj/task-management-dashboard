import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box, Card, CardContent, Typography } from '@mui/material';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Completed Tasks',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(103, 58, 183, 0.2)', // Purple background
        borderColor: '#673ab7', // Purple border
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: ['Completed', 'Pending', 'Overdue'],
    datasets: [
      {
        label: 'Tasks Distribution',
        data: [50, 30, 10],
        backgroundColor: ['#673ab7', '#ff4081', '#f44336'], // Purple, Pink, Red
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Task Progress',
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Tasks Distribution',
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 4 }}>
      {/* Line Chart */}
      <Card
        sx={{
          flex: 1,
          minWidth: 300,
          boxShadow: 4,
          '&:hover': { transform: 'scale(1.05)' },
          transition: 'transform 0.3s ease',
        }}
      >
        <CardContent>
          <Typography variant="h6" color="primary">
            Monthly Task Progress
          </Typography>
          <Line key="lineChart" data={lineData} options={lineOptions} />
        </CardContent>
      </Card>

      {/* Bar Chart */}
      <Card
        sx={{
          flex: 1,
          minWidth: 300,
          boxShadow: 4,
          '&:hover': { transform: 'scale(1.05)' },
          transition: 'transform 0.3s ease',
        }}
      >
        <CardContent>
          <Typography variant="h6" color="secondary">
            Tasks Distribution
          </Typography>
          <Bar key="barChart" data={barData} options={barOptions} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Charts;
