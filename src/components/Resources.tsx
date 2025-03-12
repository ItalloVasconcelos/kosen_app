
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

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
      className={`border border-kosen-border p-6 rounded-lg hover:border-kosen-primary/30 transition-all duration-300 hover:shadow-lg hover-lift ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-kosen-dark font-semibold text-lg mb-2">{title}</h3>
      <p className="text-kosen-muted mb-4">{description}</p>
      <a 
        href={link} 
        className="text-kosen-primary flex items-center group"
      >
        <span className="transition-all duration-300 group-hover:mr-2">
          Saiba mais
        </span>
        <ArrowRight 
          className={`h-4 w-4 transform transition-all duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`} 
        />
      </a>
    </div>
  );
};

const Resources = () => {
  return (
    <section id="recursos" className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Recursos
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
