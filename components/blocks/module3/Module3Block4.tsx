import React from 'react';
import CourseSection from '../../CourseSection';
import { Heart, Target, ArrowRight, CheckCircle, Activity, Users, Brain, BookOpen } from 'lucide-react';

const Module3Block4: React.FC = () => {
  return (
    <div id="block-4" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <Heart className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Las 18 Sensaciones del Conflicto Escolar
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Identificación y Trabajo con las Sensaciones que Soportan los Conflictos Educativos
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Objetivo del Bloque */}
        <section className="bg-slate-100 text-slate-700 rounded-lg sm:rounded-xl lg:rounded-xl shadow-sm p-3 sm:p-4 lg:p-6 text-center border border-slate-200 mb-12">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Objetivo del Bloque</h2>
          <p className="text-sm sm:text-base max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Aprender a identificar, rastrear y trabajar con las 18 sensaciones específicas que soportan los 
            conflictos escolares más frecuentes en niños de 5-12 años usando el rastreo biomagnético 
            por medición de extremidades.
          </p>
        </section>

        {/* Fundamento Teórico */}
        <CourseSection
          title="Fundamento Teórico de las Sensaciones"
          icon={<BookOpen className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              ¿Qué son las Sensaciones que Soportan Conflictos?
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Las <strong>sensaciones que soportan conflictos</strong> son emociones viscerales profundas 
                que el niño experimenta en su cuerpo como respuesta a situaciones escolares desafiantes. 
                Estas sensaciones se "anclan" energéticamente y se convierten en el sustrato emocional 
                que mantiene activo el conflicto biológico.
              </p>
              <p>
                A diferencia de las emociones superficiales que el niño puede expresar ("estoy triste", "me enojo"), 
                estas sensaciones son más profundas y frecuentemente inconscientes. Son la <strong>verdadera causa 
                energética</strong> de síntomas como TDAH, asma, bruxismo y otras manifestaciones escolares.
              </p>
              <p>
                El rastreo biomagnético por medición de extremidades nos permite acceder a esta información que 
                está almacenada en el campo energético del niño pero no disponible para su mente consciente. 
                Una vez identificada la sensación específica a través del acortamiento, podemos trabajar con ella 
                para liberar el conflicto.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Características de las Sensaciones</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Son específicas y precisas</li>
                <li>• Se sienten en el cuerpo, no en la mente</li>
                <li>• Generalmente son inconscientes</li>
                <li>• Se activan en contextos escolares específicos</li>
                <li>• Mantienen el conflicto biológico activo</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Proceso de Identificación</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Rastreo biomagnético con lista específica</li>
                <li>• Confirmación por acortamiento de extremidades</li>
                <li>• Exploración de la dinámica de la sensación</li>
                <li>• Correlación con síntomas físicos</li>
                <li>• Búsqueda del instante de origen</li>
              </ul>
            </div>
          </div>
        </CourseSection>

        {/* Lista Completa de las 18 Sensaciones */}
        <CourseSection
          title="Lista Completa de las 18 Sensaciones Escolares"
          icon={<Heart className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Estas son las 18 sensaciones más frecuentes que sostienen conflictos escolares. Cada una 
              tiene características específicas y se manifiesta de maneras particulares en el contexto educativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sensaciones de Separación y Pérdida */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-full mr-3">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Separación y Pérdida</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">1. Abandono</h5>
                  <p className="text-sm text-red-700">"Me dejaron solo en este lugar desconocido"</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">2. Soledad</h5>
                  <p className="text-sm text-red-700">"Estoy solo, nadie me acompaña realmente"</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">3. Vacío</h5>
                  <p className="text-sm text-red-700">"Hay un hueco que no se puede llenar"</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">4. Traición</h5>
                  <p className="text-sm text-red-700">"Alguien en quien confiaba me falló"</p>
                </div>
              </div>
            </div>

            {/* Sensaciones de Ataque y Defensa */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 rounded-full mr-3">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Ataque y Defensa</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">5. Agresión</h5>
                  <p className="text-sm text-orange-700">"Me atacan o me siento en peligro"</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">6. Vulnerabilidad</h5>
                  <p className="text-sm text-orange-700">"Estoy expuesto y pueden lastimarme"</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">7. Persecución</h5>
                  <p className="text-sm text-orange-700">"Me persiguen, me vigilan constantemente"</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">8. Ira</h5>
                  <p className="text-sm text-orange-700">"Tengo rabia acumulada que no puedo expresar"</p>
                </div>
              </div>
            </div>

            {/* Sensaciones de Incapacidad */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-yellow-100 rounded-full mr-3">
                  <Brain className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Incapacidad</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">9. Frustración</h5>
                  <p className="text-sm text-yellow-700">"No puedo hacer lo que quiero o necesito"</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">10. Impotencia</h5>
                  <p className="text-sm text-yellow-700">"No tengo poder para cambiar mi situación"</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">11. Insatisfacción</h5>
                  <p className="text-sm text-yellow-700">"Nada de lo que hago es suficiente"</p>
                </div>
              </div>
            </div>

            {/* Sensaciones de Devaluación */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Devaluación</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">12. Devaluación</h5>
                  <p className="text-sm text-blue-700">"No valgo lo suficiente, soy inferior"</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">13. Humillación</h5>
                  <p className="text-sm text-blue-700">"Me expusieron y me hicieron sentir mal"</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">14. Desvalorización Estética</h5>
                  <p className="text-sm text-blue-700">"Los otros son más bonitos o mejores que yo"</p>
                </div>
              </div>
            </div>

            {/* Sensaciones Existenciales */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-full mr-3">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Existenciales</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">15. Hambre</h5>
                  <p className="text-sm text-purple-700">"Tengo hambre de algo que no llega"</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">16. Angustia</h5>
                  <p className="text-sm text-purple-700">"Hay una opresión que no puedo explicar"</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">17. Infelicidad</h5>
                  <p className="text-sm text-purple-700">"La tristeza profunda que no se va"</p>
                </div>
              </div>
            </div>

            {/* Sensación Extrema */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 rounded-full mr-3">
                  <CheckCircle className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Sensación Específica</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">18. Amor Difícil</h5>
                  <p className="text-sm text-gray-700">"El amor que necesito es complicado de conseguir o mantener"</p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Protocolo de Identificación */}
        <CourseSection
          title="Protocolo de Identificación de Sensaciones"
          icon={<Activity className="w-8 h-8 text-slate-500" />}
        >
          <div className="space-y-8">
            {/* Paso a Paso */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Protocolo Paso a Paso</h3>
                  <p className="text-sm text-gray-500">Metodología sistemática para identificar la sensación específica</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Secuencia de Rastreo:</h4>
                  <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600">
                    <li><strong>Establecer contexto:</strong> "Vamos a identificar cuál es la sensación que está detrás de tu conflicto escolar usando el rastreo"</li>
                    <li><strong>Preparar rastreo:</strong> Niño en posición, medir extremidades como línea base</li>
                    <li><strong>Colocar imán y preguntar:</strong> Imán negativo en punto específico: "¿Hay resonancia con abandono escolar?" (observar acortamiento)</li>
                    <li><strong>Continuar sistemáticamente:</strong> Rastrear una por una las 18 sensaciones hasta encontrar acortamiento</li>
                    <li><strong>Confirmar hallazgo:</strong> Cuando hay acortamiento, repetir 2-3 veces para validar</li>
                    <li><strong>Explorar dinámicas:</strong> Una vez confirmada, profundizar en manifestaciones y correlaciones</li>
                  </ol>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Consideraciones Importantes:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Una por vez:</strong> Rastrear solo una sensación por vez, nunca combinar</li>
                    <li>• <strong>Técnica consistente:</strong> Mantener la misma posición y presión en las mediciones</li>
                    <li>• <strong>Contexto específico:</strong> Siempre vincular con "en la escuela" o "cuando estás estudiando"</li>
                    <li>• <strong>Múltiples sensaciones:</strong> Un niño puede mostrar acortamiento en 2-3 sensaciones diferentes</li>
                    <li>• <strong>Validación cruzada:</strong> Correlacionar resultados con síntomas físicos observados</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sensaciones por Edad */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sensaciones Más Frecuentes por Edad</h3>
                  <p className="text-sm text-gray-500">Patrones típicos según el desarrollo</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">5-7 años</h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <p><strong>Más frecuentes:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Abandono</li>
                      <li>• Soledad</li>
                      <li>• Vulnerabilidad</li>
                      <li>• Hambre (de atención)</li>
                    </ul>
                    <p className="mt-3"><strong>Contexto:</strong> Adaptación inicial, separación de padres</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">8-10 años</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <p><strong>Más frecuentes:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Frustración</li>
                      <li>• Devaluación</li>
                      <li>• Humillación</li>
                      <li>• Insatisfacción</li>
                    </ul>
                    <p className="mt-3"><strong>Contexto:</strong> Exigencias académicas, comparaciones</p>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 mb-3">11-12 años</h4>
                  <div className="space-y-2 text-sm text-purple-700">
                    <p><strong>Más frecuentes:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Traición</li>
                      <li>• Desvalorización estética</li>
                      <li>• Ira</li>
                      <li>• Angustia</li>
                    </ul>
                    <p className="mt-3"><strong>Contexto:</strong> Cambios pre-adolescentes, relaciones sociales complejas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Exploración de Dinámicas */}
        <CourseSection
          title="Exploración de Dinámicas de la Sensación"
          icon={<Brain className="w-8 h-8 text-slate-500" />}
        >
          <div className="space-y-8">
            {/* Preguntas de Exploración */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Preguntas de Exploración Profunda</h3>
                  <p className="text-sm text-gray-500">Cómo profundizar una vez identificada la sensación</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Manifestaciones Corporales:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>"¿Dónde sientes eso en tu cuerpo?"</p>
                    <p>"¿Cómo se siente físicamente cuando tienes esa sensación?"</p>
                    <p>"¿Qué le pasa a tu cuerpo cuando estás en la escuela?"</p>
                    <p>"¿En qué parte te duele o se tensa?"</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Reacciones y Patrones:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>"¿Qué haces cuando sientes eso?"</p>
                    <p>"¿Cómo reacciona tu cuerpo?"</p>
                    <p>"¿Qué pensamientos vienen cuando tienes esa sensación?"</p>
                    <p>"¿Qué situaciones específicas la activan más?"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Correlación con Síntomas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Correlación Sensación-Síntoma</h3>
                  <p className="text-sm text-gray-500">Conexiones típicas entre sensaciones y manifestaciones físicas</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">Abandono/Soledad</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Ansiedad de separación</li>
                    <li>• Problemas digestivos</li>
                    <li>• Enfermedades frecuentes los lunes</li>
                    <li>• Regresiones</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h5 className="font-semibold text-orange-800 mb-2">Frustración/Impotencia</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• TDAH</li>
                    <li>• Bruxismo</li>
                    <li>• Comportamientos disruptivos</li>
                    <li>• Tics nerviosos</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Devaluación/Humillación</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Mutismo selectivo</li>
                    <li>• Evitación escolar</li>
                    <li>• Problemas de autoestima</li>
                    <li>• Aislamiento social</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">Agresión/Vulnerabilidad</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Asma escolar</li>
                    <li>• Crisis de pánico</li>
                    <li>• Fobias específicas</li>
                    <li>• Somatizaciones</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">Angustia/Infelicidad</h5>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Trastornos del sueño</li>
                    <li>• Pérdida de apetito</li>
                    <li>• Fatiga crónica</li>
                    <li>• Dolores de cabeza</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Ira/Persecución</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Hiperactividad</li>
                    <li>• Agresividad</li>
                    <li>• Problemas de conducta</li>
                    <li>• Desafío a la autoridad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Sensaciones Identificadas
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que dominas la identificación de las 18 sensaciones específicas del conflicto escolar 
            mediante rastreo biomagnético, es momento de aprender sobre el rastreo temporal para encontrar 
            el instante de origen y la identificación de microbios asociados usando la misma técnica de extremidades.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block4;