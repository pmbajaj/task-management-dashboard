import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import TaskList from "../components/TaskList"; // Adjust path if needed
import Filters from "../components/Filters"; // Adjust path if needed
import Sidebar from "../components/Sidebar"; // Adjust path if needed
import Charts from "../components/Charts"; // Adjust path if needed

const Dashboard = () => (
  <Box sx={{ display: "flex" }}>
    <Sidebar />
    <Box sx={{ marginLeft: 240, padding: 4, flexGrow: 1 }}>
      <Typography variant="h1" color="primary" gutterBottom>
        Task Management Dashboard
      </Typography>
      <Grid container spacing={4}>
        {/* Website Analytics Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="secondary">
                Website Analytics
              </Typography>
              <Typography variant="body1">Conversion Rate: <strong>28.5%</strong></Typography>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={4}>
                  <Typography variant="body2">12h</Typography>
                  <Typography variant="caption">Spend</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">127</Typography>
                  <Typography variant="caption">Orders</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">2.3k</Typography>
                  <Typography variant="caption">Items</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Sales Overview Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="secondary">
                Sales Overview
              </Typography>
              {/* Placeholder for Chart */}
              <Box sx={{ height: 150, mt: 2 }}>
                <Charts />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Support Tracker Card */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="secondary">
                Support Tracker
              </Typography>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="h3" color="primary">
                  85%
                </Typography>
                <Typography variant="caption">Completed Tasks</Typography>
                <Box mt={2}>
                  <Button variant="contained" size="small" color="primary" sx={{ marginRight: 1 }}>
                    New Tickets
                  </Button>
                  <Button variant="outlined" size="small" color="primary">
                    View All
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Filters and Add Task Section */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Filters</Typography>
              <Filters />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Button variant="contained" color="secondary">
            Add New Task
          </Button>
        </Grid>

        {/* Task List */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Your Tasks</Typography>
              <TaskList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default Dashboard;
