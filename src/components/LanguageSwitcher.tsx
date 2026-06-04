import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/10">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest transition-all ${
            i18n.language === lang.code
              ? 'bg-ochre-gold text-ebony-black shadow-lg'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
