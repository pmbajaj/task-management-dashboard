import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Analytics = () => (
  <Box sx={{ padding: 4 }}>
    <Typography variant="h4" gutterBottom>
      Analytics Dashboard
    </Typography>
    <Grid container spacing={4}>
      {/* Example card */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h3" color="primary">
              $42,500
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">New Users</Typography>
            <Typography variant="h3" color="secondary">
              1,230
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Analytics;
