// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentForm from '~/forms/appointment-form';
import AboutUs from '~/sections/about-us';
import HeroSection from '~/sections/hero-section';
import Services from '~/sections/services';

const HomeRouteTemplate = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
};

export default HomeRouteTemplate;
