import React from "react";
import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/sections/hero-section";
import Services from "~/sections/services";
import Navbar from "~/sections/navbar";
import AboutUs from "~/sections/about-us";
import WhyChooseUs from "~/sections/why-choose-us";
import ClientTestimonials from "~/sections/testimonials";

export const meta: MetaFunction = () => {
  return [
    { title: "Henna Mehandi Arts WP" },
    {
      description:
        "Discover the art of mehndi with our stunning designs and expert tips. From bridal henna to intricate patterns for every occasion, explore our gallery and tutorials to create beautiful body art that celebrates tradition and creativity.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <ClientTestimonials />
    </>
  );
}
