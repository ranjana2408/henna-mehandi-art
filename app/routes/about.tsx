import React from "react";
import type { MetaFunction } from "@remix-run/node";
import AboutUsPage from "~/layout/aboutPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Henna Mehandi Arts WP" },
    {
      description:
        "Discover the art of mehndi with our stunning designs and expert tips. From bridal henna to intricate patterns for every occasion, explore our gallery and tutorials to create beautiful body art that celebrates tradition and creativity.",
    },
  ];
};

export default function AboutUs() {
  return <AboutUsPage/>
}
