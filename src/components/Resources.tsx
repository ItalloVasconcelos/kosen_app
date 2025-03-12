
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import styles from "./Resources.module.css";

const ResourceCard = ({ 
  title, 
  description, 
  link, 
  index 
}: { 
  title: string; 
  description: string; 
  link: string;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 200);
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
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${
        isVisible 
          ? styles.cardVisible
          : styles.cardHidden
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a 
        href={link} 
        className={styles.cardLink}
      >
        <span style={{ marginRight: isHovered ? '0.5rem' : '0' }}>
          Saiba mais
        </span>
        <ArrowRight 
          className={styles.arrowIcon}
          style={{ transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}
        />
      </a>
    </div>
  );
};

const Resources = () => {
  return (
    <section id="recursos" className={styles.section}>
      <h2 className={styles.heading}>
        Recursos
      </h2>
      
      <div className={styles.resourcesContainer}>
        <ResourceCard
          title="Monitoramento em Tempo Real"
          description="Acompanhe o consumo de energia da sua empresa ou residência em tempo real através do nosso aplicativo."
          link="#recurso-monitoramento"
          index={0}
        />
        <ResourceCard
          title="Análise de Eficiência"
          description="Relatórios detalhados sobre o consumo e eficiência energética com recomendações personalizadas."
          link="#recurso-analise"
          index={1}
        />
        <ResourceCard
          title="Integração com Dispositivos"
          description="Conecte-se com dispositivos inteligentes para otimizar o consumo de energia automaticamente."
          link="#recurso-integracao"
          index={2}
        />
      </div>
    </section>
  );
};

export default Resources;
