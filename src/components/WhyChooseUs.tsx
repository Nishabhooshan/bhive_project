import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import {
  EmojiEvents as CommunityIcon,
  FitnessCenter as GymIcon,
  Wifi as WifiIcon,
  LocalCafe as CafeIcon,
  LocationOn as LocationIcon,
  Call as ContactIcon,
  SportsEsports as GameIcon,
  AttachMoney as AffordableIcon,
} from '@mui/icons-material';
import './WhyChooseUs.css';

const features = [
  { icon: <CommunityIcon />, label: 'Community Events' },
  { icon: <GymIcon />, label: 'Gym Facilities' },
  { icon: <WifiIcon />, label: 'High-Speed Wi-Fi' },
  { icon: <CafeIcon />, label: 'Café & Bar' },
  { icon: <LocationIcon />, label: 'Prime Locations' },
  { icon: <ContactIcon />, label: 'Contact Lounge' },
  { icon: <GameIcon />, label: 'Game Area' },
  { icon: <AffordableIcon />, label: 'Affordable' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box className="why-choose-us-container">
      <Typography variant="h4" className="why-choose-us-title">
        Why Choose Us?
      </Typography>

      <Grid container spacing={3} justifyContent="center" className="why-choose-us-grid">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} className="why-choose-us-item">
            <Box className="why-choose-us-feature">
              <Box className="why-choose-us-icon">{feature.icon}</Box>
              <Typography variant="body1" className="why-choose-us-label">
                {feature.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
