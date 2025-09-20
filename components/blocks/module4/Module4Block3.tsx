import React from 'react';
import SimpleSection from '../../SimpleSection';
import ContentBlock from '../../ContentBlock';
import BlockHeader from '../../BlockHeader';
import { textUtils } from '../../../src/styles/typography';
import { Heart, Brain, Users, Target, AlertTriangle, ArrowRight, CheckCircle, Zap, Search, BookOpen } from 'lucide-react';

const Module4Block3: React.FC = () => {
  return (
    <div id="block-3" className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      {/* Header */}
      <BlockHeader
        icon={Search}
        title="Rastreo Biomagnético Adolescente"
        subtitle="Fundamentos del Rastreo por Medición de Extremidades en Adolescentes (12-18 años)"
        gradientFrom="from-green-100"
        gradientTo="to-teal-200"
        iconBgColor="bg-green-200"
        iconTextColor="text-green-700"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        {/* Objetivo del Bloque */}
        <section className="bg-green-100 text-green-700 rounded-lg sm:rounded-xl lg:rounded-xl shadow-sm p-3 sm:p-4 lg:p-6 text-center border border-green-200 mb-12">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Objetivo del Bloque</h2>
          <p className="text-sm sm:text-base max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Dominar los fundamentos del rastreo biomagnético por medición de extremidades aplicado a adolescentes, 
            comprender la técnica del acortamiento como indicador de resonancia y desarrollar habilidades 
            para la identificación precisa de desequilibrios energéticos en esta población en metamorfosis.
          </p>
        </section>

        {/* Fundamentos Teóricos */}
        <SimpleSection
          title="¿Qué es el Rastreo Biomagnético Adolescente?"
          icon={<BookOpen className="w-8 h-8" />}
        >
          <ContentBlock
            title="Definición y Principios Fundamentales"
            content={
              <div className="space-y-4">
                <p>
                  <strong>El rastreo biomagnético adolescente</strong> es la técnica que utiliza la medición de la
                  longitud de las extremidades inferiores para identificar desequilibrios energéticos específicos
                  en adolescentes. A través del acortamiento de la extremidad derecha, podemos detectar
                  resonancias que indican la presencia de conflictos, sensaciones y alteraciones que afectan
                  al adolescente durante su metamorfosis puberal.
                </p>
                <p>
                  La técnica funciona como un <strong>sistema de detección binario</strong> donde el acortamiento
                  de la pierna derecha = SÍ (hay resonancia) y la simetría = NO (no hay resonancia). Esto nos
                  permite hacer preguntas específicas al organismo del adolescente colocando imanes en diferentes puntos
                  y observando la respuesta de las extremidades.
                </p>
                <p>
                  En el contexto adolescente, el rastreo biomagnético nos permite identificar exactamente qué conflictos,
                  sensaciones o desequilibrios energéticos están interfiriendo con el crecimiento, la identidad
                  o el bienestar del adolescente, información que está almacenada en su campo energético pero no es
                  accesible verbalmente debido a la intensidad emocional de esta etapa.
                </p>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Principios del Rastreo</h4>
              </div>
              <ul className={`space-y-2 ${textUtils.body.small}`}>
                <li>• El acortamiento indica resonancia energética</li>
                <li>• La simetría indica ausencia de resonancia</li>
                <li>• Los adolescentes muestran respuestas intensas</li>
                <li>• La información es específica y precisa</li>
                <li>• Permite detección de causas profundas</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Aplicaciones Adolescentes</h4>
              </div>
              <ul className={`space-y-2 ${textUtils.body.small}`}>
                <li>• Identificar sensaciones que soportan conflictos</li>
                <li>• Rastrear el instante temporal de origen</li>
                <li>• Detectar microbios asociados al conflicto</li>
                <li>• Localizar puntos de resonancia específicos</li>
                <li>• Determinar pares biomagnéticos correctivos</li>
              </ul>
            </div>
          </div>
        </SimpleSection>

        {/* Protocolo de Rastreo Adolescente */}
        <SimpleSection
          title="Protocolo de Rastreo Biomagnético Adolescente"
          icon={<Search className="w-8 h-8" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El protocolo de rastreo biomagnético adolescente sigue una secuencia específica adaptada a las 
              características únicas de esta población. Los adolescentes presentan respuestas más intensas 
              pero también mayor variabilidad debido a los cambios hormonales y neurológicos constantes.
            </p>
          </div>

          <div className="space-y-8">
            {/* Paso 1: Preparación */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">Paso 1: Preparación del Adolescente</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Fundamentos del rastreo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Consideraciones especiales para adolescentes:</p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>• <strong>Consentimiento informado:</strong> Explicar el proceso de manera clara y obtener su colaboración</li>
                    <li>• <strong>Privacidad:</strong> Asegurar un ambiente íntimo y respetuoso</li>
                    <li>• <strong>Comunicación:</strong> Usar lenguaje apropiado para su edad y nivel de madurez</li>
                    <li>• <strong>Timing:</strong> Elegir momentos de menor intensidad emocional</li>
                    <li>• <strong>Presencia parental:</strong> Determinar si necesita estar presente un padre/madre</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Posición y comodidad:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Decúbito supino en camilla cómoda</li>
                    <li>• Ropa cómoda que permita acceso a extremidades</li>
                    <li>• Ambiente con temperatura adecuada</li>
                    <li>• Iluminación suave y ambiente relajante</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 2: Medición Base */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">Paso 2: Medición de Extremidades Base</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Establecimiento de la línea base</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de medición:</p>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>• <strong>Posición:</strong> Adolescente en decúbito supino, relajado</li>
                    <li>• <strong>Referencias:</strong> Maléolo interno del tobillo como punto de referencia</li>
                    <li>• <strong>Medición:</strong> Usar cinta métrica o técnica de comparación visual</li>
                    <li>• <strong>Registro:</strong> Anotar cualquier asimetría inicial</li>
                    <li>• <strong>Repetibilidad:</strong> Verificar medición 2-3 veces para confirmar</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Consideraciones especiales adolescentes:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Mayor variabilidad debido a crecimiento activo</li>
                    <li>• Posibles asimetrías por desarrollo asimétrico</li>
                    <li>• Mayor sensibilidad a la temperatura ambiente</li>
                    <li>• Posible ansiedad que afecte la relajación</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 3: Rastreo de Sensaciones */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">Paso 3: Rastreo de Sensaciones Específicas</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Identificación de sensaciones viscerales</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de rastreo:</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Lista de sensaciones:</strong> Usar las 20 sensaciones del módulo 4</p>
                      <p><strong>2. Colocación de imanes:</strong> Colocar imán de prueba en punto específico</p>
                      <p><strong>3. Pregunta específica:</strong> "¿Sientes [sensación específica]?"</p>
                      <p><strong>4. Observación:</strong> Verificar acortamiento de pierna derecha</p>
                      <p><strong>5. Registro:</strong> Anotar sensaciones que dan acortamiento</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sensaciones más frecuentes en adolescentes:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Extrañeza corporal</li>
                    <li>• Intensidad emocional abrumadora</li>
                    <li>• Presión social asfixiante</li>
                    <li>• Confusión identitaria</li>
                    <li>• Rebeldía visceral</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Paso 4: Rastreo Temporal */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">Paso 4: Rastreo del Instante de Origen</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Identificación temporal del conflicto</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo temporal:</p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Rango de edad:</strong> Últimos 2-3 años (12-18 años)</p>
                      <p><strong>2. Pregunta específica:</strong> "¿El conflicto comenzó a los [edad] años?"</p>
                      <p><strong>3. Verificación:</strong> Acortamiento confirma la edad</p>
                      <p><strong>4. Contexto:</strong> Explorar eventos específicos de esa edad</p>
                      <p><strong>5. Confirmación:</strong> Test con evento específico</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Eventos típicos por edad:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>12-13 años:</strong> Primeros cambios corporales, inicio pubertad</li>
                    <li>• <strong>14-15 años:</strong> Presión social, comparaciones</li>
                    <li>• <strong>16-17 años:</strong> Presión académica, futuro</li>
                    <li>• <strong>17-18 años:</strong> Transición a adultez, independencia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-green-100 to-teal-200 rounded-lg p-4 sm:p-6 lg:p-8 text-green-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para las Patologías Específicas?
          </h2>
          <p className="text-green-700 mb-6">
            Ahora que conoces el protocolo de rastreo, es momento de explorar 
            las patologías específicas que afectan a los adolescentes.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-green-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4Block3;