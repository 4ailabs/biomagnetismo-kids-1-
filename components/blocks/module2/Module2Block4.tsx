import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Table, Beaker, Lightbulb, Sparkles } from 'lucide-react';
import CourseSection from '../../CourseSection';

const Module2Block4: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div id="block-4" className="space-y-12 w-full overflow-hidden">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-700 mb-3">Objetivo del Bloque</h2>
        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Aplicar técnicas avanzadas de biomagnetismo pediátrico para niños de 3-5 años, 
          integrando protocolos específicos para el desarrollo cognitivo y emocional en esta etapa crítica.
        </p>
      </section>

      <CourseSection title="Desarrollo Cognitivo y Biomagnetismo" icon={<BookOpen />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">El Cerebro en Desarrollo</h3>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              Entre los 3-5 años, el cerebro del niño experimenta un crecimiento explosivo. 
              Las conexiones neuronales se multiplican, y es precisamente en este momento 
              cuando las intervenciones biomagnéticas pueden tener el mayor impacto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/70 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Conexiones Neuronales</h4>
                <p className="text-slate-600 text-sm">Se forman 1 millón de nuevas conexiones por segundo</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">Plasticidad Cerebral</h4>
                <p className="text-slate-600 text-sm">Máxima capacidad de reorganización y adaptación</p>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Protocolos Específicos por Edad" icon={<Table />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">Adaptación Metodológica</h3>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              Cada rango de edad requiere un enfoque diferente. Los niños de 3-5 años 
              pueden comunicarse verbalmente, lo que nos permite una colaboración más activa 
              en el proceso de sanación.
            </p>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Casos Clínicos Avanzados" icon={<Lightbulb />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Historias de Transformación</h3>
            <p className="text-slate-700 leading-relaxed text-base">
              Casos reales de niños de 3-5 años que han experimentado cambios profundos 
              a través del biomagnetismo pediátrico especializado.
            </p>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Reflexión Final" icon={<Sparkles />}>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-md border-l-4 border-slate-200 text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-4">El Poder de la Intervención Temprana</h3>
          <p className="text-slate-700 leading-relaxed text-base">
            Trabajar con niños de 3-5 años nos da la oportunidad única de influir 
            positivamente en su desarrollo cuando más lo necesitan.
          </p>
        </div>
      </CourseSection>
    </div>
  );
};

export default Module2Block4;
