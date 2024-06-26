"use client";

// ReactJS
import { useTranslation } from "react-i18next";

// Context
import { useLanguage } from "@contexts/LanguageContext";

// Shopify
import { Icon } from "@shopify/polaris";
import { LanguageIcon } from "@shopify/polaris-icons";

export default function Translate () {
    // Language
    const { changeLanguage } = useLanguage();

    // Translation
    const { t } = useTranslation();

    // Functions
    const handleLanguage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, language: string) => {
        e.preventDefault();
        changeLanguage(language);
    };

    return (
        <div className="group inline-block relative z-10">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:bg-gray-400 transition-all">
                <Icon source={LanguageIcon} tone="base" />

                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </button>

            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li>
                    <button
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-32"
                        onClick={(e) => { handleLanguage(e, "es"); }}
                    >
                        {t("Language.es")}
                    </button>
                </li>

                <li>
                    <button
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-32"
                        onClick={(e) => { handleLanguage(e, "en"); }}
                    >
                        {t("Language.en")}
                    </button>
                </li>
            </ul>
        </div>
    );
}