import React from 'react';
import CourseSection from '../../CourseSection';
import { Search, Target, ArrowRight, CheckCircle, Activity, Shield, Zap, Heart } from 'lucide-react';

const Module3Block3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <Search className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Técnicas de Rastreo Integradas
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Rastreo Biomagnético, Kinesiológico y por Sensaciones en el Contexto Escolar
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción a las Técnicas de Rastreo Integradas"
          icon={<Search className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              El Rastreo como Herramienta de Diagnóstico Integral
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                El rastreo en el contexto escolar no es solo una técnica de diagnóstico, sino una herramienta 
                de comunicación profunda con el organismo del niño. A través de diferentes modalidades de 
                rastreo, podemos acceder a información que el niño no puede expresar verbalmente.
              </p>
              <p>
                <strong>El rastreo biomagnético</strong> nos permite identificar desequilibrios energéticos 
                específicos. <strong>El rastreo kinesiológico</strong> nos da acceso a información emocional 
                y de estrés. <strong>El rastreo por sensaciones</strong> nos conecta con la sabiduría corporal 
                del niño.
              </p>
              <p>
                La integración de estas tres técnicas crea un sistema de diagnóstico multidimensional que 
                respeta la complejidad del ser humano en desarrollo y permite intervenciones más precisas 
                y efectivas en el entorno educativo.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Rastreo Biomagnético */}
        <CourseSection
          title="Rastreo Biomagnético Escolar"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El rastreo biomagnético en escolares requiere sensibilidad especial. Los niños son más 
              sensibles a los campos magnéticos y responden más rápidamente que los adultos.
            </p>
          </div>

          <div className="space-y-8">
            {/* Preparación del Niño */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Preparación del Niño</h3>
                  <p className="text-sm text-gray-500">Crear un ambiente seguro y confortable</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Explicación simple:</p>
                  <p className="text-sm leading-relaxed">
                    "Vamos a jugar a encontrar tesoros en tu cuerpo. Los imanes nos ayudan a encontrar 
                    lugares que necesitan un poco de ayuda para sentirse mejor."
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Posición cómoda:</p>
                  <p className="text-sm leading-relaxed">
                    Niño acostado boca arriba, con una almohada bajo la cabeza. Mantener el ambiente 
                    tranquilo, sin ruidos fuertes. Permitir que el niño tenga un objeto de confianza 
                    (peluche, manta) si lo necesita.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Tiempo de sesión:</p>
                  <p className="text-sm leading-relaxed">
                    Máximo 20-30 minutos para niños de 5-8 años. 30-45 minutos para niños de 9-12 años. 
                    Observar señales de cansancio o inquietud y ajustar la duración según la respuesta del niño.
                  </p>
                </div>
              </div>
            </div>

            {/* Secuencia de Rastreo Básica */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Secuencia de Rastreo Básica</h3>
                  <p className="text-sm text-gray-500">Protocolo paso a paso para escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">1. Evaluación inicial:</p>
                  <p className="text-sm">Pulso radial, temperatura, estado general del niño</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">2. Rastreo de pares principales:</p>
                  <p className="text-sm">Temporal Izq (-) → Temporal Der (+), Frontal (-) → Occipital (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">3. Rastreo de glándulas:</p>
                  <p className="text-sm">Timo (-) → Timo (+), Suprarrenal (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">4. Rastreo de órganos:</p>
                  <p className="text-sm">Hígado (-) → Hígado (+), Riñón Izq (-) → Riñón Der (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">5. Confirmación:</p>
                  <p className="text-sm leading-relaxed">
                    Verificar que los pares encontrados respondan correctamente. Si hay resonancia, 
                    mantener los imanes en posición durante el tiempo indicado (10-15 minutos).
                  </p>
                </div>
              </div>
            </div>

            {/* Puntos Específicos para Escolares */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Puntos Específicos para Escolares</h3>
                  <p className="text-sm text-gray-500">Áreas prioritarias en el rastreo pediátrico</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sistema Nervioso Central:</p>
                  <p className="text-sm text-gray-600 mb-2">Temporal Izq (-) → Temporal Der (+)</p>
                  <p className="text-sm text-gray-600 mb-2">Frontal (-) → Occipital (+)</p>
                  <p className="text-sm text-gray-600">Cerebelo (-) → Cerebelo (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sistema Endocrino:</p>
                  <p className="text-sm text-gray-600 mb-2">Timo (-) → Timo (+)</p>
                  <p className="text-sm text-gray-600 mb-2">Suprarrenal (-) → Suprarrenal (+)</p>
                  <p className="text-sm text-gray-600">Tiroides (-) → Tiroides (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sistema Inmune:</p>
                  <p className="text-sm text-gray-600 mb-2">Bazo (-) → Bazo (+)</p>
                  <p className="text-sm text-gray-600 mb-2">Ganglios (-) → Ganglios (+)</p>
                  <p className="text-sm text-gray-600">Médula ósea (-) → Médula ósea (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sistema Digestivo:</p>
                  <p className="text-sm text-gray-600 mb-2">Estómago (-) → Estómago (+)</p>
                  <p className="text-sm text-gray-600 mb-2">Intestino (-) → Intestino (+)</p>
                  <p className="text-sm text-gray-600">Hígado (-) → Hígado (+)</p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Rastreo Kinesiológico */}
        <CourseSection
          title="Rastreo Kinesiológico Aplicado"
          icon={<Activity className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La kinesiología en escolares es especialmente efectiva porque los niños tienen respuestas 
              musculares más claras y directas que los adultos. Su sistema nervioso responde de manera 
              más honesta a los estímulos.
            </p>
          </div>

          <div className="space-y-8">
            {/* Test Muscular Básico */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Test Muscular Básico</h3>
                  <p className="text-sm text-gray-500">Técnica fundamental para escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Preparación:</p>
                  <p className="text-sm leading-relaxed">
                    Niño sentado cómodamente, brazo extendido horizontalmente. Explicar: "Vamos a jugar 
                    a que tu brazo es fuerte como un superhéroe. Voy a tocar tu brazo suavemente."
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica:</p>
                  <p className="text-sm leading-relaxed">
                    Presión suave y constante en el brazo extendido. Si el brazo se mantiene firme = 
                    respuesta positiva. Si cede = respuesta negativa o estrés. Repetir 2-3 veces para confirmar.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Puntos de test:</p>
                  <p className="text-sm leading-relaxed">
                    Deltoides (hombro), Bíceps (brazo), Cuádriceps (muslo). Usar el músculo más fuerte 
                    y accesible para el niño.
                  </p>
                </div>
              </div>
            </div>

            {/* Test de Estrés Emocional */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Test de Estrés Emocional</h3>
                  <p className="text-sm text-gray-500">Identificar conflictos emocionales específicos</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Método:</p>
                  <p className="text-sm leading-relaxed">
                    Con el niño en posición de test, mencionar diferentes situaciones escolares: 
                    "¿Te sientes bien cuando estás en la escuela?", "¿Te gusta tu maestra?", 
                    "¿Te sientes cómodo con tus compañeros?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Interpretación:</p>
                  <p className="text-sm leading-relaxed">
                    Brazo fuerte = respuesta positiva, sin estrés. Brazo débil = hay conflicto 
                    emocional con esa situación. Observar cambios en la fuerza muscular.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Aplicación práctica:</p>
                  <p className="text-sm leading-relaxed">
                    Identificar qué materias, maestros o situaciones generan más estrés. Esto 
                    ayuda a enfocar el tratamiento biomagnético en las áreas específicas de conflicto.
                  </p>
                </div>
              </div>
            </div>

            {/* Test de Alimentos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Test de Alimentos</h3>
                  <p className="text-sm text-gray-500">Identificar sensibilidades alimentarias</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Método:</p>
                  <p className="text-sm leading-relaxed">
                    Colocar una muestra del alimento en la boca del niño (sin tragar) o en la mano. 
                    Realizar el test muscular. Si el brazo se debilita, hay sensibilidad a ese alimento.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Alimentos comunes a testear:</p>
                  <p className="text-sm leading-relaxed">
                    Lácteos, gluten, azúcar, colorantes artificiales, conservantes. Estos pueden 
                    afectar el comportamiento y el rendimiento escolar.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Aplicación escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Identificar si el desayuno o almuerzo escolar está afectando al niño. 
                    Recomendar ajustes en la dieta para mejorar el comportamiento en clase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Rastreo por Sensaciones */}
        <CourseSection
          title="Rastreo por Sensaciones Corporales"
          icon={<Zap className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los niños son especialmente sensibles a las sensaciones corporales. Su capacidad de 
              percepción está menos "contaminada" por patrones mentales que en los adultos, lo que 
              los hace excelentes "detectores" de desequilibrios energéticos.
            </p>
          </div>

          <div className="space-y-8">
            {/* Sensaciones Físicas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sensaciones Físicas</h3>
                  <p className="text-sm text-gray-500">Identificar desequilibrios a través del cuerpo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de escaneo corporal:</p>
                  <p className="text-sm leading-relaxed">
                    "Vamos a hacer un mapa de tu cuerpo. Cierra los ojos y dime qué sientes en cada parte. 
                    ¿Hay algún lugar que se siente diferente, caliente, frío, tenso o raro?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sensaciones a identificar:</p>
                  <p className="text-sm leading-relaxed">
                    Calor (inflamación), frío (debilidad), tensión (estrés), hormigueo (circulación), 
                    pesadez (congestión), ligereza (equilibrio). Cada sensación indica un estado energético específico.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Aplicación práctica:</p>
                  <p className="text-sm leading-relaxed">
                    Mapear las sensaciones antes y después del tratamiento biomagnético. Los niños 
                    pueden reportar cambios inmediatos en sus sensaciones corporales.
                  </p>
                </div>
              </div>
            </div>

            {/* Sensaciones Emocionales */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sensaciones Emocionales</h3>
                  <p className="text-sm text-gray-500">Conectar con las emociones a través del cuerpo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de mapeo emocional:</p>
                  <p className="text-sm leading-relaxed">
                    "¿Dónde sientes la tristeza en tu cuerpo? ¿Y la alegría? ¿Y el enojo? 
                    ¿Hay algún lugar que se siente pesado o vacío?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Emociones y ubicaciones:</p>
                  <p className="text-sm leading-relaxed">
                    Tristeza (pecho), enojo (hígado/estómago), miedo (riñones), alegría (corazón), 
                    ansiedad (plexo solar). Cada emoción tiene una ubicación corporal específica.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Aplicación escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Identificar qué emociones están bloqueadas o excesivas. Esto ayuda a entender 
                    el comportamiento del niño en el entorno escolar y enfocar el tratamiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Técnicas de Sensibilización */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Técnicas de Sensibilización</h3>
                  <p className="text-sm text-gray-500">Aumentar la percepción corporal del niño</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Respiración consciente:</p>
                  <p className="text-sm leading-relaxed">
                    "Respira profundo y siente cómo el aire entra y sale de tu cuerpo. 
                    ¿Dónde sientes la respiración? ¿En el pecho, en el vientre, en la espalda?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Visualización guiada:</p>
                  <p className="text-sm leading-relaxed">
                    "Imagina que tienes una luz dorada que recorre tu cuerpo desde la cabeza hasta los pies. 
                    ¿Dónde se detiene la luz? ¿Dónde se siente más brillante o más tenue?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de colores:</p>
                  <p className="text-sm leading-relaxed">
                    "Si tu cuerpo fuera un arcoíris, ¿de qué color sería cada parte? ¿Hay algún lugar 
                    que se siente de un color diferente o más oscuro?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Integración de Técnicas */}
        <CourseSection
          title="Integración de las Tres Técnicas"
          icon={<Shield className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La verdadera potencia del rastreo escolar está en la integración de las tres técnicas. 
              Cada una aporta información única que, combinada, crea un diagnóstico multidimensional 
              y un tratamiento más efectivo.
            </p>
          </div>

          <div className="space-y-8">
            {/* Protocolo Integrado Completo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Protocolo Integrado Completo</h3>
                  <p className="text-sm text-gray-500">Secuencia paso a paso para escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 1 - Sensaciones (5-10 min):</p>
                  <p className="text-sm leading-relaxed">
                    Mapeo corporal inicial. "¿Cómo se siente tu cuerpo hoy? ¿Hay algún lugar que se siente diferente?" 
                    Registrar todas las sensaciones reportadas por el niño.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 2 - Kinesiología (10-15 min):</p>
                  <p className="text-sm leading-relaxed">
                    Test muscular para confirmar áreas de estrés. "Vamos a probar qué tan fuerte está tu brazo 
                    cuando piensas en diferentes cosas de la escuela." Identificar conflictos específicos.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 3 - Biomagnetismo (15-20 min):</p>
                  <p className="text-sm leading-relaxed">
                    Aplicar imanes en los pares identificados. "Vamos a poner estos imanes especiales en los 
                    lugares que necesitan ayuda." Trabajar con los desequilibrios encontrados.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 4 - Verificación (5-10 min):</p>
                  <p className="text-sm leading-relaxed">
                    Re-testar con kinesiología y re-mapear sensaciones. "¿Cómo se siente tu cuerpo ahora? 
                    ¿Hay algún cambio?" Confirmar mejoras y ajustar si es necesario.
                  </p>
                </div>
              </div>
            </div>

            {/* Ventajas del Enfoque Integrado */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Ventajas del Enfoque Integrado</h3>
                  <p className="text-sm text-gray-500">Beneficios específicos para escolares</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Mayor precisión diagnóstica:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    La combinación de técnicas permite identificar desequilibrios que una sola técnica 
                    podría pasar por alto. Los niños responden de manera más clara a la integración.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Mejor comprensión del niño:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    El niño participa activamente en su diagnóstico y tratamiento, desarrollando 
                    conciencia corporal y emocional que le servirá toda la vida.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Resultados más duraderos:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    El abordaje multidimensional crea cambios más profundos y estables, 
                    reduciendo la necesidad de tratamientos repetitivos.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Aplicación escolar específica:</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Identifica exactamente qué aspectos del entorno escolar están afectando al niño, 
                    permitiendo intervenciones más dirigidas y efectivas.
                  </p>
                </div>
              </div>
            </div>

            {/* Consideraciones Especiales */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Consideraciones Especiales para Escolares</h3>
                  <p className="text-sm text-gray-500">Adaptaciones específicas por edad</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Niños de 5-7 años:</p>
                  <p className="text-sm leading-relaxed">
                    Sesiones más cortas (20-30 min), más juego y visualización. Usar lenguaje simple 
                    y metáforas. Permitir movimiento y descansos frecuentes.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Niños de 8-10 años:</p>
                  <p className="text-sm leading-relaxed">
                    Pueden manejar sesiones más largas (30-45 min), mayor participación en el diagnóstico. 
                    Explicar más sobre lo que está pasando en su cuerpo.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Niños de 11-12 años:</p>
                  <p className="text-sm leading-relaxed">
                    Sesiones completas (45-60 min), participación activa en el tratamiento. Pueden 
                    entender conceptos más complejos y colaborar en su propio proceso de sanación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para la Evaluación?
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que conoces las técnicas de rastreo, es momento de aprender 
            sobre los métodos de evaluación y mapeo de sensaciones.
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