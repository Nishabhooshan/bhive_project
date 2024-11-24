import React from "react";
import "./DownloadAppSection.css";
import  image6 from '../assets/image6.png';
import  image7 from '../assets/image7.png';

const DownloadAppSection: React.FC = () => {
  return (
    <section className="download-app-section">
      <div className="download-app-container">
        <div className="text-content">
          <h2>Download our app now</h2>
          <p>
            Boost your productivity with BHIVE Workspace app. Manage bookings, access services, and more.
          </p>
        </div>
        <div className="button-container">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src={image6} alt="Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={image7} alt="App Store" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
