import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Check local storage first
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    } else {
      // Check browser language
      const browserLang = navigator.language;
      if (browserLang.toLowerCase().startsWith('tr')) {
        setLanguage('tr');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if translation missing
        let fallback = translations['en'];
        for (const fbK of keys) {
          if (fallback && fallback[fbK]) {
            fallback = fallback[fbK];
          } else {
            return key; // Return key if not found
          }
        }
        return fallback;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
