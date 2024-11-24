import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import './HostMeeting.css';

const HostMeeting: React.FC = () => {
  return (
    <Box className="host-meeting-container">
      <Grid container spacing={2} className="host-meeting-grid">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" className="host-meeting-heading">
            Host your meeting with world-class amenities.
          </Typography>
          <Typography variant="h4" className="host-meeting-subheading">
            Starting at ₹199/-
          </Typography>
          <Button variant="contained" color="primary" className="host-meeting-button">
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HostMeeting;
