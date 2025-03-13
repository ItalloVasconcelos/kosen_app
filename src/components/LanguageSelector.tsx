
import { useState } from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import { Language } from "@/lib/i18n";
import styles from "./LanguageSelector.module.css";

const LanguageSelector = () => {
  const { language, changeLanguage } = useTranslation();

  const languages: { code: Language; label: string }[] = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" }
  ];

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
  };

  return (
    <div className={styles.container}>
      <div className={styles.languageOptions}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`${styles.languageOption} ${
              language === lang.code ? styles.selected : ""
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
