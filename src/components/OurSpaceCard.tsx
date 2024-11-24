import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import './OurSpaceOverview.css';

interface OurSpaceCardProps {
  name: string;
  address: string;
  image: string;
  price: number;
  discountMessage: string | null;
}

const OurSpaceCard: React.FC<OurSpaceCardProps> = ({ name, address, image, price, discountMessage }) => {
  return (
    <Card className="our-space-card">
      <CardMedia component="img" height="200" image={image} alt={name} className="our-space-image" />
      <CardContent>
        <Typography variant="h6" className="our-space-title">{name}</Typography>
        <Typography variant="body2" color="textSecondary" className="our-space-address">{address}</Typography>
        
        <Box className="our-space-footer">
          <Typography variant="h6" className="our-space-price">₹{price}/Day</Typography>
          {discountMessage && (
            <Typography variant="body2" color="primary" className="our-space-discount">
              {discountMessage}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default OurSpaceCard;
