import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { Magnet } from 'lucide-react';
import { useModule } from '../src/contexts/ModuleContext';
import { useDocumentTitle } from '../src/hooks/useDocumentTitle';
import LanguageSelector from './LanguageSelector';
import ModuleSelector from './ModuleSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { activeModule, modules } = useModule();
  const location = useLocation();
  const currentModule = modules.find(m => m.id === activeModule);
  const isInModule = location.pathname.startsWith('/modulo/');
  
  // Actualizar el título de la página dinámicamente
  useDocumentTitle(currentModule?.title || 'Módulo 1');

  return (
    <header className="relative bg-white/80 backdrop-blur-md shadow-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto py-3 sm:py-4 lg:py-6 xl:py-8 px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Language Selector */}
        <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 z-10">
          <LanguageSelector />
        </div>
        
        {/* Module Selector */}
        <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 z-10">
          <ModuleSelector />
        </div>

        {/* Botón Volver al Inicio - solo visible cuando estamos en un módulo */}
        {isInModule && (
          <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 z-10">
            <Link 
              to="/"
              className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-slate-500 to-slate-600 text-white text-xs sm:text-sm font-medium rounded-md sm:rounded-lg hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">Volver al Inicio</span>
              <span className="sm:hidden">Inicio</span>
            </Link>
          </div>
        )}
        
        {/* Botón de Diapositivas - solo visible cuando estamos en el Módulo 2 */}
        {isInModule && activeModule === 2 && (
          <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 z-10">
            <Link 
              to="/presentation-modulo2"
              className="inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm text-slate-600 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md border border-slate-200/50"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="hidden sm:inline">Diapositivas</span>
              <span className="sm:hidden">Slides</span>
            </Link>
          </div>
        )}
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-lg mb-3 sm:mb-4 lg:mb-6">
            <Magnet className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent sm:animate-pulse leading-tight pb-2">
            Biomagnetismo Kids
          </h1>
          <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-700 max-w-3xl sm:max-w-4xl mx-auto font-medium px-2 sm:px-4 leading-relaxed">
            {currentModule?.title} – {currentModule?.subtitle}
          </p>
          <div className="mt-3 sm:mt-4 lg:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-1 sm:mr-1.5 lg:mr-2 animate-pulse"></span>
              {t('header.course')}
            </span>
            <span className="flex items-center">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full mr-1 sm:mr-1.5 lg:mr-2 animate-pulse delay-300"></span>
              {activeModule === 1 ? 'Duración: 8 semanas' : 'Duración: 6 semanas'}
            </span>
            <span className="flex items-center">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full mr-1 sm:mr-1.5 lg:mr-2 animate-pulse delay-700"></span>
              {t('header.modality')}
            </span>
          </div>
          
          {/* Información contextual del módulo - solo visible cuando estamos en un módulo */}
          {isInModule && (
            <div className="mt-4 sm:mt-5 lg:mt-6 xl:mt-8 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg sm:rounded-xl border border-teal-100 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                {activeModule === 1 
                  ? "Este módulo te guiará desde la concepción hasta los primeros meses de vida, explorando cómo las experiencias gestacionales y perinatales influyen en el campo energético del bebé."
                  : "Descubre cómo el desarrollo infantil entre los 3 meses y 5 años crea patrones energéticos que influyen en la salud y comportamiento del niño."
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
