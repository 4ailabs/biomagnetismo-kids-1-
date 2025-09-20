import React from 'react';
import SimpleSection from '../../SimpleSection';
import InfoCard from '../../InfoCard';
import ContentBlock from '../../ContentBlock';
import BlockHeader from '../../BlockHeader';
import { textUtils } from '../../../src/styles/typography';
import { Brain, Users, Target, AlertTriangle, ArrowRight, CheckCircle, Search, Heart } from 'lucide-react';

const Module4Block4: React.FC = () => {
  return (
    <div id="block-4" className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <BlockHeader
        icon={Brain}
        title="Técnicas de Rastreo Adolescente"
        subtitle="Adaptaciones del Rastreo Bioenergético y Lista de Rastreo Prioritario (12-18 años)"
        gradientFrom="from-orange-100"
        gradientTo="to-amber-200"
        iconBgColor="bg-orange-200"
        iconTextColor="text-orange-700"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        {/* Introducción */}
        <SimpleSection
          title="Adaptaciones del Rastreo Bioenergético"
          icon={<Brain className="w-8 h-8" />}
        >
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className={`${textUtils.title.subsection} mb-6`}>
              ¿Cómo Adaptar las Técnicas de Rastreo para Adolescentes?
            </h3>
            <div className={`space-y-4 ${textUtils.body.medium}`}>
              <p>
                El rastreo bioenergético en adolescentes requiere adaptaciones específicas debido a las 
                características particulares de esta etapa de desarrollo. Los adolescentes tienen mayor 
                resistencia inicial al test muscular, necesitan explicaciones científicas del proceso 
                y requieren respeto por su privacidad y autonomía emergente.
              </p>
              <p>
                El lenguaje debe ser directo sin infantilizar, y el proceso debe respetar su necesidad 
                de entender el "por qué" detrás de cada técnica utilizada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 rounded-full mr-3">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Consideraciones Especiales</h4>
              </div>
              <ul className={`space-y-2 ${textUtils.body.small}`}>
                <li>• Mayor resistencia inicial al test muscular</li>
                <li>• Necesidad de explicar científicamente el proceso</li>
                <li>• Respeto por privacidad y autonomía emergente</li>
                <li>• Lenguaje directo sin infantilizar</li>
                <li>• Validación de sus experiencias emocionales</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-amber-100 rounded-full mr-3">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Protocolo Adaptado</h4>
              </div>
              <ul className={`space-y-2 ${textUtils.body.small}`}>
                <li>• Establecer rapport: "Investigamos juntos"</li>
                <li>• Explicación científica: Demostrar conexión mente-cuerpo</li>
                <li>• Búsqueda de sensación: Usar las 15 sensaciones específicas</li>
                <li>• Rastreo temporal: Enfocarse en últimos 2-3 años</li>
                <li>• Concientización: "Tu cuerpo dice..."</li>
              </ul>
            </div>
          </div>
        </SimpleSection>

        {/* Lista de Rastreo Prioritario */}
        <SimpleSection
          title="Lista de Rastreo Prioritario Adolescente (30 puntos)"
          icon={<Search className="w-8 h-8" />}
        >
          <div className="space-y-8">
            {/* Sistema Endocrino */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">Sistema Endocrino (Prioridad 1 - 6 puntos)</h3>
                  <p className="text-sm text-gray-500">Regulación hormonal y desarrollo sexual</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">1. Pineal - Hipófisis</p>
                    <p className="text-sm text-gray-600">Regulación general, identidad</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">2. Hipófisis - Hipófisis</p>
                    <p className="text-sm text-gray-600">Control hormonal</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">3. Tiroides - Tiroides</p>
                    <p className="text-sm text-gray-600">Metabolismo, energía</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">4. Suprarrenales - Suprarrenales</p>
                    <p className="text-sm text-gray-600">Manejo estrés</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">5. Ovario/Testículo - Ovario/Testículo</p>
                    <p className="text-sm text-gray-600">Identidad sexual</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">6. Útero/Próstata - Útero/Próstata</p>
                    <p className="text-sm text-gray-600">Función reproductiva</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema Nervioso Central */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">Sistema Nervioso Central (Prioridad 2 - 8 puntos)</h3>
                  <p className="text-sm text-gray-500">Control ejecutivo y procesamiento emocional</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">7. Frontal - Occipital</p>
                    <p className="text-sm text-gray-600">Control ejecutivo, futuro</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">8. Temporal Izq - Temporal Der</p>
                    <p className="text-sm text-gray-600">Procesamiento emocional</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">9. Temporal Izq - Suprarrenal</p>
                    <p className="text-sm text-gray-600">Ansiedad social</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">10. Bulbo Raquídeo - Corazón</p>
                    <p className="text-sm text-gray-600">Regulación emocional</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">11. Cerebelo - Cerebelo</p>
                    <p className="text-sm text-gray-600">Crisis, coordinación</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">12. Occipital - Occipital</p>
                    <p className="text-sm text-gray-600">Identidad sexual (Epstein Barr)</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">13. Parietal - Parietal</p>
                    <p className="text-sm text-gray-600">Imagen corporal</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">14. Interciliar - Bulbo</p>
                    <p className="text-sm text-gray-600">Carácter indeciso</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistema Inmune y Autoestima */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">Sistema Inmune y Autoestima (Prioridad 3 - 5 puntos)</h3>
                  <p className="text-sm text-gray-500">Protección emocional y valoración personal</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">15. Timo - Timo</p>
                    <p className="text-sm text-gray-600">Sistema inmune emocional</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">16. Timo - Suprarrenal</p>
                    <p className="text-sm text-gray-600">Autoestima, confianza</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">17. Corazón - Timo</p>
                    <p className="text-sm text-gray-600">Amor propio</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">18. Pericardio - Timo</p>
                    <p className="text-sm text-gray-600">Protección emocional</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">19. Corazón - Corazón</p>
                    <p className="text-sm text-gray-600">Negatividad, depresión</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Puntos Específicos Adolescentes */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">Puntos Específicos Adolescentes (Prioridad 4 - 6 puntos)</h3>
                  <p className="text-sm text-gray-500">Manifestaciones físicas de conflictos adolescentes</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">20. Rama Mandibular - Rama Mandibular</p>
                    <p className="text-sm text-gray-600">Acné, estafilococo</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">21. Canto - Canto</p>
                    <p className="text-sm text-gray-600">Autoimagen, aspergillus</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">22. Atlas - Atlas</p>
                    <p className="text-sm text-gray-600">Libido, sexualidad</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">23. Cardias - Testículo/Ovario</p>
                    <p className="text-sm text-gray-600">Helicobacter, gastritis</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">24. Lengua - Lengua</p>
                    <p className="text-sm text-gray-600">Expresión, autenticidad</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">25. Supraciliar - Bulbo</p>
                    <p className="text-sm text-gray-600">Embarazo no deseado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Psicoemocionales y Crisis */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-1">Psicoemocionales y Crisis (Prioridad 5 - 5 puntos)</h3>
                  <p className="text-sm text-gray-500">Conflictos emocionales y situaciones de crisis</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">26. Corazón - Páncreas</p>
                    <p className="text-sm text-gray-600">Envidia hacia pares</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">27. Corazón - Vejiga</p>
                    <p className="text-sm text-gray-600">Resentimiento familiar</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">28. Suprarrenal - Hígado</p>
                    <p className="text-sm text-gray-600">Rebeldía, canalizar ira</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">29. Plexo Solar - Riñón Der</p>
                    <p className="text-sm text-gray-600">Seguridad interna</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-700">30. Estómago - Suprarrenal</p>
                    <p className="text-sm text-gray-600">Ansiedad digestiva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Hologramas Adolescentes */}
        <SimpleSection
          title="Los 5 Hologramas Principales de la Adolescencia"
          icon={<Target className="w-8 h-8" />}
        >
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="space-y-6">
                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Holograma 1: Primera Menstruación/Cambio de Voz</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Par:</strong> Pineal (-) → Hipófisis (+)</p>
                      <p className="text-sm text-gray-600"><strong>Sensación:</strong> Extrañeza corporal</p>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Holograma 2: Primer Rechazo Romántico</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Par:</strong> Corazón (-) → Timo (+)</p>
                      <p className="text-sm text-gray-600"><strong>Sensación:</strong> Vacío existencial</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Holograma 3: Humillación Social Pública</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Par:</strong> Temporal Izq (-) → Suprarrenal (+)</p>
                      <p className="text-sm text-gray-600"><strong>Sensación:</strong> Presión social asfixiante</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Holograma 4: Descubrimiento de Secreto Familiar</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Par:</strong> Plexo Solar (-) → Riñón Der (+)</p>
                      <p className="text-sm text-gray-600"><strong>Sensación:</strong> Confusión identitaria</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Holograma 5: Experiencia Sexual Traumática</h4>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Par:</strong> Próstata/Útero (-) → Suprarrenal (+)</p>
                      <p className="text-sm text-gray-600"><strong>Sensación:</strong> Tensión sexual confusa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Protocolo de Trabajo con Hologramas</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Los hologramas son eventos específicos que encapsulan múltiples conflictos y sensaciones. 
                  Trabajar con ellos permite acceder a la raíz de varios síntomas simultáneamente.
                </p>
                <p>
                  <strong>Protocolo recomendado:</strong> Identificar el holograma activo, trabajar el par 
                  biomagnético específico, explorar las sensaciones asociadas y facilitar la integración 
                  del evento traumático.
                </p>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-200 rounded-lg p-4 sm:p-6 lg:p-8 text-orange-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para los Casos Clínicos?
          </h2>
          <p className="text-orange-700 mb-6">
            Ahora que conoces las técnicas de rastreo, es momento de explorar 
            casos clínicos reales y protocolos de crisis.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-orange-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4Block4;
