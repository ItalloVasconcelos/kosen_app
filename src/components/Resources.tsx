
import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./Resources.module.css";

const ResourceCard = ({ 
  title, 
  description, 
  link 
}: { 
  title: string; 
  description: string; 
  link: string;
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={link} className={styles.cardLink}>
        {link} →
      </a>
    </div>
  );
};

const Resources = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.section}>      
      <h2 className={styles.heading}>
        Recursos
      </h2>
      
      <div className={styles.resourcesContainer}>
        <ResourceCard
          title="Recurso #01 (Adicione título)"
          description="Descrição do recurso #01 (Adicione Descrição)."
          link="Link para descrição mais detalhada do recurso #01"
        />
        <ResourceCard
          title="Recurso #02 (Adicione título)"
          description="Descrição do recurso #02 (Adicione Descrição)."
          link="Link para descrição mais detalhada do recurso #02"
        />
        <ResourceCard
          title="Recurso #03 (Adicione título)"
          description="Descrição do recurso #03 (Adicione Descrição)."
          link="Link para descrição mais detalhada do recurso #03"
        />
      </div>
    </section>
  );
};

export default Resources;
