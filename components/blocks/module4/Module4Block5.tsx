import React from 'react';
import SimpleSection from '../../SimpleSection';
import InfoCard from '../../InfoCard';
import ContentBlock from '../../ContentBlock';
import BlockHeader from '../../BlockHeader';
import { textUtils } from '../../../src/styles/typography';
import { Heart, Brain, Users, Target, AlertTriangle, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const Module4Block5: React.FC = () => {
  return (
    <div id="block-5" className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* Header */}
      <BlockHeader
        icon={Heart}
        title="Casos Clínicos y Crisis"
        subtitle="Protocolos de Intervención en Situaciones Críticas y Casos Reales (12-18 años)"
        gradientFrom="from-red-100"
        gradientTo="to-rose-200"
        iconBgColor="bg-red-200"
        iconTextColor="text-red-700"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        {/* Introducción */}
        <SimpleSection
          title="Casos Clínicos Reales"
          icon={<Heart className="w-8 h-8" />}
        >
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h3 className={`${textUtils.title.subsection} mb-6`}>
              ¿Cómo se Aplican los Protocolos Biomagnéticos en Casos Reales?
            </h3>
            <div className={`space-y-4 ${textUtils.body.medium}`}>
              <p>
                Los casos clínicos reales proporcionan ejemplos concretos de cómo se aplican los protocolos 
                biomagnéticos en situaciones específicas de adolescentes. Cada caso muestra la evaluación 
                biomagnética, el protocolo aplicado y la evolución del tratamiento.
              </p>
              <p>
                Estos casos demuestran la efectividad del enfoque biomagnético en el tratamiento de 
                problemas complejos de la adolescencia, desde trastornos alimentarios hasta conductas de riesgo.
              </p>
            </div>
          </div>
        </SimpleSection>

        {/* Caso Clínico: Sofia */}
        <SimpleSection
          title="Caso Clínico: Sofia, 15 años - Trastorno Alimentario"
          icon={<Target className="w-8 h-8" />}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-pink-100 rounded-full mr-4">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-2">Sofia, 15 años</h3>
                <p className="text-gray-600">Trastorno Alimentario - Restricción alimentaria, pérdida de peso, amenorrea</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-pink-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Evaluación Biomagnética:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-700">Holograma identificado:</p>
                      <p className="text-sm text-gray-600">#3 Humillación social pública</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-700">Sensación predominante:</p>
                      <p className="text-sm text-gray-600">Extrañeza corporal + Desvalorización estética</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-700">Microorganismo:</p>
                      <p className="text-sm text-gray-600">Aspergillus (Canto - Canto)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Protocolo Aplicado:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Regulación hormonal:</strong> Hipófisis (-) → Ovario (+)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Autoimagen:</strong> Canto (-) → Canto (+)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Control obsesivo:</strong> Timo (-) → Suprarrenal (+)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Integración corporal:</strong> Pineal (-) → Hipófisis (+)</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Evolución en 4 meses:</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• Recuperación menstrual completa</p>
                  <p>• Mejora significativa de la autoimagen</p>
                  <p>• Flexibilidad alimentaria progresiva</p>
                  <p>• Reducción de la ansiedad social</p>
                  <p>• Integración de cambios corporales</p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Caso Clínico: Alejandro */}
        <SimpleSection
          title="Caso Clínico: Alejandro, 16 años - Conductas de Riesgo"
          icon={<AlertTriangle className="w-8 h-8" />}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-red-100 rounded-full mr-4">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-gray-800 leading-tight mb-2">Alejandro, 16 años</h3>
                <p className="text-gray-600">Conductas de Riesgo - Consumo de sustancias, agresividad, problemas legales</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Evaluación Biomagnética:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-700">Sensación predominante:</p>
                      <p className="text-sm text-gray-600">Rebeldía visceral + Ira + Vacío</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-700">Holograma:</p>
                      <p className="text-sm text-gray-600">#4 Descubrimiento secreto familiar</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-700">Conflicto sistémico:</p>
                      <p className="text-sm text-gray-600">Triangulación parental</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Protocolo Aplicado:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Manejo de ira:</strong> Suprarrenal (-) → Hígado (+)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Desintoxicación:</strong> Hígado (-) → Riñón Der (+)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Gastritis:</strong> Estómago (-) → Suprarrenal (+)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700"><strong>Estructura interna:</strong> Plexo Solar (-) → Riñón Der (+)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Evolución en 6 meses:</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• Reducción significativa del consumo de sustancias</p>
                  <p>• Mejora en el manejo de la ira</p>
                  <p>• Estabilización emocional</p>
                  <p>• Reinserción escolar exitosa</p>
                  <p>• Mejora en las relaciones familiares</p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Protocolos de Crisis */}
        <SimpleSection
          title="Protocolos de Crisis"
          icon={<Shield className="w-8 h-8" />}
        >
          <div className="space-y-8">
            {/* Crisis Suicida */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">Crisis Suicida</h3>
                  <p className="text-sm text-gray-500">Protocolo de emergencia para ideación suicida</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Evaluación Inmediata:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">¿Plan específico? ¿Medios disponibles?</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">¿Intentos previos? ¿Apoyo familiar?</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">¿Factores de riesgo específicos?</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Intervención Biomagnética:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700"><strong>Par de emergencia:</strong> Bulbo Raquídeo (-) → Corazón (+)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700"><strong>Tiempo:</strong> 10 minutos máximo</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700"><strong>Derivación obligatoria:</strong> Servicios de emergencia</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">⚠️ IMPORTANTE:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>El biomagnetismo NO sustituye la atención psiquiátrica de emergencia.</strong> 
                    En casos de crisis suicida, siempre se debe derivar a servicios especializados 
                    y mantener supervisión constante hasta la intervención profesional.
                  </p>
                </div>
              </div>
            </div>

            {/* Crisis de Autolesión */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">Crisis de Autolesión</h3>
                  <p className="text-sm text-gray-500">Protocolo para conductas autolesivas</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Comprensión Funcional:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Regulación emocional (liberación de tensión)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Autocastigo (culpa, vergüenza)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Control (sensación de dominio sobre el dolor)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Intervención Biomagnética:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700"><strong>Par específico:</strong> Suprarrenal (-) → Corazón (+)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700"><strong>Alternativas:</strong> Técnicas TIPP</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Técnicas TIPP:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">T - Temperatura</p>
                      <p className="text-sm text-gray-600">Agua fría en cara/muñecas</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">I - Intensidad</p>
                      <p className="text-sm text-gray-600">Ejercicio intenso 10 minutos</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">P - Presión</p>
                      <p className="text-sm text-gray-600">Apretar pelota de estrés</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">P - Pausar</p>
                      <p className="text-sm text-gray-600">Respiración pausada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Crisis de Consumo */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">Crisis de Consumo</h3>
                  <p className="text-sm text-gray-500">Protocolo para crisis relacionadas con sustancias</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Evaluación:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Estado actual, tipo de sustancia</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Función del consumo (regulación, escape, social)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700">Riesgo de sobredosis o complicaciones</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Pares Biomagnéticos:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700"><strong>Desintoxicación:</strong> Hígado (-) → Riñón Der (+)</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <p className="text-gray-700"><strong>Regulación:</strong> Suprarrenales (-) → Suprarrenales (+)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-red-100 to-rose-200 rounded-lg p-4 sm:p-6 lg:p-8 text-red-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para las Herramientas Prácticas?
          </h2>
          <p className="text-red-700 mb-6">
            Ahora que conoces los protocolos de crisis, es momento de aprender 
            las herramientas prácticas para el trabajo con adolescentes.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-red-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4Block5;
