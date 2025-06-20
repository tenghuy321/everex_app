import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lang) => {
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    };

    useEffect(() => {
        document.body.style.fontFamily =
            i18n.language === 'kh' ? "'Kantumruy Pro', sans-serif" : "'Inter', sans-serif";
    }, [i18n.language]);

    return (
        <div className="inline-flex items-center rounded-full bg-white p-1 text-[12px] md:text-[14px] font-medium">
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 cursor-pointer rounded-full transition-all duration-300 ${
                    i18n.language === 'en' ? 'bg-[#f17474] text-white shadow-sm' : 'text-black'
                }`}
            >
                English
            </button>
            <button
                onClick={() => changeLanguage('kh')}
                className={`px-3 py-1 cursor-pointer rounded-full transition-all duration-300 ${
                    i18n.language === 'kh' ? 'bg-[#f17474] text-white shadow-sm' : 'text-black'
                }`}
            >
                {t("khmer")}
            </button>
        </div>
    );
};

export default LanguageToggle;
