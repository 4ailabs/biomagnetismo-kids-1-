import React from 'react';
import { useTranslation } from "react-i18next";
import CourseSection from '../../CourseSection';
import { Sparkles, Brain, AlertTriangle, Heart, Shield, Target, Zap, Eye } from 'lucide-react';

const Module2Block9: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="block-9" className="space-y-12 w-full overflow-hidden">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-700 mb-3">{t('module2.block9.objective.title')}</h2>
        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          {t('module2.block9.objective.content')}
        </p>
      </section>

      <CourseSection title={t('module2.block9.fundamentals.title')} icon={<Brain />}>
        <div className="space-y-8">
          {/* Introducción a los hologramas */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 shadow-md border-l-4 border-violet-200">
            <h3 className="text-xl font-bold text-violet-800 mb-4">¿Qué son los Hologramas?</h3>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              {t('module2.block9.fundamentals.intro')}
            </p>
            <div className="bg-white/70 rounded-lg p-4 border border-violet-100">
              <h4 className="font-semibold text-violet-700 mb-2">Eventos Poblacionales</h4>
              <p className="text-slate-600 text-sm">
                {t('module2.block9.fundamentals.population')}
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-4 border border-violet-100 mt-4">
              <h4 className="font-semibold text-violet-700 mb-2">Definición Clave</h4>
              <p className="text-slate-600 text-sm">
                {t('module2.block9.fundamentals.definition')}
              </p>
            </div>
          </div>

          {/* Los 7 Hologramas */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 shadow-md border-l-4 border-indigo-200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-800 mb-6 text-center">
              Los 7 Hologramas de la Primera Infancia
            </h3>
            <p className="text-slate-700 leading-relaxed text-base mb-6 text-center">
              Cada holograma representa un patrón específico de trauma que se manifiesta de manera única en los niños
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {(t('module2.block9.holograms', { returnObjects: true }) as any[]).map((hologram, index) => (
                <div key={index} className="bg-white/80 rounded-xl p-5 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">{hologram.number}</span>
                    </div>
                    <h4 className="text-lg font-bold text-indigo-800">{hologram.title}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-indigo-50 rounded-lg p-3">
                      <h5 className="font-semibold text-indigo-700 text-sm mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Manifestación General
                      </h5>
                      <p className="text-slate-600 text-sm">{hologram.description}</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h5 className="font-semibold text-purple-700 text-sm mb-2 flex items-center">
                        <Heart className="w-4 h-4 mr-2" />
                        En el Niño
                      </h5>
                      <p className="text-slate-600 text-sm">{hologram.child}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Protocolo de Trabajo con Hologramas */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-md border-l-4 border-emerald-200">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">Protocolo de Trabajo con Hologramas en Niños</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Identificación del Holograma</h4>
                  <p className="text-slate-700 text-sm">
                    Observa el comportamiento del niño y busca patrones que coincidan con alguno de los 7 hologramas. 
                    Los síntomas físicos y emocionales te darán pistas claras.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Localización de Puntos</h4>
                  <p className="text-slate-700 text-sm">
                    Cada holograma tiene puntos específicos en el cuerpo. Usa el test muscular para encontrar 
                    exactamente dónde está almacenada la información del trauma.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Aplicación de Pares</h4>
                  <p className="text-slate-700 text-sm">
                    Aplica los pares biomagnéticos correspondientes. Los niños son muy sensibles, 
                    así que menos presión y más intuición. Observa cambios inmediatos en su expresión.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800 mb-2">Integración y Seguimiento</h4>
                  <p className="text-slate-700 text-sm">
                    Los cambios pueden ser inmediatos o aparecer en los días siguientes. Mantén un registro 
                    de las transformaciones y ajusta el protocolo según sea necesario.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reflexión del Bloque */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md border-l-4 border-amber-200">
            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Reflexión del Bloque 9
            </h3>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              Los hologramas nos enseñan que los niños no solo experimentan eventos traumáticos, sino que 
              estos se almacenan en su campo energético de manera específica y predecible.
            </p>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              Cada holograma es como una "huella digital energética" que nos permite identificar exactamente 
              qué tipo de trauma está afectando al niño y cómo trabajarlo de manera efectiva.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Al comprender estos patrones, podemos transformar el trabajo terapéutico de una búsqueda 
              general a una intervención precisa y dirigida, acelerando la sanación y reduciendo el sufrimiento.
            </p>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default Module2Block9;
