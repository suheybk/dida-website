import { createContext, useContext, useState, useEffect } from 'react';
import { dictionary as translations } from '../locales/dictionary';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    // Check generic browser language on mount, optional but nice
    useEffect(() => {
        const browserLang = navigator.language.split('-')[0];
        if (['tr', 'ar'].includes(browserLang)) {
            setLanguage(browserLang);
        }
    }, []);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        for (let k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    const isRTL = language === 'ar';

    useEffect(() => {
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [isRTL, language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
