import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from './locales/en';
import es from './locales/es';

const dictionaries = { en, es };
const STORAGE_KEY = 'tecvida-lang';
const SUPPORTED = Object.keys(dictionaries);

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const browserLang = window.navigator.language?.slice(0, 2);
  return SUPPORTED.includes(browserLang) ? browserLang : 'en';
}

function resolve(dictionary, path) {
  return path.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), dictionary);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = useMemo(() => {
    const dictionary = dictionaries[language] ?? dictionaries.en;
    return (path) => {
      const value = resolve(dictionary, path);
      if (value === undefined) return resolve(dictionaries.en, path) ?? path;
      return value;
    };
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
