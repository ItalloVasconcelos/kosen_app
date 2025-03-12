
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/TranslationContext";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-28 pb-16 md:py-20 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
        {/* Content Column */}
        <div className="flex-1 animate-fade-in-right">
          <div className="h-10 w-48 bg-kosen-primary rounded-sm flex items-center justify-center text-white font-bold mb-6">
            KOSEN ENERGY
          </div>
          
          <h1 className="text-xl md:text-2xl leading-relaxed text-kosen-dark mb-6">
            {t.hero.description}
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-kosen-primary text-white px-6 py-3 rounded hover-lift hover:bg-kosen-primary/90 transition-ease flex items-center justify-center">
              <span>{t.hero.buyButton}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <button className="border border-kosen-primary text-kosen-primary px-6 py-3 rounded hover-lift hover:bg-kosen-primary/5 transition-ease">
              {t.hero.tryButton}
            </button>
          </div>
        </div>
        
        {/* Image Column */}
        <div className="flex-1 w-full animate-fade-in-left">
          <div className="relative overflow-hidden rounded-lg shadow-xl hover-lift h-[300px] md:h-auto bg-kosen-primary/20">
            <div className="absolute inset-0 bg-kosen-primary/20 z-10 backdrop-blur-sm"></div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="h-[240px] w-[400px] bg-kosen-primary rounded-md transition-all duration-500 hover:scale-105 flex items-center justify-center text-white font-bold text-2xl p-8 text-center">
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
