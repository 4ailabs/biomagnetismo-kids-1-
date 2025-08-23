import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, Baby, Users, Eye, Brain } from 'lucide-react';
import { SectionTitle, SubSectionTitle, MinorSectionTitle } from '../../manual/index';

const Module2Block2: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SectionTitle 
        id="block-2" 
        icon={<Compass className="w-8 h-8" />} 
        title="BLOQUE 2: Exploración con Base Segura (9-18 meses)" 
      />
      <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8 xl:p-10 space-y-6 sm:space-y-8 lg:space-y-10">
        
        <SubSectionTitle title="Desarrollo de la Autonomía y Exploración" />
        
        <div className="prose prose-slate max-w-none">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
            Entre los 9 y 18 meses, el niño desarrolla la capacidad de explorar el mundo mientras mantiene 
            una base segura en sus figuras de apego. Esta etapa es fundamental para el desarrollo de la 
            confianza en sí mismo y en el entorno.
          </p>
          
          <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-200 mb-4 sm:mb-6">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5" />
              El Concepto de "Base Segura"
            </h4>
            <p className="text-blue-700 mb-3">
              El niño utiliza a sus figuras de apego como punto de referencia desde el cual explorar:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <h5 className="font-medium text-blue-700 mb-2">Exploración Activa</h5>
                <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
                  <li>Ventura lejos de la base segura</li>
                  <li>Retorno periódico para "recargar"</li>
                  <li>Uso de la figura de apego como referencia</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-700 mb-2">Regulación del Estrés</h5>
                <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
                  <li>Búsqueda de consuelo ante dificultades</li>
                  <li>Regreso a la base para calmarse</li>
                  <li>Renovación de la confianza</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <MinorSectionTitle title="Hitos del Desarrollo Motor y Cognitivo" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3">9-12 meses</h4>
            <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
              <li>Gateo y primeros pasos</li>
              <li>Pinza fina desarrollada</li>
              <li>Primeras palabras</li>
              <li>Juego de causa-efecto</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-3">12-15 meses</h4>
            <ul className="list-disc list-inside space-y-1 text-amber-700 text-sm">
              <li>Marcha independiente</li>
              <li>Exploración activa del entorno</li>
              <li>Vocabulario de 10-20 palabras</li>
              <li>Juego simbólico temprano</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">15-18 meses</h4>
            <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
              <li>Corre y sube escaleras</li>
              <li>Construye torres de 3-4 bloques</li>
              <li>Combina 2-3 palabras</li>
              <li>Imita actividades adultas</li>
            </ul>
          </div>
        </div>

        <MinorSectionTitle title="Desarrollo Socioemocional y Comunicación" />
        
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-indigo-200">
          <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Comunicación y Socialización
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <h5 className="font-medium text-indigo-700 mb-2">Lenguaje Receptivo</h5>
              <ul className="list-disc list-inside space-y-1 text-indigo-600 text-sm">
                <li>Comprende 50+ palabras</li>
                <li>Sigue instrucciones simples</li>
                <li>Reconoce nombres de objetos</li>
                <li>Responde a "no"</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-indigo-700 mb-2">Lenguaje Expresivo</h5>
              <ul className="list-disc list-inside space-y-1 text-indigo-600 text-sm">
                <li>Primeras palabras funcionales</li>
                <li>Gestos comunicativos</li>
                <li>Sonidos de animales</li>
                <li>Expresiones de necesidades</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
            <h4 className="font-semibold text-rose-800 mb-3">Señales de Alerta (9-18m)</h4>
            <ul className="list-disc list-inside space-y-2 text-rose-700">
              <li><strong>Motoras:</strong> No gatea a los 12m, no camina a los 18m</li>
              <li><strong>Comunicativas:</strong> No responde a su nombre, no balbucea</li>
              <li><strong>Sociales:</strong> No muestra interés en otros, no imita</li>
              <li><strong>Cognitivas:</strong> No explora objetos, no muestra curiosidad</li>
            </ul>
          </div>
          
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 mb-3">Intervenciones Tempranas</h4>
            <ul className="list-disc list-inside space-y-2 text-emerald-700">
              <li><strong>Fortalecer base segura:</strong> Presencia consistente y responsiva</li>
              <li><strong>Estimular exploración:</strong> Ambientes seguros y estimulantes</li>
              <li><strong>Desarrollo motor:</strong> Oportunidades de movimiento libre</li>
              <li><strong>Comunicación:</strong> Conversaciones y lectura compartida</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 border border-teal-200">
          <h4 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Aplicación Clínica: 9-18 meses
          </h4>
          <p className="text-slate-700">
            En esta etapa, el foco debe estar en <strong>equilibrar exploración y seguridad</strong>. 
            Los niños necesitan libertad para explorar con la certeza de que pueden regresar a una base 
            segura. Los problemas en esta fase pueden manifestarse como ansiedad de separación excesiva 
            o falta de iniciativa exploratoria.
          </p>
        </div>
      </div>
    </>
  );
};

export default Module2Block2;
