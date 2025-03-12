
import { useRef, useEffect, useState } from "react";
import styles from "./Benefits.module.css";

const BenefitCard = ({ 
  title, 
  description, 
  color,
  delay 
}: { 
  title: string; 
  description: string; 
  color: "primary" | "secondary" | "tertiary";
  delay: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const getColorClass = () => {
    switch (color) {
      case "primary": return styles.cardPrimary;
      case "secondary": return styles.cardSecondary;
      case "tertiary": return styles.cardTertiary;
      default: return styles.cardPrimary;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${getColorClass()} ${
        isVisible 
          ? styles.cardVisible
          : styles.cardHidden
      }`}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefícios" className={styles.section}>
      <h2 className={styles.heading}>
        Por que Kosen Energy?
      </h2>
      
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non elit non lacus consectetur egestas eget eu mauris. Suspendisse potenti. Etiam eget accumsan tellus, sed eleifend augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      
      <h2 className={styles.heading}>
        Benefícios do Kosen Energy
      </h2>
      
      <div className={styles.benefitsContainer}>
        <BenefitCard
          title="Energia Limpa"
          description="Soluções sustentáveis que reduzem a emissão de carbono e contribuem para um planeta mais limpo."
          color="primary"
          delay={100}
        />
        <BenefitCard
          title="Economia Real"
          description="Reduza seus custos com energia através de soluções inteligentes e eficientes."
          color="secondary"
          delay={300}
        />
        <BenefitCard
          title="Tecnologia Avançada"
          description="Utilizamos o que há de mais moderno em tecnologia para otimizar o consumo de energia."
          color="tertiary"
          delay={500}
        />
      </div>
    </section>
  );
};

export default Benefits;
