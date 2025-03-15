
import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./Benefits.module.css";

const BenefitCard = ({ 
  title, 
  description, 
  imageSrc
}: { 
  title: string; 
  description: string; 
  imageSrc: string;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img src={imageSrc} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
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
          imageSrc="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&auto=format&fit=crop"
        />
        <BenefitCard
          title="Benefício #02 (Adicione título)"
          description="Descrição do benefício #02 (Adicione Descrição)."
          imageSrc="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&auto=format&fit=crop"
        />
        <BenefitCard
          title="Benefício #03 (Adicione título)"
          description="Descrição do benefício #03 (Adicione Descrição)."
          imageSrc="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop"
        />
      </div>
    </section>
  );
};

export default Benefits;
