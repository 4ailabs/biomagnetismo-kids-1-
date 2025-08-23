import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlockSelector from './components/BlockSelector';
import DynamicManual from './components/DynamicManual';
import Presentation from './pages/Presentation';
import ModuleSelector from './components/ModuleSelector';
import { ModuleProvider, useModuleFromRoute } from './src/contexts/ModuleContext';

// Página principal con selector de módulos
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-tr from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
          {/* Selector de módulos en la página principal */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
              Selecciona tu Módulo de Estudio
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
              Elige el módulo que mejor se adapte a tus necesidades de aprendizaje en biomagnetismo pediátrico
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-4xl lg:max-w-5xl mx-auto">
            {/* Módulo 1 */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl sm:text-2xl lg:text-3xl">🧲</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Módulo 1: Biomagnetismo Prenatal
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                  El Inicio Invisible: Cuando la Historia Empieza Antes de Nacer
                </p>
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-500">
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full mr-1.5 sm:mr-2"></span>
                    Duración: 8 semanas
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-1.5 sm:mr-2"></span>
                    5 bloques de contenido
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mr-1.5 sm:mr-2"></span>
                    Nivel: Básico-Intermedio
                  </div>
                </div>
                <a 
                  href="/modulo/1" 
                  className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Comenzar Módulo
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl sm:text-2xl lg:text-3xl">👶</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Módulo 2: Desarrollo Infantil
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                  Del Apego a la Autonomía: Patrones Energéticos de 3 Meses a 5 Años
                </p>
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-500">
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full mr-1.5 sm:mr-2"></span>
                    Duración: 6 semanas
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mr-1.5 sm:mr-2"></span>
                    5 bloques de contenido
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full mr-1.5 sm:mr-2"></span>
                    Nivel: Intermedio-Avanzado
                  </div>
                </div>
                <a 
                  href="/modulo/2" 
                  className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Comenzar Módulo
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

// Página específica del módulo
const ModulePage: React.FC = () => {
  // Usar el hook para detectar automáticamente el módulo desde la URL
  useModuleFromRoute();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-tr from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="max-w-6xl mx-auto py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
          <div className="sticky top-2 sm:top-4 lg:top-6 z-20 mb-6 sm:mb-8 lg:mb-10">
            <BlockSelector />
          </div>
          <div className="relative">
            <DynamicManual />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ModuleProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modulo/:moduleId" element={<ModulePage />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </ModuleProvider>
  );
};

export default App;
