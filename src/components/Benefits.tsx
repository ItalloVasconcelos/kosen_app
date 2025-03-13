
import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./Benefits.module.css";

const BenefitCard = ({ 
  title, 
  description, 
  color
}: { 
  title: string; 
  description: string; 
  color: "primary" | "secondary" | "tertiary";
}) => {
  const getColorClass = () => {
    switch (color) {
      case "primary": return styles.cardPrimary;
      case "secondary": return styles.cardSecondary;
      case "tertiary": return styles.cardTertiary;
      default: return styles.cardPrimary;
    }
  };

  return (
    <div className={`${styles.card} ${getColorClass()}`}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const Benefits = () => {
  const { t } = useTranslation();
  
  return (
    <section id="benefits" className={styles.section}>
      <h2 className={styles.heading}>
          {t.benefits.title}
      </h2>
      
      <div className={styles.benefitsContainer}>
        <BenefitCard
          title="Benefício #01 (Adicione título)"
          description="Descrição do benefício #01 (Adicione Descrição)."
          color="primary"
        />
        <BenefitCard
          title="Benefício #02 (Adicione título)"
          description="Descrição do benefício #02 (Adicione Descrição)."
          color="secondary"
        />
        <BenefitCard
          title="Benefício #03 (Adicione título)"
          description="Descrição do benefício #03 (Adicione Descrição)."
          color="tertiary"
        />
      </div>
    </section>
  );
};

export default Benefits;
