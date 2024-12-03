import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper',
        height: '100vh',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ListAltIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
