
import { createContext, useContext, useState, ReactNode } from "react";
import { Language, Translations, translations, defaultLanguage } from "./index";

type TranslationContextType = {
  language: Language;
  t: Translations;
  changeLanguage: (lang: Language) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage, otherwise use default
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage && (savedLanguage === "en" || savedLanguage === "pt" || savedLanguage === "es")
      ? savedLanguage
      : defaultLanguage;
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const value = {
    language,
    t: translations[language],
    changeLanguage,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
