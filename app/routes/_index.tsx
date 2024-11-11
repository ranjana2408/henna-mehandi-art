import React from 'react'
import type { MetaFunction } from "@remix-run/node";
// import AboutUs from "~/sections/about-us";
// import MehandiBlogs from "~/sections/blogs";
import HeroSection from "~/sections/hero-section";
// import InstaGramFeeds from "~/sections/instagram-feeds";
// import MakeAnAppointMent from "~/sections/make-appointment";
// import OurMehandiServices from "~/sections/mehandi-services";
// import PortFolio from "~/sections/portfolio";
import Services from '~/sections/services';
import Navbar from '~/sections/navbar';
// import Pricing from "~/sections/pricing";
// import Testimonials from "~/sections/testimonials";
// import WhyChooseUs from "~/sections/why-choose-us";

export const meta: MetaFunction = () => {
  return [
    { title: "Mehandi" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  
  return (
   <>
   <Navbar />
   <HeroSection />
    {/* <AboutUs/> */}
    {/* <OurMehandiServices/> */}
    {/* <WhyChooseUs/> */}
    <Services />
    {/* <Testimonials/> */}
    {/* <MakeAnAppointMent/> */}
    {/* <Pricing/> */}
    {/* <InstaGramFeeds/> */}
    {/* <MehandiBlogs/> */}
   </> 
  );
}


