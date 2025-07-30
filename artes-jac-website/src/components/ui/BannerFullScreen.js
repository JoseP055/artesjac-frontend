// BannerFullScreen.js
import React from 'react';
import logo from '../../assets/images/logo.jpg';
import '../../styles/layout.css'; 

export const BannerFullScreen = () => {
  return (
    <div className="full-screen-banner">
      <img src={logo} alt="Banner" className="banner-image" />
    </div>
  );
};