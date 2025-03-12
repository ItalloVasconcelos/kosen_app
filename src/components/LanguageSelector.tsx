
import { useState } from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import { Language } from "@/lib/i18n";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./LanguageSelector.module.css";

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
    <div className={styles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
      >
        {languages[language]}
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {Object.entries(languages).map(([langCode, langName]) => (
            <button
              key={langCode}
              onClick={() => handleLanguageChange(langCode as Language)}
              className={`${styles.languageOption} ${
                language === langCode ? styles.selected : styles.normal
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
