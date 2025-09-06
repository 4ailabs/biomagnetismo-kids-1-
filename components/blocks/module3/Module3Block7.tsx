import React from 'react';
import CourseSection from '../../CourseSection';
import { Target, ArrowRight, CheckCircle, Activity, Shield, Zap } from 'lucide-react';
import { textUtils } from '../../../src/styles/typography';

const Module3Block7: React.FC = () => {
  return (
    <div id="block-7" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-8 sm:py-16 px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-slate-200 rounded-full">
              <Target className="w-8 h-8 sm:w-12 sm:h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
            Técnicas de Rastreo Integradas
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto px-2">
            Protocolos Avanzados para el Biomagnetismo Escolar
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción a las Técnicas de Rastreo"
          icon={<Target className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className="${textUtils.title.subsection} text-gray-800 mb-4 sm:mb-6">
              Rastreo Biomagnético en el Contexto Escolar
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Las técnicas de rastreo integradas son fundamentales para el éxito del biomagnetismo 
                escolar. Permiten identificar conflictos biológicos, microorganismos patógenos y 
                desequilibrios energéticos que afectan el aprendizaje y bienestar de los estudiantes.
              </p>
              <p>
                <strong>El rastreo sistemático</strong> nos permite localizar con precisión los 
                pares biomagnéticos desequilibrados, identificar microorganismos específicos y 
                determinar el protocolo de tratamiento más efectivo para cada caso.
              </p>
              <p>
                <strong>La integración de técnicas</strong> combina el test muscular, la detección 
                de microorganismos, la identificación de conflictos emocionales y la aplicación 
                de protocolos específicos para cada patología escolar.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 text-slate-800 text-center">
          <h2 className="${textUtils.title.subsection} mb-3 sm:mb-4">
            ¿Listo para el Seguimiento?
          </h2>
          <p className="text-slate-700 mb-4 sm:mb-6 text-sm sm:text-base">
            Ahora que conoces las técnicas de rastreo integradas, es momento de aprender 
            sobre los criterios de seguimiento, ética y recursos disponibles.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block7;