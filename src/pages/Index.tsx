
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Resources from "@/components/Resources";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import styles from "./Index.module.css";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
      <div className={styles.container}>
          <Navbar/>

          <section id="about" className={styles.section}>
              <Hero/>
          </section>

          <section id="aboutUs" className={styles.section}>
              <AboutUs/>
          </section>

          <div className={styles.divider}></div>

          <section id="benefits" className={styles.section}>
              <Benefits/>
          </section>

          <div className={styles.divider}></div>

          <section id="resources" className={styles.section}>
              <Resources/>
          </section>

          <div className={styles.divider}></div>

          <section id="contact" className={styles.section}>
              <ContactSection/>
          </section>

          <Footer/>
      </div>
  );
};

export default Index;
