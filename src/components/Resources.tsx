
import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./Resources.module.css";

const ResourceCard = ({
  title,
  description,
  linkText,
  linkHref,
}: {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={linkHref} className={styles.cardLink}>
        {linkText} →
      </a>
    </div>
  );
};

const Resources = () => {
  const { t } = useTranslation();

  return (
    <section id="recursos" className={styles.section}>
      <h2 className={styles.heading}>Recursos</h2>

      <p className={styles.description}>
        Breve descrição de como o App da Kosen pode ajudar as empresas.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non elit non lacus
        consectetur egestas eget eu mauris. Suspendisse potenti. Etiam eget accumsan tellus, sed
        eleifend augue.
      </p>

      <div className={styles.resourcesContainer}>
        <ResourceCard
          title="Recurso #01 (Adicione título)"
          description="Breve descrição do recurso #01 (Adicione descrição)."
          linkText="Link para descrição mais detalhada do recurso #01"
          linkHref="#"
        />
        <ResourceCard
          title="Recurso #02 (Adicione título)"
          description="Breve descrição do recurso #02 (Adicione descrição)."
          linkText="Link para descrição mais detalhada do recurso #02"
          linkHref="#"
        />
        <ResourceCard
          title="Recurso #03 (Adicione título)"
          description="Breve descrição do recurso #03 (Adicione descrição)."
          linkText="Link para descrição mais detalhada do recurso #03"
          linkHref="#"
        />
      </div>
    </section>
  );
};

export default Resources;
