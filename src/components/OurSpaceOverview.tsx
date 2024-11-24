import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import { Grid, Box, Typography } from '@mui/material';
import OurSpaceCard from './OurSpaceCard';
import './OurSpaceOverview.css';

const spaces = [
  {
    id: "39ab7642-8de3-4e95-aa5d-34089bc67b90",
    name: "Platinum, Indiranagar",
    address: "271, 6th Main Rd, HAL 2nd Stage, Motappapalya, Indiranagar, Bengaluru, Karnataka 560038, India",
    image: image1,
    price: 499,
    discountMessage: "Pay for 8 Days, Get 2 Days Complimentary",
  },
  {
    id: "f87f54e2-6ce4-4bc5-bed7-587b361b5633",
    name: "JBR Campus, Whitefield",
    address: "Plot No. 77, Jbr Tech Park, 6th Rd, Whitefield, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066, India",
    image: image2,
    price: 249,
    discountMessage: "Pay for 8 Days, Get 2 Days Complimentary",
  },
  {
    id: "292caef7-95a4-493d-9575-5524b12eb0a5",
    name: "HSR Sector 6 Service Road, Silkboard",
    address: "L-194, Santhosapuram, Sector 6, HSR Layout, Bengaluru, Karnataka 560101, India",
    image: image3,
    price: 249,
    discountMessage: "Pay for 8 Days, Get 2 Days Complimentary",
  },
  {
    id: "471c30b4-e91c-4392-9ebe-b4c1ad4a7b63",
    name: "HSR Campus",
    address: "BHIVE Workspace - No.112, AKR Tech Park, \"A\" and, B-Block, 7th Mile Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068, India",
    image: image4,
    price: 249,
    discountMessage: "Pay for 8 Days, Get 2 Days Complimentary",
  },
  {
    id: "298a504d-c5cd-4456-a132-e3a8f18a4a43",
    name: "27th Main, HSR",
    address: "27th Main Rd, Bengaluru, Karnataka, India",
    image: image5,
    price: 249,
    discountMessage: "Pay for 8 Days, Get 2 Days Complimentary",
  }
];

const OurSpaceOverview: React.FC = () => {
  return (
    <Box className="our-space-overview-container">
      <Typography variant="h4" className="our-space-title">Our Space Overview</Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {spaces.map((space) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={space.id}>
            <OurSpaceCard
              name={space.name}
              address={space.address}
              image={space.image}
              price={space.price}
              discountMessage={space.discountMessage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurSpaceOverview;
