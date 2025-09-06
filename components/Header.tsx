import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { Magnet, Menu, X, Home, List, Presentation } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Actualizar el título de la página dinámicamente
  useDocumentTitle(currentModule?.title || 'Módulo 1');

  return (
    <header className="relative bg-white/80 backdrop-blur-md shadow-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto py-3 sm:py-4 lg:py-6 xl:py-8 px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Mobile Menu Button */}
        {isInModule && (
          <div className="lg:hidden absolute top-2 right-2 z-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-white/80 backdrop-blur-sm text-slate-600 rounded-lg shadow-sm hover:bg-white hover:text-slate-800 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        )}

        {/* Desktop Navigation - Solo visible en pantallas grandes */}
        <div className="hidden lg:flex absolute top-2 right-2 z-10 space-x-2">
          <LanguageSelector />
          {isInModule && (
            <>
              <Link 
                to="/"
                className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-slate-500 to-slate-600 text-white text-sm font-medium rounded-lg hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Link>
              <button
                onClick={() => window.open('/resources/lista-pares-biomagneticos.html', '_blank')}
                className="inline-flex items-center px-3 py-2 bg-white/80 backdrop-blur-sm text-slate-600 text-sm font-medium rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md border border-slate-200/50"
              >
                <List className="w-4 h-4 mr-2" />
                Lista de Pares
              </button>
              {activeModule === 2 && (
                <Link 
                  to="/presentation-modulo2"
                  className="inline-flex items-center px-3 py-2 bg-white/80 backdrop-blur-sm text-slate-600 text-sm font-medium rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md border border-slate-200/50"
                >
                  <Presentation className="w-4 h-4 mr-2" />
                  Diapositivas
                </Link>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl transform transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-800">Menú de Navegación</h3>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="pb-4 border-b border-slate-200">
                    <LanguageSelector />
                  </div>
                  
                  <Link 
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center w-full px-4 py-3 bg-gradient-to-r from-slate-500 to-slate-600 text-white rounded-lg hover:from-slate-600 hover:to-slate-700 transition-all duration-300"
                  >
                    <Home className="w-5 h-5 mr-3" />
                    <span>Volver al Inicio</span>
                  </Link>
                  
                  <button
                    onClick={() => {
                      window.open('/resources/lista-pares-biomagneticos.html', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-all duration-300"
                  >
                    <List className="w-5 h-5 mr-3" />
                    <span>Lista de Pares</span>
                  </button>
                  
                  {activeModule === 2 && (
                    <Link 
                      to="/presentation-modulo2"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center w-full px-4 py-3 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-all duration-300"
                    >
                      <Presentation className="w-5 h-5 mr-3" />
                      <span>Diapositivas</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Module Selector - Solo visible en pantallas grandes */}
        <div className="hidden lg:block absolute top-2 left-2 z-10">
          <ModuleSelector />
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-lg mb-3 sm:mb-4 lg:mb-6">
            <Magnet className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent sm:animate-pulse leading-tight pb-2">
            Biomagnetismo Kids
          </h1>
          <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-700 max-w-3xl sm:max-w-4xl mx-auto font-medium px-2 sm:px-4 leading-relaxed">
            {isInModule ? `${currentModule?.title} – ${currentModule?.subtitle}` : 'Formación Especializada en Biomagnetismo Infantil'}
          </p>
          <div className="mt-3 sm:mt-4 lg:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full mr-1 sm:mr-1.5 lg:mr-2 animate-pulse"></span>
              {t('header.course')}
            </span>
            <span className="flex items-center">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full mr-1 sm:mr-1.5 lg:mr-2 animate-pulse delay-300"></span>
              {isInModule ? (activeModule === 1 ? 'Duración: 8 semanas' : 'Duración: 6 semanas') : 'Módulos Especializados'}
            </span>
            <span className="flex items-center">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full mr-1 sm:mr-1.5 lg:mr-2 animate-pulse delay-700"></span>
              {t('header.modality')}
            </span>
          </div>
          
          {/* Breadcrumb Navigation - solo visible cuando estamos en un módulo */}
          {isInModule && (
            <div className="mt-3 sm:mt-4 lg:mt-5 xl:mt-6">
              <nav className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-500">
                <Link to="/" className="hover:text-slate-700 transition-colors">
                  Inicio
                </Link>
                <span className="text-slate-300">/</span>
                <span className="text-slate-700 font-medium">
                  {currentModule?.title}
                </span>
              </nav>
            </div>
          )}

          {/* Información contextual del módulo - solo visible cuando estamos en un módulo */}
          {isInModule && (
            <div className="mt-4 sm:mt-5 lg:mt-6 xl:mt-8 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg sm:rounded-xl border border-teal-100 max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                {activeModule === 1 
                  ? "Este módulo te guiará desde la concepción hasta los primeros meses de vida, explorando cómo las experiencias gestacionales y perinatales influyen en el campo energético del bebé."
                  : activeModule === 2
                  ? "Descubre cómo el desarrollo infantil entre los 3 meses y 5 años crea patrones energéticos que influyen en la salud y comportamiento del niño."
                  : "Aprende a aplicar el biomagnetismo en el contexto escolar, identificando y trabajando con los conflictos biológicos que afectan el aprendizaje de niños de 5-12 años."
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
