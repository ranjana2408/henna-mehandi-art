import React from 'react'
import HeroSection from '~/sections/hero-section';
import Navbar from "~/shared/navbar";
import data from '../../utils/data.json'
import WhyChooseUs from '~/sections/why-choose-us';
import AboutUs from '~/sections/about-us';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <HeroSection {...data?.aboutHeroSection} />
      <AboutUs />
      <WhyChooseUs />
    </>
  );
}
