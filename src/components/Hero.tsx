
import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
              <img
                  src="/images/logo_kosen_energy.svg"
                  alt="Kosen Energy Logo"
                  className={styles.heroLogo}
              />
          </div>

          <p className={styles.description}>
            {t.hero.description}
          </p>

          <div className={styles.buttonContainer}>
            <a href="#contact" className={styles.primaryButton}>
              {t.hero.buyButton}
            </a>
            
            <a href="#resources" className={styles.secondaryButton}>
              {t.hero.tryButton}
            </a>
          </div>
        </div>
        
        {/*<div className={styles.imageContainer}>*/}
        {/*  <img */}
        {/*    src="/lovable-uploads/b2a53328-dc84-4ec0-a0b7-be7e7b068169.png" */}
        {/*    alt="Kosen Energy Platform" */}
        {/*    className={styles.heroImage}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Hero;
