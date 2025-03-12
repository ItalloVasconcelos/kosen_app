
import { useRef, useEffect, useState } from "react";

const BenefitCard = ({ 
  title, 
  description, 
  color,
  delay 
}: { 
  title: string; 
  description: string; 
  color: string;
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

  return (
    <div
      ref={cardRef}
      className={`${color} p-6 rounded-lg shadow-lg hover-lift transition-all duration-500 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <section id="benefícios" className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Por que Kosen Energy?
      </h2>
      
      <p className="text-kosen-muted max-w-3xl mb-12 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non elit non lacus consectetur egestas eget eu mauris. Suspendisse potenti. Etiam eget accumsan tellus, sed eleifend augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Benefícios do Kosen Energy
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BenefitCard
          title="Energia Limpa"
          description="Soluções sustentáveis que reduzem a emissão de carbono e contribuem para um planeta mais limpo."
          color="bg-kosen-primary"
          delay={100}
        />
        <BenefitCard
          title="Economia Real"
          description="Reduza seus custos com energia através de soluções inteligentes e eficientes."
          color="bg-kosen-secondary"
          delay={300}
        />
        <BenefitCard
          title="Tecnologia Avançada"
          description="Utilizamos o que há de mais moderno em tecnologia para otimizar o consumo de energia."
          color="bg-kosen-tertiary"
          delay={500}
        />
      </div>
    </section>
  );
};

export default Benefits;
