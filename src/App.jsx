import React from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/HeroLanding";
import HowITWorks from "./components/HowITWorks";
import CTA from "./components/CTA";
import Menu from "./components/Menu";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Support from "./components/Support";
import Footer from "./components/Footer";


function HomePage() {
  return (
    <>
      <Hero />
      <CTA />
      <Menu />
      <FAQ />
      <Features />
      <Support />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<HomePage />} />

      {/* Company page */}
      <Route path="/company" element={<HowITWorks />} />
    </Routes>
  );
}