"use client";

// ReactJS
import { createContext, useContext, useState } from "react";

// I18N
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

// Locales
import EN from "@locales/en.json";
import ES from "@locales/es.json";

// Hooks
import useLocalStorage from "@hooks/useLocalStorage";

const LanguageContext = createContext({
    language: "es",
    changeLanguage: (newLanguage: string) => { }
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    // Custom Hooks
    const [item, setItem] = useLocalStorage("language", i18next.language);

    // useState
    const [language, setLanguage] = useState(item);

    // Functions
    const changeLanguage = (newLanguage: string) => {
        setItem(newLanguage);
        setLanguage(newLanguage);
        i18next?.changeLanguage(newLanguage);
    };

    // I18N
    i18next.use(initReactI18next).init({
        fallbackLng: "es",
        lng: language,
        debug: false,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: EN
            },
            es: {
                translation: ES
            }
        }
    });

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
