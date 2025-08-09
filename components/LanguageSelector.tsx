import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors duration-200 bg-white/80 backdrop-blur-sm rounded-lg border border-white/20 hover:border-teal-200 hover:bg-white/90">
        <Globe className="w-4 h-4" />
        <span>{t('common.language')}</span>
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          <button
            onClick={() => changeLanguage('es')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-teal-50 transition-colors duration-150 ${
              i18n.language === 'es' ? 'text-teal-600 bg-teal-50' : 'text-slate-700'
            }`}
          >
            🇪🇸 {t('common.spanish')}
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-teal-50 transition-colors duration-150 ${
              i18n.language === 'en' ? 'text-teal-600 bg-teal-50' : 'text-slate-700'
            }`}
          >
            🇺🇸 {t('common.english')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
