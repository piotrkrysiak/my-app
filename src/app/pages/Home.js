import React from "react";
import { Cards } from "../components/cards/Cards";
import { Footer } from "../components/footer/Footer";

import { Hero } from "../components/hero/Hero";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
};
