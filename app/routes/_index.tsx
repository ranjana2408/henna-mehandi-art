import React from "react";
import type { MetaFunction } from "@remix-run/node";
import HomePage from "~/layout/homePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Janki's Mehndi: Stunning Henna Designs for Your Special Day" },
    {
      description:
        "Discover the beauty of Janki's Mehndi! Explore intricate henna designs perfect for weddings, festivals, and special occasions. Let Janki create unforgettable mehndi art that reflects your unique style. Book your appointment today!",
    },
  ];
};

export default function Index() {
  return <HomePage/>
}
