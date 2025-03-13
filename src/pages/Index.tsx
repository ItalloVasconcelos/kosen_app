
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Resources from "@/components/Resources";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <div id="about">
        <Hero />
      </div>
      <Benefits />
      <Resources />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
