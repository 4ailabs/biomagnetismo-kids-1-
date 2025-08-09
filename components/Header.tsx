import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="relative bg-white/80 backdrop-blur-md shadow-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        {/* Language Selector */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSelector />
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-lg mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl">🧲</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent sm:animate-pulse leading-tight pb-2">
            Biomagnetismo Kids
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto font-medium px-4 leading-relaxed">
            {t('header.title')} – {t('header.subtitle')}
          </p>
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
              {t('header.course')}
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-1.5 sm:mr-2 animate-pulse delay-300"></span>
              {t('header.duration')}
            </span>
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mr-1.5 sm:mr-2 animate-pulse delay-700"></span>
              {t('header.modality')}
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
                        <a href="#block-1" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">
                            Bloque 1
                        </a>
                        <a href="#block-2" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">
                            Bloque 2
                        </a>
                        <a href="#block-3" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">
                            Bloque 3
                        </a>
                        <a href="#block-4" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">
                            Bloque 4
                        </a>
                        <a href="#block-5" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">
                            Bloque 5
                        </a>
                        <a href="#baby-regulation" className="text-slate-600 hover:text-teal-600 transition-colors font-medium">
                            🍼 Regulación Bebé
                        </a>
                    </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
