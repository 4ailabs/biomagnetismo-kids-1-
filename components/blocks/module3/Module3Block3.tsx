import React from 'react';
import CourseSection from '../../CourseSection';
import { Heart, Activity, Brain, Target, ArrowRight, CheckCircle, Users, BookOpen } from 'lucide-react';
import { textUtils } from '../../../src/styles/typography';

const Module3Block3: React.FC = () => {
  return (
    <div id="block-3" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <Heart className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Introducción al Rastreo Biomagnético Escolar
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Fundamentos del Rastreo por Medición de Extremidades en Niños Escolares
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Objetivo del Bloque */}
        <section className="bg-slate-100 text-slate-700 rounded-lg sm:rounded-xl lg:rounded-xl shadow-sm p-3 sm:p-4 lg:p-6 text-center border border-slate-200 mb-12">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Objetivo del Bloque</h2>
          <p className="text-sm sm:text-base max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Dominar los fundamentos del rastreo biomagnético por medición de extremidades aplicado a escolares, 
            comprender la técnica del acortamiento como indicador de resonancia y desarrollar habilidades 
            para la identificación precisa de desequilibrios energéticos en niños.
          </p>
        </section>

        {/* Fundamentos Teóricos */}
        <CourseSection
          title="¿Qué es el Rastreo Biomagnético Escolar?"
          icon={<BookOpen className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Definición y Principios Fundamentales
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>El rastreo biomagnético escolar</strong> es la técnica que utiliza la medición de la 
                longitud de las extremidades inferiores para identificar desequilibrios energéticos específicos 
                en niños escolares. A través del acortamiento de la extremidad derecha, podemos detectar 
                resonancias que indican la presencia de conflictos, sensaciones y alteraciones que afectan 
                al niño en el contexto educativo.
              </p>
              <p>
                La técnica funciona como un <strong>sistema de detección binario</strong> donde el acortamiento 
                de la pierna derecha = SÍ (hay resonancia) y la simetría = NO (no hay resonancia). Esto nos 
                permite hacer preguntas específicas al organismo del niño colocando imanes en diferentes puntos 
                y observando la respuesta de las extremidades.
              </p>
              <p>
                En el contexto escolar, el rastreo biomagnético nos permite identificar exactamente qué conflictos, 
                sensaciones o desequilibrios energéticos están interfiriendo con el aprendizaje, la socialización 
                o el bienestar del niño, información que está almacenada en su campo energético pero no es 
                accesible verbalmente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Principios del Rastreo</h4>
              </div>
              <ul className={`space-y-2 ${textUtils.body.small}`}>
                <li>• El acortamiento indica resonancia energética</li>
                <li>• La simetría indica ausencia de resonancia</li>
                <li>• Los niños muestran respuestas más claras</li>
                <li>• La información es específica y precisa</li>
                <li>• Permite detección de causas profundas</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Aplicaciones Escolares</h4>
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
        </CourseSection>

        {/* El Rastreo Biomagnético en Niños */}
        <CourseSection
          title="El Rastreo Biomagnético en Niños Escolares"
          icon={<Activity className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los niños son especialmente receptivos al rastreo biomagnético porque su sistema energético es 
              más puro y menos interferido que en los adultos. Sus respuestas de acortamiento son más claras, 
              directas y precisas, facilitando la identificación de desequilibrios específicos.
            </p>
          </div>

          <div className="space-y-8">
            {/* Diferencias con Adultos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Diferencias Clave con el Rastreo en Adultos</h3>
                  <p className="text-sm text-gray-500">Características específicas del rastreo biomagnético infantil</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Ventajas en Niños:</h4>
                  <ul className={`space-y-2 ${textUtils.body.small}`}>
                    <li>• Acortamientos más evidentes y claros</li>
                    <li>• Menos interferencia del sistema nervioso</li>
                    <li>• Mayor reactividad energética</li>
                    <li>• Respuestas más rápidas e inmediatas</li>
                    <li>• Correcciones energéticas más efectivas</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Consideraciones Especiales:</h4>
                  <ul className={`space-y-2 ${textUtils.body.small}`}>
                    <li>• Necesidad de explicaciones simples</li>
                    <li>• Sesiones más cortas</li>
                    <li>• Ambiente lúdico y seguro</li>
                    <li>• Presencia de padres cuando sea necesario</li>
                    <li>• Manejo delicado y suave</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preparación del Niño */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Preparación del Niño para el Rastreo</h3>
                  <p className="text-sm text-gray-500">Crear el ambiente adecuado para la evaluación</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Explicación adaptada por edad:</p>
                  <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                    <p className="text-sm">
                      <strong>5-7 años:</strong> "Vamos a revisar si tus piernas están del mismo tamaño. 
                      Estos imanes especiales nos ayudan a ver si tu cuerpo necesita equilibrio para 
                      sentirte mejor en la escuela."
                    </p>
                    <p className="text-sm">
                      <strong>8-10 años:</strong> "Voy a medir la longitud de tus piernas mientras coloco imanes 
                      en diferentes puntos. Si una pierna se acorta, significa que encontramos un lugar que 
                      necesita ayuda energética."
                    </p>
                    <p className="text-sm">
                      <strong>11-12 años:</strong> "Usaremos el rastreo biomagnético para identificar desequilibrios 
                      energéticos. El acortamiento de tu pierna derecha nos indica dónde hay conflictos que 
                      podrían estar afectando tu bienestar escolar."
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Ambiente terapéutico:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Camilla cómoda con pies fuera del borde</li>
                    <li>• Temperatura agradable y ambiente tranquilo</li>
                    <li>• Permitir objetos de confianza si es necesario</li>
                    <li>• Presencia de padres si el niño lo requiere</li>
                    <li>• Explicar cada paso del proceso</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Protocolo Técnico Básico */}
        <CourseSection
          title="Protocolo Técnico del Rastreo"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="space-y-8">
            {/* Técnica de Medición */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Técnica de Medición de Extremidades</h3>
                  <p className="text-sm text-gray-500">Protocolo paso a paso para todas las edades</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Protocolo Estándar:</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600">
                    <li><strong>Posicionamiento:</strong> Niño en decúbito supino, pies fuera de la camilla</li>
                    <li><strong>Sujeción:</strong> Tomar ambos pies por los talones y elevarlos 30 grados</li>
                    <li><strong>Medición inicial:</strong> Verificar simetría de extremidades como línea base</li>
                    <li><strong>Colocación de imán:</strong> Colocar imán negativo en el punto a evaluar</li>
                    <li><strong>Re-medición:</strong> Volver a medir las extremidades</li>
                    <li><strong>Interpretación:</strong> Acortamiento derecho = SÍ, simetría = NO</li>
                    <li><strong>Registro:</strong> Anotar la respuesta y continuar con siguiente punto</li>
                  </ol>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Consideraciones para Niños:</h4>
                  <ul className={`space-y-2 ${textUtils.body.small}`}>
                    <li>• <strong>Suavidad:</strong> Manipular las extremidades con delicadeza</li>
                    <li>• <strong>Consistencia:</strong> Mantener la misma técnica durante toda la sesión</li>
                    <li>• <strong>Paciencia:</strong> Permitir que el niño se relaje entre mediciones</li>
                    <li>• <strong>Comunicación:</strong> Explicar cada paso que se va realizando</li>
                    <li>• <strong>Observación:</strong> Estar atento a signos de cansancio o molestia</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interpretación de Respuestas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Interpretación de las Respuestas</h3>
                  <p className="text-sm text-gray-500">Cómo leer correctamente los acortamientos</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Respuesta Positiva (SÍ):</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-800">Acortamiento de extremidad derecha</p>
                      <p className="text-xs text-green-700">Indica resonancia con el punto evaluado</p>
                    </div>
                    <p className="text-sm text-gray-600">Significa que hay conflicto, sensación o microbio asociado con ese punto específico.</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Respuesta Negativa (NO):</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-800">Simetría de extremidades</p>
                      <p className="text-xs text-red-700">No hay resonancia con el punto evaluado</p>
                    </div>
                    <p className="text-sm text-gray-600">Significa que no hay conflicto asociado con ese punto en particular.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Tipos de Preguntas en Rastreo */}
        <CourseSection
          title="Tipos de Preguntas en Rastreo Biomagnético Escolar"
          icon={<Brain className="w-8 h-8 text-slate-500" />}
        >
          <div className="space-y-8">
            {/* Estructura de Preguntas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Estructura de Preguntas para Rastreo</h3>
                  <p className="text-sm text-gray-500">Cómo formular preguntas efectivas durante el rastreo</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Preguntas Efectivas:</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-800">✓ Específicas y directas</p>
                      <p className="text-xs text-green-700">"¿Hay resonancia con abandono escolar?"</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-800">✓ Una variable por vez</p>
                      <p className="text-xs text-green-700">"¿Es una bacteria grampositiva?"</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-800">✓ Orientadas al rastreo</p>
                      <p className="text-xs text-green-700">"¿El conflicto se originó este año?"</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Preguntas a Evitar:</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-800">✗ Ambiguas</p>
                      <p className="text-xs text-red-700">"¿Hay algo que molesta?"</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-800">✗ Múltiples opciones</p>
                      <p className="text-xs text-red-700">"¿Es tristeza o enojo?"</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-red-800">✗ En negativo</p>
                      <p className="text-xs text-red-700">"¿No le gusta la escuela?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ejemplos por Categoría */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Ejemplos de Preguntas por Categoría</h3>
                  <p className="text-sm text-gray-500">Plantillas de preguntas para diferentes aspectos del rastreo</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">Sensaciones</h4>
                  <ul className="text-sm text-blue-700 space-y-2">
                    <li>"¿Hay resonancia con abandono escolar?"</li>
                    <li>"¿Marca la sensación de vulnerabilidad?"</li>
                    <li>"¿Se acorta con frustración académica?"</li>
                    <li>"¿Hay respuesta con devaluación?"</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">Rastreo Temporal</h4>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>"¿El origen fue este año escolar?"</li>
                    <li>"¿Marca en los primeros meses?"</li>
                    <li>"¿Hay respuesta con septiembre?"</li>
                    <li>"¿Se acorta con la primera semana?"</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 mb-3">Microbios</h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>"¿Marca con bacteria asociada?"</li>
                    <li>"¿Hay respuesta con grampositiva?"</li>
                    <li>"¿Se acorta con Estafilococo?"</li>
                    <li>"¿Marca con virus ARN?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Fundamentos del Rastreo Establecidos
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que comprendes los fundamentos del rastreo biomagnético escolar por medición de extremidades, 
            es momento de aprender sobre las 18 sensaciones específicas que soportan los conflictos 
            escolares y cómo identificarlas usando esta técnica.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block3;