
import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
              <img
                  src={theme === "dark" ? "/images/logo_kosen_energy_dark.svg" : "/images/logo_kosen_energy.svg"}
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
              <ArrowRight size={16} className={styles.buttonIcon} />
            </a>
            
            <a href="#resources" className={styles.secondaryButton}>
              {t.hero.tryButton}
              <ArrowRight size={16} className={styles.buttonIcon} />
            </a>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <img 
            src="/images/energy-illustration.png" 
            alt="Energy Illustration" 
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
