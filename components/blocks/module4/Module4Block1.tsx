import React from 'react';
import SimpleSection from '../../SimpleSection';
import InfoCard from '../../InfoCard';
import ContentBlock from '../../ContentBlock';
import ConflictCard from '../../ConflictCard';
import BlockHeader from '../../BlockHeader';
import { textUtils } from '../../../src/styles/typography';
import { Brain, Users, Target, AlertTriangle, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const Module4Block1: React.FC = () => {
  return (
    <div id="block-1" className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Header */}
      <BlockHeader
        icon={Brain}
        title="Marco Teórico - Conflictos Biológicos Adolescentes"
        subtitle="La Neurobiología de la Adolescencia y los 7 Conflictos Fundamentales (12-18 años)"
        gradientFrom="from-purple-100"
        gradientTo="to-pink-200"
        iconBgColor="bg-purple-200"
        iconTextColor="text-purple-700"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        {/* Introducción */}
        <SimpleSection
          title="Introducción al Biomagnetismo Adolescente"
          icon={<Brain className="w-8 h-8" />}
        >
          <ContentBlock
            title="¿Qué son los Conflictos Biológicos Adolescentes?"
            content={
              <div className="space-y-4">
                <p>
                  Los conflictos biológicos adolescentes son respuestas adaptativas del organismo en transformación 
                  ante situaciones específicas de la metamorfosis puberal que generan estrés o amenaza percibida. 
                  Estos conflictos no son "problemas" del adolescente, sino estrategias inteligentes de adaptación 
                  que se activan cuando el sistema nervioso detecta que los cambios corporales y sociales pueden ser abrumadores.
                </p>
                <p>
                  Entre los 12-18 años, el cerebro adolescente experimenta una transformación neurológica fundamental 
                  que coincide exactamente con la metamorfosis corporal y la construcción de la identidad adulta. 
                  Esta evolución incluye la poda sináptica masiva, la mielinización tardía del lóbulo frontal 
                  y la hiperactivación del sistema límbico, creando un cerebro en construcción.
                </p>
                <p>
                  Cuando los cambios puberales y sociales generan estrés, el cerebro adolescente activa respuestas 
                  primitivas de supervivencia: rebelión (adolescentes confrontativos), aislamiento (adolescentes retraídos) 
                  o hiperactividad (adolescentes impulsivos).
                </p>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <InfoCard
              icon={<Brain className="w-6 h-6" />}
              title="Características de los Conflictos"
              color="purple"
              items={[
                "Son respuestas adaptativas inteligentes",
                "Se activan ante amenaza percibida",
                "Tienen manifestaciones físicas específicas",
                "Pueden ser identificados y trabajados",
                "Su resolución libera el potencial de crecimiento"
              ]}
            />

            <InfoCard
              icon={<Target className="w-6 h-6" />}
              title="Beneficios del Biomagnetismo"
              color="pink"
              items={[
                "Identificación precisa de conflictos",
                "Restauración del equilibrio energético",
                "Liberación de bloqueos de crecimiento",
                "Mejora en el bienestar general",
                "Potenciación de capacidades naturales"
              ]}
            />
          </div>
        </SimpleSection>

        {/* La Neurobiología de la Adolescencia */}
        <SimpleSection
          title="La Neurobiología de la Adolescencia"
          icon={<Brain className="w-8 h-8" />}
        >
          <ContentBlock
            title="La Revolución del Cerebro Adolescente"
            content={
              <div className="space-y-4">
                <p>
                  La adolescencia representa la transformación neurológica más dramática después del nacimiento. 
                  Durante esta etapa, el cerebro experimenta cambios profundos que explican muchos de los 
                  comportamientos y conflictos típicos de esta edad.
                </p>
                <p>
                  Entre los 12-18 años, el cerebro adolescente se encuentra en un estado de "construcción" 
                  constante, donde la poda sináptica elimina conexiones no utilizadas y la mielinización 
                  del lóbulo frontal continúa hasta los 25 años, lo que explica por qué el control ejecutivo 
                  y la toma de decisiones aún están en desarrollo.
                </p>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <InfoCard
              icon={<Brain className="w-6 h-6" />}
              title="Cambios Neurológicos"
              color="purple"
              items={[
                "Poda sináptica masiva: Eliminación de conexiones no utilizadas",
                "Mielinización tardía: Control ejecutivo inmaduro hasta los 25 años",
                "Hiperactivación límbica: Emociones intensificadas",
                "Desequilibrio dopaminérgico: Búsqueda de novedad y riesgo"
              ]}
            />

            <InfoCard
              icon={<Users className="w-6 h-6" />}
              title="Cerebro Social"
              color="pink"
              items={[
                "Área tegmental ventral: Mayor sensibilidad al rechazo social",
                "Teoría de la mente: Capacidad de entender perspectivas ajenas",
                "Audiencia imaginaria: Sensación constante de ser observado",
                "Conformidad grupal: Necesidad de pertenencia intensificada"
              ]}
            />
          </div>
        </SimpleSection>

        {/* Los 7 Conflictos Fundamentales */}
        <SimpleSection
          title="Los 7 Conflictos Biológicos Adolescentes Fundamentales"
          icon={<Target className="w-8 h-8" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              A continuación, exploraremos cada uno de los 7 conflictos biológicos que afectan más frecuentemente 
              a los adolescentes de 12-18 años. Cada conflicto incluye su par biomagnético específico, microorganismos 
              asociados y manifestaciones clínicas, proporcionando una guía completa para el diagnóstico y tratamiento 
              de esta población en metamorfosis.
            </p>
          </div>
          <div className="space-y-8">
            {/* Conflicto 1: Metamorfosis Corporal */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">1. Metamorfosis Corporal</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 12-15 años</p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Mi cuerpo cambia y ya no me reconozco"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Pineal (-) → Hipófisis (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Microorganismos:</p>
                  <p className="text-sm">Aspergillus (Canto - Canto), Virus Herpes tipo 6</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Manifestaciones clínicas:</p>
                  <ul className="text-sm leading-relaxed space-y-1">
                    <li>• Dismorfia corporal</li>
                    <li>• Trastornos alimentarios</li>
                    <li>• Evitación de espejos o fotografías</li>
                    <li>• Vestimenta que oculta el cuerpo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conflicto 2: Rebelión Identitaria */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">2. Rebelión Identitaria</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 13-16 años</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Debo separarme de mis padres para encontrar quién soy"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Suprarrenal (-) → Hígado (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    La necesidad biológica de diferenciación requiere distanciamiento emocional de los padres. 
                    Se manifiesta como rebeldía, oposición sistemática, búsqueda de identidad propia y 
                    rechazo de valores familiares. Es un proceso natural de individuación.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 3: Identidad Sexual */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">3. Identidad Sexual</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 14-17 años</p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "¿Quién soy como ser sexual? ¿Qué me atrae?"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Próstata/Útero (-) → Próstata/Útero (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Microorganismo:</p>
                  <p className="text-sm">Virus Epstein Barr (Occipital - Occipital)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    El despertar sexual genera confusión sobre la identidad y orientación. Se manifiesta 
                    como confusión sobre atracciones, ansiedad sexual, culpa por sensaciones nuevas y 
                    búsqueda de información sobre sexualidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 4: Pertenencia vs Individualidad */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">4. Pertenencia vs Individualidad</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 13-18 años</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "¿Cómo ser único pero pertenecer al grupo?"
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
                    El conflicto entre la necesidad de pertenecer al grupo y mantener la individualidad. 
                    Se manifiesta como presión grupal, miedo al rechazo, pérdida de identidad personal 
                    y fluctuaciones entre conformidad y rebelión.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 5: Futuro Incierto */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">5. Futuro Incierto</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 15-18 años</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "¿Qué haré con mi vida? ¿Seré exitoso?"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Frontal (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    La presión por definir el futuro genera ansiedad existencial. Se manifiesta como 
                    ansiedad de rendimiento, perfeccionismo, miedo al fracaso y procrastinación 
                    como mecanismo de evitación.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 6: Autoridad vs Autonomía */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">6. Autoridad vs Autonomía</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 12-17 años</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "¿Hasta cuándo debo obedecer? ¿Cuándo seré libre?"
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
                    El conflicto entre la dependencia y la independencia. Se manifiesta como 
                    desafío a la autoridad, necesidad de control, resentimiento hacia límites 
                    y búsqueda de autonomía prematura.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicto 7: Intensidad Emocional */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">7. Intensidad Emocional</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Edad: 12-18 años</p>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Mis emociones son tan intensas que me abruman"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Bulbo Raquídeo (-) → Corazón (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    La hiperactivación del sistema límbico genera emociones abrumadoras. Se manifiesta 
                    como cambios de humor extremos, sensibilidad emocional intensa, dificultad para 
                    regular emociones y conductas impulsivas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Características Generales */}
        <SimpleSection
          title="Características Generales de los Conflictos Adolescentes"
          icon={<CheckCircle className="w-8 h-8" />}
        >
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Manifestaciones Físicas
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Los conflictos adolescentes se manifiestan físicamente a través de una variedad de síntomas que 
                  reflejan la activación del sistema nervioso autónomo y las respuestas de estrés del organismo. 
                  Estos síntomas son especialmente intensos debido a la hiperactivación del sistema límbico.
                </p>
                <p>
                  <strong>Síntomas más comunes incluyen:</strong> tensión muscular generalizada, dolores de 
                  cabeza frecuentes, problemas digestivos (gastritis, colitis), alteraciones del sueño, 
                  fatiga crónica, y en casos más severos, somatizaciones que pueden incluir problemas 
                  dermatológicos, inmunológicos o endocrinos.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Manifestaciones Emocionales
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Emocionalmente, estos conflictos generan una amplia gama de respuestas intensificadas por 
                  la inmadurez del lóbulo frontal. Es importante entender que estas manifestaciones son 
                  adaptativas y tienen un propósito biológico específico en el proceso de individuación.
                </p>
                <p>
                  <strong>Respuestas emocionales típicas incluyen:</strong> intensidad emocional extrema, 
                  cambios de humor bruscos, ansiedad existencial, depresión, irritabilidad, impulsividad, 
                  búsqueda de sensaciones, y en casos más severos, conductas de riesgo o autodestructivas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Impacto en el Desarrollo
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Estos conflictos biológicos afectan directamente el proceso de individuación del adolescente, 
                  generando bloqueos energéticos que pueden interferir con el desarrollo de la identidad, 
                  la autonomía y la capacidad de establecer relaciones saludables.
                </p>
                <p>
                  <strong>El biomagnetismo adolescente se enfoca en:</strong> identificar y resolver estos conflictos 
                  para restaurar el equilibrio energético, facilitar el proceso de individuación natural, 
                  y crear un ambiente interno que favorezca el desarrollo de una identidad sólida y 
                  relaciones interpersonales saludables.
                </p>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-200 rounded-lg p-8 text-purple-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para las Sensaciones Específicas?
          </h2>
          <p className="text-purple-700 mb-6">
            Ahora que conoces los conflictos fundamentales, es momento de explorar 
            las 15 sensaciones específicas de la adolescencia.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-purple-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4Block1;
