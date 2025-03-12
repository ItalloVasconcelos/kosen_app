
import { useState } from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import { Language } from "@/lib/i18n";
import { ChevronDown, ChevronUp } from "lucide-react";

const LanguageSelector = () => {
  const { language, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { [key in Language]: string } = {
    en: "English",
    pt: "Português",
    es: "Español"
  };

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-kosen-dark hover:text-kosen-primary transition-ease font-medium"
      >
        {languages[language]}
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white shadow-md rounded-md py-1 z-50">
          {Object.entries(languages).map(([langCode, langName]) => (
            <button
              key={langCode}
              onClick={() => handleLanguageChange(langCode as Language)}
              className={`block w-full text-left px-4 py-2 hover:bg-kosen-primary/5 ${
                language === langCode ? "text-kosen-primary font-medium" : "text-kosen-dark"
              }`}
            >
              {langName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
