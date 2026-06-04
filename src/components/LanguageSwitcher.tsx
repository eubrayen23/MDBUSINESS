import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
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
    <div className="flex items-center gap-1 bg-studio-dark/5 backdrop-blur-md rounded-full p-1 border border-studio-dark/5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest transition-all ${
            i18n.language === lang.code
              ? 'bg-studio-dark text-white shadow-lg'
              : 'text-studio-dark/60 hover:text-studio-dark hover:bg-studio-dark/5'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
