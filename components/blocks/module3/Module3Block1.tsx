import React from 'react';
import CourseSection from '../../CourseSection';
import BlockHeader from '../../BlockHeader';
import { textUtils } from '../../../src/styles/typography';
import { BookOpen, Heart, Brain, Users, Target, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const Module3Block1: React.FC = () => {
  return (
    <div id="block-1" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <BlockHeader
        icon={BookOpen}
        title="Fundamentos del Biomagnetismo Escolar"
        subtitle="Los 8 Conflictos Biológicos que Afectan el Aprendizaje en Niños de 5-12 Años"
        gradientFrom="from-slate-100"
        gradientTo="to-gray-200"
        iconBgColor="bg-slate-200"
        iconTextColor="text-slate-700"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción al Biomagnetismo Escolar"
          icon={<BookOpen className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className={`${textUtils.title.subsection} mb-6`}>
              ¿Qué son los Conflictos Biológicos Escolares?
            </h3>
            <div className={`space-y-4 ${textUtils.body.medium}`}>
              <p>
                Los conflictos biológicos escolares son respuestas adaptativas del organismo infantil ante 
                situaciones específicas del entorno educativo que generan estrés o amenaza percibida. 
                Estos conflictos no son "problemas" del niño, sino estrategias inteligentes de supervivencia 
                que se activan cuando el sistema nervioso detecta que el ambiente escolar puede ser desafiante.
              </p>
              <p>
                Entre los 5-12 años, el cerebro del niño experimenta una transformación neurológica fundamental 
                que coincide exactamente con el inicio de la escolaridad formal. Esta evolución incluye la 
                mielinización del cuerpo calloso, el desarrollo de la corteza prefrontal y la integración 
                de sistemas emocionales y racionales.
              </p>
              <p>
                Cuando el entorno escolar genera estrés, el cerebro infantil activa respuestas primitivas de 
                supervivencia: lucha (niños disruptivos), huida (niños retraídos) o parálisis (niños bloqueados).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Características de los Conflictos</h4>
              </div>
              <ul className={`space-y-2 ${textUtils.body.small}`}>
                <li>• Son respuestas adaptativas inteligentes</li>
                <li>• Se activan ante amenaza percibida</li>
                <li>• Tienen manifestaciones físicas específicas</li>
                <li>• Pueden ser identificados y trabajados</li>
                <li>• Su resolución libera el potencial de aprendizaje</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className={`${textUtils.title.subsection} text-gray-800`}>Beneficios del Biomagnetismo</h4>
              </div>
              <ul className={`space-y-2 ${textUtils.body.small}`}>
                <li>• Identificación precisa de conflictos</li>
                <li>• Restauración del equilibrio energético</li>
                <li>• Liberación de bloqueos de aprendizaje</li>
                <li>• Mejora en el bienestar general</li>
                <li>• Potenciación de capacidades naturales</li>
              </ul>
            </div>
          </div>
        </CourseSection>

        {/* Los 8 Conflictos Escolares */}
        <CourseSection
          title="Los 8 Conflictos Biológicos Escolares Fundamentales"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              A continuación, exploraremos cada uno de los 8 conflictos biológicos que afectan más frecuentemente 
              a los niños en edad escolar. Cada conflicto incluye su par biomagnético específico, microorganismos 
              asociados y manifestaciones clínicas, proporcionando una guía completa para el diagnóstico y tratamiento.
            </p>
          </div>
          <div className="space-y-8">
            {/* Conflicto 1: Autoridad Exterior */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">1. Autoridad Exterior</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 5-7 años</p>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Ahora hay alguien más que puede mandarme"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Suprarrenal (-) → Hígado (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Microorganismo:</p>
                  <p className="text-sm">Estafilococo dorado</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Este conflicto surge cuando el niño debe evaluar si la nueva autoridad escolar es segura o amenazante. 
                    La resistencia es una prueba de límites para determinar el nivel de peligro. Se manifiesta a través de 
                    rebeldía y desafío constante, conductas oposicionistas, resistencia a seguir instrucciones y rabietas 
                    al llegar de la escuela. El beneficio biológico es mantener la autonomía personal y evaluar la 
                    seguridad de la nueva autoridad.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 2: Pertenencia Dividida */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">2. Pertenencia Dividida</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 6-8 años</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "¿Pertenezco a mi familia o al grupo escolar?"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Pericardio (-) → Timo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    El niño debe determinar cuál es su "manada" principal. Biológicamente, solo se puede pertenecer 
                    completamente a un grupo para garantizar la supervivencia. Se caracteriza por ansiedad de separación 
                    extrema, confusión de lealtades, llanto al separarse de los padres y dificultad para hacer amigos. 
                    Fortalece la identidad personal y permite la pertenencia múltiple sin conflicto.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 3: Desvalorización Intelectual */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">3. Desvalorización Intelectual</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 7-12 años</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "No soy suficientemente inteligente"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Frontal (-) → Timo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Si el niño no es "suficientemente bueno" intelectualmente, es mejor no intentar para evitar 
                    la exclusión del grupo. Incluye bloqueos cognitivos súbitos, evitación de desafíos académicos, 
                    frases como "soy tonto" o "no puedo", y fatiga mental extrema. Restaura la confianza intelectual 
                    y libera el potencial cognitivo bloqueado.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 4: Comparación y Competencia */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">4. Comparación</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 8-12 años</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Los otros son mejores que yo"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Timo (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    En un entorno competitivo, el cerebro evalúa constantemente la posición jerárquica para determinar 
                    estrategias de supervivencia. Se manifiesta con baja autoestima académica, perfeccionismo extremo, 
                    ansiedad de rendimiento y evitación de situaciones competitivas. Fortalece la autovaloración y 
                    reduce la necesidad de comparación constante.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 5: Pérdida de Libertad */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <ArrowRight className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">5. Pérdida de Libertad</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 6-9 años</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Ya no puedo hacer lo que quiero"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Temporal Izq (-) → Temporal Der (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Microorganismo:</p>
                  <p className="text-sm">Tifus exantemático</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Este conflicto surge cuando el niño percibe que ha perdido su libertad de movimiento y expresión. 
                    El sistema nervioso mantiene una alerta constante para encontrar oportunidades de escape o recuperar 
                    control, manifestándose como hiperactividad, falta de atención, comportamientos disruptivos y 
                    necesidad constante de moverse. Es la base biológica del TDAH desde la perspectiva biomagnética.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 6: Sobrecarga Sensorial */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">6. Sobrecarga Sensorial</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 7-11 años</p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Es demasiada información"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Bulbo Raquídeo (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Ocurre cuando el sistema nervioso se satura con demasiada información de golpe. El cerebro activa 
                    mecanismos de protección desconectándose parcialmente para evitar el colapso, resultando en dispersión, 
                    cansancio extremo, somatizaciones diversas, hipersensibilidad a estímulos y dificultades de concentración. 
                    Es común en niños que enfrentan demandas académicas que superan su capacidad de procesamiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 7: Amenaza Social */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">7. Amenaza Social</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 8-12 años</p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Puedo ser rechazado públicamente"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Temporal Izq (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    El cerebro social detecta amenaza de exclusión, activando mecanismos de invisibilidad para evitar 
                    el rechazo. Se manifiesta con timidez extrema, mutismo selectivo, fobias sociales y evitación de 
                    participación. Reduce la ansiedad social y fortalece la confianza interpersonal.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 8: Pérdida de Vínculo Primario */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-indigo-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">8. Pérdida de Vínculo Primario</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 5-8 años</p>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Estoy lejos de mamá/papá muchas horas"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Plexo Solar (-) → Riñón Der (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    El vínculo primario es fundamental para la supervivencia. La separación prolongada activa alarmas 
                    biológicas que se manifiestan como ansiedad de separación, enfermedades frecuentes los lunes, 
                    somatizaciones para regresar a casa y regresiones en el desarrollo. Fortalece la seguridad interna 
                    y facilita la separación sana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Características Generales */}
        <CourseSection
          title="Características Generales de los Conflictos Escolares"
          icon={<CheckCircle className="w-8 h-8 text-slate-500" />}
        >
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Manifestaciones Físicas
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Los conflictos escolares se manifiestan físicamente a través de una variedad de síntomas que 
                  reflejan la activación del sistema nervioso autónomo y las respuestas de estrés del organismo. 
                  Estos síntomas no son aleatorios, sino que siguen patrones específicos según el tipo de conflicto activo.
                </p>
                <p>
                  <strong>Síntomas más comunes incluyen:</strong> tensión muscular en cuello y hombros, dolores de 
                  cabeza frecuentes, problemas digestivos (dolor abdominal, náuseas, cambios en el apetito), 
                  alteraciones del sueño, fatiga crónica, y en casos más severos, somatizaciones que pueden 
                  incluir problemas respiratorios, dermatológicos o inmunológicos.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Manifestaciones Emocionales
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Emocionalmente, estos conflictos generan una amplia gama de respuestas que pueden variar desde 
                  la ansiedad y la irritabilidad hasta la depresión y el aislamiento social. Es importante entender 
                  que estas manifestaciones son adaptativas y tienen un propósito biológico específico.
                </p>
                <p>
                  <strong>Respuestas emocionales típicas incluyen:</strong> ansiedad anticipatoria, irritabilidad, 
                  cambios de humor bruscos, baja autoestima, dificultades para concentrarse, miedo al fracaso, 
                  perfeccionismo excesivo, y en casos más severos, conductas de evitación o agresividad.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Impacto en el Aprendizaje
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Estos conflictos biológicos afectan directamente la capacidad de aprendizaje del niño, generando 
                  bloqueos energéticos que impiden la asimilación adecuada de conocimientos. El sistema nervioso, 
                  cuando está en estado de alerta constante, prioriza la supervivencia sobre el aprendizaje, 
                  lo que resulta en dificultades de concentración, memoria y procesamiento de información.
                </p>
                <p>
                  <strong>El biomagnetismo escolar se enfoca en:</strong> identificar y resolver estos conflictos 
                  para restaurar el equilibrio energético, liberar los bloqueos que impiden el aprendizaje natural, 
                  y crear un ambiente interno que favorezca la asimilación de conocimientos y el desarrollo del 
                  potencial académico del niño.
                </p>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para las Patologías?
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que conoces los conflictos fundamentales, es momento de explorar 
            las patologías específicas que afectan a los niños en edad escolar.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block1;