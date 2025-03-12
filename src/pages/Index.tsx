
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Resources from "@/components/Resources";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add a scroll reveal effect to sections
  useEffect(() => {
    // Initialize sections with opacity 0
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    // Create observer to reveal sections when they enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />
      <Hero />
      <Benefits />
      <Resources />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
