import React from 'react';
import SimpleSection from '../../SimpleSection';
import InfoCard from '../../InfoCard';
import ContentBlock from '../../ContentBlock';
import BlockHeader from '../../BlockHeader';
import { textUtils } from '../../../src/styles/typography';
import { Heart, Brain, Users, Target, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Module4Block2: React.FC = () => {
  return (
    <div id="block-2" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <BlockHeader
        icon={Heart}
        title="Sensaciones Específicas de la Adolescencia"
        subtitle="Las 15 Sensaciones Viscerales que Definen la Experiencia Adolescente (12-18 años)"
        gradientFrom="from-blue-100"
        gradientTo="to-indigo-200"
        iconBgColor="bg-blue-200"
        iconTextColor="text-blue-700"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        {/* Introducción */}
        <SimpleSection
          title="Las 20 Sensaciones Viscerales Adolescentes"
          icon={<Heart className="w-8 h-8" />}
        >
          <ContentBlock
            title="¿Qué son las Sensaciones Viscerales Adolescentes?"
            content={
              <div className="space-y-4">
                <p>
                  Las sensaciones viscerales adolescentes son experiencias corporales específicas que surgen durante 
                  la metamorfosis de la adolescencia. Estas sensaciones reflejan los cambios profundos que ocurren 
                  en el cuerpo y la mente, y son fundamentales para entender y trabajar con los conflictos de esta etapa.
                </p>
                <p>
                  A diferencia de las emociones superficiales, estas sensaciones son más profundas y frecuentemente 
                  inconscientes. Son la <strong>verdadera causa energética</strong> de síntomas como acné, trastornos 
                  menstruales, ansiedad, gastritis y otras manifestaciones adolescentes.
                </p>
                <p>
                  Cada sensación tiene una ubicación corporal específica, un mensaje emocional subyacente, 
                  un par biomagnético asociado y un test muscular específico que permite su identificación 
                  y trabajo terapéutico.
                </p>
              </div>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <InfoCard
              icon={<Brain className="w-6 h-6" />}
              title="Características de las Sensaciones"
              color="blue"
              items={[
                "Son específicas de la adolescencia (12-18 años)",
                "Se sienten en el cuerpo, no en la mente",
                "Generalmente son inconscientes",
                "Se activan en contextos específicos de esta etapa",
                "Mantienen el conflicto biológico activo",
                "Están relacionadas con la metamorfosis corporal"
              ]}
            />

            <InfoCard
              icon={<Target className="w-6 h-6" />}
              title="Proceso de Identificación"
              color="teal"
              items={[
                "Rastreo biomagnético con lista específica adolescente",
                "Confirmación por acortamiento de extremidades",
                "Exploración de la dinámica de la sensación",
                "Correlación con síntomas físicos adolescentes",
                "Búsqueda del instante de origen (últimos 2-3 años)",
                "Test muscular específico para cada sensación"
              ]}
            />
          </div>
        </SimpleSection>

        {/* Sensaciones de Transformación */}
        <SimpleSection
          title="Sensaciones de Transformación (Acompañar - 5 sensaciones)"
          icon={<Sparkles className="w-8 h-8" />}
        >
          <div className="space-y-8">
            {/* Sensación 1: Energía Expansiva */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Sparkles className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">1. Energía Expansiva</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Acompañar</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Puedo conquistar el mundo"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de poder ilimitado y posibilidades infinitas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pecho, extremidades en crecimiento</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Timo (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que tienes energía para cambiar el mundo?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 2: Despertar Sensual */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">2. Despertar Sensual</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Acompañar</p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Mi cuerpo siente cosas nuevas y poderosas"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Nuevas sensaciones corporales, despertar sexual
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pelvis, genitales, piel en general</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Atlas (-) → Atlas (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes tu cuerpo de manera diferente que antes?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 3: Sed de Experiencias */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">3. Sed de Experiencias</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Acompañar</p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Necesito experimentar para saber quién soy"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Necesidad imperiosa de probar, experimentar, vivir
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Todo el cuerpo, especialmente sistema nervioso</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Frontal (-) → Occipital (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que necesitas experimentar cosas nuevas?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 4: Conexión Grupal Intensa */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">4. Conexión con Amigos</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Acompañar</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Mi tribu me comprende como nadie"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de fusión emocional con el grupo de pares
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Corazón, sistema límbico</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Pericardio (-) → Timo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que tus amigos te entienden mejor que tu familia?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 5: Lucidez Existencial */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-indigo-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">5. Claridad Interior</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Acompañar</p>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Veo la verdad que los adultos han olvidado"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Momentos de claridad profunda sobre la vida y el sentido
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Cabeza, especialmente área pineal</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Pineal (-) → Bulbo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que entiendes cosas que otros no ven?"</p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Sensaciones de Conflicto */}
        <SimpleSection
          title="Sensaciones de Conflicto (Equilibrar - 5 sensaciones)"
          icon={<Target className="w-8 h-8" />}
        >
          <div className="space-y-8">
            {/* Sensación 6: Extrañeza Corporal */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">6. Extrañeza Corporal</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Equilibrar</p>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "¿Quién es esta persona en el espejo?"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    "Este cuerpo no es mío, no me reconozco"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Todo el cuerpo, especialmente zonas en desarrollo</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Pineal (-) → Hipófisis (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que tu cuerpo es extraño o ajeno?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 7: Intensidad Emocional Abrumadora */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">7. Intensidad Emocional Abrumadora</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Equilibrar</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Siento todo demasiado fuerte, me va a explotar"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Emociones tan fuertes que parecen incontrolables
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pecho, garganta, sistema límbico</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Bulbo Raquídeo (-) → Corazón (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que tus emociones son demasiado intensas?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 8: Presión Social Asfixiante */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">8. Presión Social Asfixiante</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Equilibrar</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Todos me están mirando y juzgando"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación constante de ser juzgado y evaluado
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Nuca, hombros, sistema respiratorio</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Temporal Izq (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que todos te están observando?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 9: Vacío Existencial */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">9. Vacío Existencial</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Equilibrar</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "¿Para qué sirve todo esto? No tiene sentido"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de que nada tiene sentido o propósito
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pecho, abdomen, sensación de hueco</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Corazón (-) → Timo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que la vida no tiene sentido?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 10: Confusión Identitaria */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">10. Confusión Identitaria</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Equilibrar</p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "No sé quién soy ni quién quiero ser"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    No saber quién se es realmente
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Cabeza, sistema nervioso central</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Frontal (-) → Timo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Te sientes confundido sobre quién eres realmente?"</p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Sensaciones de Resistencia */}
        <SimpleSection
          title="Sensaciones de Resistencia (Transformar - 5 sensaciones)"
          icon={<CheckCircle className="w-8 h-8" />}
        >
          <div className="space-y-8">
            {/* Sensación 11: Rebeldía Visceral */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">11. Rebeldía Visceral</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Transformar</p>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Debo oponerme para no desaparecer"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Necesidad física de oponerse y resistir
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Músculos, sistema nervioso autónomo</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Suprarrenal (-) → Hígado (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que necesitas rebelarte para ser tú mismo?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 12: Bloqueo Digestivo Emocional */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">12. Bloqueo Digestivo Emocional</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Transformar</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "No puedo tragar más presión o control"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Incapacidad para "tragar" o procesar las demandas externas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Garganta, estómago, intestinos</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Estómago (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que no puedes 'digerir' lo que te exigen?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 13: Tensión Sexual Confusa */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">13. Tensión Sexual Confusa</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Transformar</p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Estas sensaciones me confunden y me dan miedo"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Despertar sexual que genera confusión y culpa
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pelvis, genitales, sistema endocrino</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Próstata/Útero (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Te confunden los cambios en tu sexualidad?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 14: Desconexión Mente-Cuerpo */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">14. Desconexión Mente-Cuerpo</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Transformar</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Mi mente y mi cuerpo no están conectados"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de que la cabeza va por un lado y el cuerpo por otro
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Cuello, conexión cabeza-cuerpo</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Cervicales (-) → Sacro (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que tu mente y tu cuerpo van por separado?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 15: Urgencia Temporal */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-indigo-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">15. Urgencia Temporal</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Transformar</p>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Se me acaba el tiempo para decidir mi vida"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de que el tiempo se agota para definir el futuro
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Sistema nervioso, tensión generalizada</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Frontal (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes presión por el tiempo que tienes para decidir tu futuro?"</p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Sensaciones Adicionales */}
        <SimpleSection
          title="Sensaciones Adicionales (5 sensaciones complementarias)"
          icon={<CheckCircle className="w-8 h-8" />}
        >
          <div className="space-y-8">
            {/* Sensación 16: Rabia Interna */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">16. Rabia Interna</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Transformar</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Me enojo por dentro pero no puedo expresarlo"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de enojo que se guarda para no generar conflictos
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Mandíbula, puños, músculos tensos</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Suprarrenal (-) → Hígado (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que te enojas por dentro pero no lo muestras?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 17: Vergüenza Social */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">17. Vergüenza Social</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Equilibrar</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Me da pena estar con otras personas"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de incomodidad y vergüenza en situaciones sociales
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pecho, garganta, manos sudorosas</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Timo (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Te da pena estar con otras personas?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 18: Confusión Sexual */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">18. Confusión Sexual</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Transformar</p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Me confunden estos cambios en mi cuerpo"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Confusión y desconcierto por los cambios corporales y sensaciones nuevas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pelvis, abdomen, sensación de pesadez</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Próstata/Útero (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Te confunden los cambios en tu cuerpo?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 19: Necesidad de Destacar */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">19. Necesidad de Destacar</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Equilibrar</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Necesito ser especial para que me valoren"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Necesidad de sobresalir y ser reconocido por los demás
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pecho, músculos tensos, mandíbula</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Corazón (-) → Páncreas (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Sientes que necesitas destacar para ser valorado?"</p>
                </div>
              </div>
            </div>

            {/* Sensación 20: Añoranza de la Infancia */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">20. Añoranza de la Infancia</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Acompañar</p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 italic text-lg">
                  "Echo de menos cuando todo era más fácil"
                </p>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Sensación de añoranza por la simplicidad y seguridad de la infancia
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Ubicación corporal:</p>
                  <p className="text-sm">Pecho, sensación de melancolía</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Corazón (-) → Timo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Test muscular:</p>
                  <p className="text-sm">"¿Echo de menos cuando era más pequeño?"</p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Resumen de las 20 Sensaciones */}
        <SimpleSection
          title="Resumen de las 20 Sensaciones Adolescentes"
          icon={<CheckCircle className="w-8 h-8" />}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Clasificación por Función</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Acompañar (8 sensaciones)</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>1. Energía Expansiva</p>
                  <p>2. Despertar Sensual</p>
                  <p>3. Sed de Experiencias</p>
                  <p>4. Conexión con Amigos</p>
                  <p>5. Claridad Interior</p>
                  <p>20. Añoranza de la Infancia</p>
                  <p className="text-xs text-gray-500 mt-2">+ 2 adicionales del documento original</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Equilibrar (7 sensaciones)</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>6. Extrañeza Corporal</p>
                  <p>7. Intensidad Emocional Abrumadora</p>
                  <p>8. Presión Social Asfixiante</p>
                  <p>9. Vacío Existencial</p>
                  <p>10. Confusión Identitaria</p>
                  <p>17. Vergüenza Social</p>
                  <p>19. Necesidad de Destacar</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Transformar (7 sensaciones)</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>11. Rebeldía Visceral</p>
                  <p>12. Bloqueo Digestivo Emocional</p>
                  <p>13. Tensión Sexual Confusa</p>
                  <p>14. Desconexión Mente-Cuerpo</p>
                  <p>15. Urgencia Temporal</p>
                  <p>16. Rabia Interna</p>
                  <p>18. Confusión Sexual</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Protocolo de Trabajo</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Para Sensaciones de Acompañar:</p>
                  <p className="text-sm text-gray-600">Validar y canalizar constructivamente</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Para Sensaciones de Equilibrar:</p>
                  <p className="text-sm text-gray-600">Buscar el equilibrio y la moderación</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Para Sensaciones de Transformar:</p>
                  <p className="text-sm text-gray-600">Trabajar activamente para el cambio</p>
                </div>
              </div>
            </div>
          </div>
        </SimpleSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-200 rounded-lg p-4 sm:p-6 lg:p-8 text-blue-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para las Patologías Específicas?
          </h2>
          <p className="text-blue-700 mb-6">
            Ahora que conoces las 20 sensaciones específicas, es momento de explorar 
            las patologías que afectan más frecuentemente a los adolescentes.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-blue-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module4Block2;
