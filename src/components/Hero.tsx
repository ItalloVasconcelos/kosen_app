
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
                  width={350}
                  src={theme === "dark" ? "/images/logo_kosen_energy_light.svg" : "/images/logo_kosen_energy_dark.svg"}
                  alt="Kosen Energy Logo"
                  className={styles.heroLogo}
                  loading="eager"
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
                width={450}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                alt="Energy Solutions" 
                className={styles.aboutImage}
                loading="eager"
            />
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
