import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import HostMeeting from './components/HostMeeting';
import WhyChooseUs from './components/WhyChooseUs';
import OurSpaceOverview from './components/OurSpaceOverview';
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HostMeeting />
      <WhyChooseUs />
      <OurSpaceOverview />
      <DownloadAppSection />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

