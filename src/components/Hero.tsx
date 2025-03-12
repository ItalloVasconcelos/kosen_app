
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./Hero.module.css";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Content Column */}
        <div className={styles.contentCol}>
          <div className={styles.logoBox}>
            KOSEN ENERGY
          </div>
          
          <h1 className={styles.description}>
            {t.hero.description}
          </h1>
          
          <div className={styles.buttonContainer}>
            <button className={styles.primaryButton}>
              <span>{t.hero.buyButton}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <button className={styles.secondaryButton}>
              {t.hero.tryButton}
            </button>
          </div>
        </div>
        
        {/* Image Column */}
        <div className={styles.imageCol}>
          <div className={styles.imageContainer}>
            <div className={styles.overlay}></div>
            <div className={styles.platformBox}>
              <div className={styles.platformContent}>
                Plataforma Kosen Energy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
