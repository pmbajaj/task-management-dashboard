import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './pages/Dashboard'; // Task management dashboard
import Home from './pages/Home'; // Optional: Home page
import Analytics from './pages/Analytics'; // New Analytics page (if needed)
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Dashboard />} /> {/* Make Dashboard the default */}
          {/* Task page route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Task management */}
          {/* Analytics route (if added) */}
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
