import React from "react";
import AboutUs from "~/sections/about-us";
import HeroSection from "~/sections/hero-section";
import Services from "~/sections/services";
import ClientTestimonials from "~/sections/testimonials";
import WhyChooseUs from "~/sections/why-choose-us";
import Navbar from "~/shared/navbar";
import data from "../../utils/data.json";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection {...data?.homeHeroSection} />
      <AboutUs isAboutPage={false} />
      <WhyChooseUs  />
      <Services />
      <ClientTestimonials />
    </>
  );
}
