
import { en } from "./translations/en";
import { pt } from "./translations/pt";
import { es } from "./translations/es";

export type Language = "en" | "pt" | "es";
export type Translations = typeof en;

export const translations = {
  en,
  pt,
  es,
};

export const defaultLanguage: Language = "pt";
