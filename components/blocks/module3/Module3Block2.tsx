import React from 'react';
import CourseSection from '../../CourseSection';
import BlockHeader from '../../BlockHeader';
import { Heart, Activity, Brain, Target, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react';

const Module3Block2: React.FC = () => {
  return (
    <div id="block-2" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <BlockHeader
        icon={Heart}
        title="Patologías Escolares Específicas"
        subtitle="TDAH, Asma, Bruxismo y Trastornos Digestivos desde la Perspectiva Biomagnética"
        gradientFrom="from-slate-100"
        gradientTo="to-gray-200"
        iconBgColor="bg-slate-200"
        iconTextColor="text-slate-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción a las Patologías Escolares"
          icon={<Heart className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Patologías Escolares desde la Perspectiva Biomagnética
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Las patologías escolares no son "trastornos" en el sentido tradicional, sino respuestas adaptativas 
                inteligentes del organismo infantil ante desafíos específicos del entorno educativo. Cada patología 
                tiene su origen en conflictos biológicos particulares que podemos identificar y trabajar con biomagnetismo.
              </p>
              <p>
                <strong>El TDAH</strong> es una estrategia de supervivencia que mantiene al niño en estado de alerta 
                constante. <strong>El asma escolar</strong> es una respuesta territorial que busca regresar al ambiente 
                seguro del hogar. <strong>El bruxismo</strong> es la manifestación física de la tensión por situaciones 
                que el niño debe "aguantar" sin poder expresar su frustración.
              </p>
              <p>
                Comprender estas patologías desde esta perspectiva nos permite abordarlas no como problemas a suprimir, 
                sino como mensajes del organismo que necesitan ser escuchados y transformados para restaurar el equilibrio 
                natural del niño.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* TDAH */}
        <CourseSection
          title="Trastorno por Déficit de Atención e Hiperactividad (TDAH)"
          icon={<Activity className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El TDAH no es un "déficit" sino una estrategia adaptativa inteligente del organismo. 
              El niño mantiene hipervigilancia porque percibe el entorno escolar como potencialmente peligroso.
            </p>
          </div>

          <div className="space-y-8">
            {/* TDAH Inatento */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">TDAH Inatento</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">"Me desconecto para protegerme"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Desconexión, falta de contacto</li>
                        <li>• Sobrecarga sensorial, abrumado</li>
                        <li>• Necesidad de protección</li>
                        <li>• "No puedo con tanto estímulo"</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Primer día de colegio (5-6 años)</li>
                        <li>• Cambio de maestro/aula (6-8 años)</li>
                        <li>• Conflicto específico en clase (7-12 años)</li>
                        <li>• Momento de sobrecarga (cualquier edad)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Temporal Izq (-) → Temporal Der (+) - TDAH</li>
                        <li>• Frontal (-) → Occipital (+) - Función ejecutiva</li>
                        <li>• Suprarrenales (-) → Suprarrenales (+) - Regulación estrés</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 15-20 minutos según el par específico</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Interpretación Biológica:</p>
                  <p className="text-sm leading-relaxed">
                    El niño se desconecta del entorno para protegerse de la sobrecarga sensorial. 
                    Se manifiesta como dificultad para mantener la atención, "soñar despierto", 
                    y aparente desinterés por las actividades académicas. El sistema nervioso 
                    activa mecanismos de protección desconectándose parcialmente.
                  </p>
                </div>
              </div>
            </div>

            {/* TDAH Hiperactivo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">TDAH Hiperactivo</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">"Me muevo para liberar tensión y mantenerme alerta"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Nerviosismo, inquietud</li>
                        <li>• Necesidad de movimiento</li>
                        <li>• Tensión acumulada</li>
                        <li>• "No puedo estar quieto"</li>
                        <li>• Alerta constante</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Entrada al sistema escolar (5-6 años)</li>
                        <li>• Situación de restricción física (6-8 años)</li>
                        <li>• Conflicto de autoridad (7-9 años)</li>
                        <li>• Pérdida de libertad (6-9 años)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Temporal Der (-) → Temporal Der (+) - Hiperactividad</li>
                        <li>• Suprarrenales (-) → Suprarrenales (+) - Regulación estrés</li>
                        <li>• Cervicales (-) → Sacro (+) - Regulación autonómica</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 15-20 minutos según el par específico</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Interpretación Biológica:</p>
                  <p className="text-sm leading-relaxed">
                    El movimiento constante es una estrategia para liberar la tensión acumulada 
                    y mantener el sistema nervioso en estado de alerta. Se manifiesta como 
                    inquietud motora, dificultad para permanecer sentado, y necesidad constante 
                    de moverse. El sistema nervioso mantiene alerta constante para encontrar 
                    oportunidades de escape o recuperar control.
                  </p>
                </div>
              </div>
            </div>

            {/* TDAH Mixto */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">TDAH Mixto</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">"Oscilo entre desconectarme y hiperactivarme según la amenaza"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar las sensaciones predominantes</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Confusión, no sé cómo reaccionar</li>
                        <li>• Alternancia de respuestas</li>
                        <li>• "A veces me desconecto, a veces exploto"</li>
                        <li>• Impredecibilidad</li>
                        <li>• Conflictos internos</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Situación de amenaza variable (6-8 años)</li>
                        <li>• Conflictos contradictorios (7-10 años)</li>
                        <li>• Entorno impredecible (5-12 años)</li>
                        <li>• Múltiples estresores (cualquier edad)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Frontal (-) → Occipital (+) - Función ejecutiva</li>
                        <li>• Temporal Izq (-) → Temporal Der (+) - TDAH</li>
                        <li>• Temporal Der (-) → Temporal Der (+) - Hiperactividad</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 20-25 minutos (combinación de pares)</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Interpretación Biológica:</p>
                  <p className="text-sm leading-relaxed">
                    El niño alterna entre desconectarse y hiperactivarse según perciba el nivel de amenaza 
                    del entorno. Esta combinación de respuestas permite una adaptación más flexible pero 
                    también más compleja. Se manifiesta como períodos de desconexión seguidos de episodios 
                    de hiperactividad, creando un patrón irregular de comportamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Protocolo General para Trabajar TDAH
            </h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Historia Clínica Específica:</p>
                <p className="text-sm leading-relaxed">
                  ¿Cuándo aparecieron los síntomas? ¿Coincidió con algún evento escolar específico? 
                  ¿Con qué maestros mejora/empeora? ¿En qué materias? ¿Cuándo está mejor? ¿Cuándo peor?
                </p>
              </div>
              
              <div>
                <p className="font-semibold text-gray-800 mb-2">Protocolo Universal para Cualquier Patología:</p>
                <div className="bg-white p-4 rounded-lg">
                  <ol className="text-sm leading-relaxed space-y-2">
                    <li><strong>1. Buscar la sensación o sensaciones:</strong> Test muscular para identificar la emoción predominante que sostiene la patología</li>
                    <li><strong>2. Buscar con el test el instante:</strong> Ubicar temporalmente cuándo se activó este patrón (momento específico)</li>
                    <li><strong>3. Preguntar con el test cuál es el par que soporta la información de conflicto:</strong> El organismo indica qué sistema almacena esta información</li>
                    <li><strong>4. Seleccionar con el test cuál es el par a colocar:</strong> Confirmar el par biomagnético específico que necesita ser equilibrado</li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-amber-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-amber-800">
                  <strong>Importante:</strong> No hay pares fijos para patologías. Cada niño y cada situación requiere su propio rastreo personalizado siguiendo esta secuencia.
                </p>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Asma */}
        <CourseSection
          title="Asma Escolar"
          icon={<Activity className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              "El territorio escolar es tóxico para mí, no puedo respirar aquí". 
              El asma escolar es una respuesta inteligente del organismo que busca regresar al territorio seguro del hogar.
            </p>
          </div>

          <div className="space-y-8">
            {/* Secuencia de Trabajo para Asma */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">Secuencia de Trabajo para Asma Escolar</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Protocolo de evaluación y tratamiento</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Ahogo, falta de aire</li>
                        <li>• Miedo territorial, "no puedo estar aquí"</li>
                        <li>• Amenaza, peligro en el entorno</li>
                        <li>• "Quiero irme a casa"</li>
                        <li>• Enojo territorial</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Primera crisis en el colegio (5-7 años)</li>
                        <li>• Conflicto específico con maestro (6-10 años)</li>
                        <li>• Situación de bullying (8-12 años)</li>
                        <li>• Cambio de colegio/aula (cualquier edad)</li>
                        <li>• Evento traumático en entorno escolar (cualquier edad)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Axila (-) → Axila (+) - Asma territorial</li>
                        <li>• Pulmón (-) → Suprarrenal (+) - Crisis aguda</li>
                        <li>• Bronquio (-) → Paratiroides (+) - Mantenimiento</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 15-20 minutos según el par específico</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Interpretación Biológica:</p>
                  <p className="text-sm leading-relaxed">
                    El asma escolar refleja una respuesta de amenaza territorial donde el niño percibe 
                    el ambiente educativo como hostil. La dificultad respiratoria es una estrategia 
                    del organismo para forzar el regreso al territorio seguro (hogar).
                  </p>
                </div>
              </div>
            </div>

            {/* Crisis Aguda */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Manejo de Crisis Aguda</h3>
                  <p className="text-sm text-gray-500">Solo para emergencias (Máximo 10 minutos)</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-semibold text-red-800 mb-2">⚠️ IMPORTANTE:</p>
                  <p className="text-sm leading-relaxed text-red-700">
                    En crisis severas, aplicar biomagnetismo solo como apoyo complementario. 
                    Siempre tener disponible medicación de rescate y contacto médico.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Posición:</p>
                  <p className="text-sm">Niño sentado, ligeramente inclinado hacia adelante</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Técnica:</p>
                  <p className="text-sm">Presión muy suave, más intención que fuerza</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Respiración guiada:</p>
                  <p className="text-sm">"Inhala por la nariz, exhala por la boca"</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Enfoque:</p>
                  <p className="text-sm leading-relaxed">
                    El par a utilizar debe ser determinado por test muscular en el momento, 
                    no hay par fijo para crisis asmáticas.
                  </p>
                </div>
              </div>
            </div>

            {/* Prevención */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Prevención</h3>
                  <p className="text-sm text-gray-500">Sesión completa para tratamiento de fondo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 1:</p>
                  <p className="text-sm">Axila (-) → Axila (+) - 15 min (desactivar enojo territorial)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 2:</p>
                  <p className="text-sm">Bronquio (-) → Paratiroides (+) - 10 min (relajar musculatura)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 3:</p>
                  <p className="text-sm">Temporal Izq (-) → Suprarrenal (+) - 10 min (calmar respuesta estrés)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Microorganismos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Virus de la rabia</strong> (Axila - Axila): Enojo territorial no expresado, amenaza en el territorio.<br/>
                    <strong>Pseudomonas aeruginosa</strong> (Pulmón - Suprarrenal): Miedo extremo, ver la vida a través del miedo.
                  </p>
                </div>
              </div>
            </div>

            {/* Mantenimiento */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mantenimiento</h3>
                  <p className="text-sm text-gray-500">Protocolo de seguimiento a largo plazo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Frecuencia:</p>
                  <p className="text-sm">2 veces por semana durante 6 semanas</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par principal:</p>
                  <p className="text-sm">Bronquio (-) → Paratiroides (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Seguimiento:</p>
                  <p className="text-sm leading-relaxed">
                    Evaluar factores desencadenantes específicos. El asma escolar refleja una respuesta de 
                    amenaza territorial donde el niño percibe el ambiente educativo como hostil. El objetivo 
                    es transformar esta percepción y fortalecer la seguridad interna del niño en el entorno escolar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Bruxismo */}
        <CourseSection
          title="Bruxismo Escolar"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              "Tengo que morder/aguantar situaciones injustas". 
              El bruxismo escolar es la manifestación física de la tensión por situaciones que el niño debe "aguantar" sin poder expresar su frustración.
            </p>
          </div>

          <div className="space-y-8">
            {/* Evaluación Específica */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Evaluación Específica</h3>
                  <p className="text-sm text-gray-500">Preguntas clave para el diagnóstico</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Patrón temporal:</p>
                  <p className="text-sm leading-relaxed">
                    ¿Solo nocturno? ¿También diurno? ¿Cuándo comenzó el bruxismo? 
                    ¿Coincide con algún cambio en la escuela o en el hogar?
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Factores estresantes:</p>
                  <p className="text-sm leading-relaxed">
                    ¿Qué situaciones "debe aguantar" el niño? ¿Hay conflictos con maestros, 
                    compañeros o en el hogar? ¿Qué le genera más frustración en el entorno escolar?
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Expresión de enojo:</p>
                  <p className="text-sm leading-relaxed">
                    ¿Puede expresar frustración verbalmente? ¿Cómo maneja la ira? 
                    ¿Hay restricciones en casa o en la escuela para expresar emociones?
                  </p>
                </div>
              </div>
            </div>

            {/* Secuencia de Trabajo para Bruxismo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1">Secuencia de Trabajo para Bruxismo Escolar</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Protocolo de evaluación y tratamiento</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Ira reprimida, "no puedo expresar mi enojo"</li>
                        <li>• Frustración, "tengo que aguantar"</li>
                        <li>• Tensión mandibular, "aprieto los dientes"</li>
                        <li>• "No puedo decir lo que siento"</li>
                        <li>• Enojo respecto a situaciones injustas</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Situaciones injustas en el colegio (6-10 años)</li>
                        <li>• Conflictos con maestros (7-12 años)</li>
                        <li>• Bullying o acoso (8-12 años)</li>
                        <li>• Restricciones para expresar emociones (cualquier edad)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Mandíbula (-) → Mandíbula (+) - Bruxismo</li>
                        <li>• Ángulo (-) → Ángulo (+) - Ira reprimida</li>
                        <li>• Temporal Izq (-) → Temporal Der (+) - TDAH</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 20 minutos (aplicación nocturna)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocolo Integral */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Protocolo Integral</h3>
                  <p className="text-sm text-gray-500">Sesión nocturna (antes de dormir)</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 1:</p>
                  <p className="text-sm">Mandíbula (-) → Mandíbula (+) - 15 min</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 2:</p>
                  <p className="text-sm">Ángulo (-) → Ángulo (+) - 10 min</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Fase 3:</p>
                  <p className="text-sm">Temporal Izq (-) → Temporal Der (+) - 5 min</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Microorganismos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Neisseria gonorreae</strong> (Mandíbula - Mandíbula): Enojo respecto a la vida, fastidio, frustración.<br/>
                    <strong>Streptococcus fragilis</strong> (Ángulo - Ángulo): Ira reprimida, no poder expresar lo que se siente.
                  </p>
                </div>
              </div>
            </div>

            {/* Protocolo Emocional Complementario */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Protocolo Emocional Complementario</h3>
                  <p className="text-sm text-gray-500">Trabajo con las emociones subyacentes</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Plexo Solar (-) → Riñón Der (+):</p>
                  <p className="text-sm">Libera frustración contenida y fortalece la seguridad interna</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Suprarrenal (-) → Suprarrenal (+):</p>
                  <p className="text-sm">Reduce tensión general y regula la respuesta al estrés</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    El bruxismo es la manifestación física de agresión reprimida, frustración no expresada 
                    y tensión por situaciones que "hay que aguantar". Este protocolo complementario trabaja 
                    directamente con las emociones subyacentes para liberar la tensión acumulada y permitir 
                    una expresión más saludable de las frustraciones del niño.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Otras Patologías */}
        <CourseSection
          title="Otras Patologías del Entorno Escolar"
          icon={<Users className="w-8 h-8 text-slate-500" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Ansiedad Escolar
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Relacionada con conflictos de rendimiento y competencia, se manifiesta como preocupación excesiva, evitación escolar y síntomas físicos de ansiedad.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Preocupación excesiva, "no puedo con la presión"</li>
                        <li>• Miedo al fracaso, "tengo que ser perfecto"</li>
                        <li>• Tensión, "no puedo relajarme"</li>
                        <li>• "No soy lo suficientemente bueno"</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Presión por rendimiento (7-10 años)</li>
                        <li>• Comparaciones con otros niños (6-12 años)</li>
                        <li>• Exámenes o evaluaciones (8-12 años)</li>
                        <li>• Expectativas familiares (cualquier edad)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Suprarrenales (-) → Suprarrenales (+) - Regulación estrés</li>
                        <li>• Estómago (-) → Suprarrenales (+) - Gastritis/pánico</li>
                        <li>• Plexo Solar (-) → Riñón Der (+) - Seguridad emocional</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 15-20 minutos según el par específico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Depresión Infantil
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <Brain className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Asociada con conflictos de aceptación e identidad, se caracteriza por tristeza persistente, pérdida de interés y cambios en el comportamiento escolar.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Tristeza profunda, "no valgo nada"</li>
                        <li>• Desconexión, "no me importa nada"</li>
                        <li>• Vacío, "no siento nada"</li>
                        <li>• "No pertenezco aquí"</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Rechazo social (8-12 años)</li>
                        <li>• Pérdida de figura importante (cualquier edad)</li>
                        <li>• Fracaso escolar (7-12 años)</li>
                        <li>• Cambios familiares (cualquier edad)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Timo (-) → Timo (+) - Sistema inmune emocional</li>
                        <li>• Timo (-) → Suprarrenal (+) - Autoestima</li>
                        <li>• Plexo Solar (-) → Riñón Der (+) - Seguridad emocional</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 20-25 minutos (proceso más largo)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Trastornos del Sueño
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <Activity className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Relacionados con conflictos de autoridad y creatividad, incluyen insomnio, pesadillas frecuentes y somnolencia diurna que afectan el rendimiento.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• "No puedo relajarme", tensión constante</li>
                        <li>• Miedo nocturno, "tengo pesadillas"</li>
                        <li>• "No puedo dormir", insomnio</li>
                        <li>• "Estoy cansado pero no puedo descansar"</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Conflictos de autoridad (6-10 años)</li>
                        <li>• Situaciones traumáticas (cualquier edad)</li>
                        <li>• Cambios en rutina familiar (cualquier edad)</li>
                        <li>• Presión escolar (7-12 años)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Hipófisis (-) → Hipófisis (+) - Regulación endocrina</li>
                        <li>• Suprarrenales (-) → Suprarrenales (+) - Regulación estrés</li>
                        <li>• Cervicales (-) → Sacro (+) - Regulación autonómica</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 20 minutos (aplicación nocturna)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-tight">
                Trastornos Alimentarios
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Asociados con conflictos de aceptación y competencia, incluyen pérdida de apetito, cambios en los hábitos alimentarios y problemas de crecimiento.</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Secuencia de Trabajo:</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="space-y-3 text-sm">
                      <p><strong>1. Buscar la sensación:</strong> Test muscular para identificar la sensación predominante</p>
                      <p className="text-xs text-gray-500 ml-4">Usar las sensaciones del módulo en el apartado de sensaciones</p>
                      <ul className="ml-4 space-y-1">
                        <li>• "No tengo hambre", pérdida de apetito</li>
                        <li>• "No me gusta la comida", rechazo alimentario</li>
                        <li>• "No soy lo suficientemente bueno", baja autoestima</li>
                        <li>• "No pertenezco", desconexión</li>
                      </ul>
                      
                      <p><strong>2. Buscar el instante:</strong> Test para ubicar la edad en la que se generó el conflicto</p>
                      <p className="text-xs text-gray-500 ml-4">Identificar la edad específica del conflicto</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Comparaciones con otros niños (6-10 años)</li>
                        <li>• Presión por rendimiento (7-12 años)</li>
                        <li>• Rechazo social (8-12 años)</li>
                        <li>• Cambios familiares (cualquier edad)</li>
                      </ul>
                      
                      <p><strong>3. Test para el par:</strong> Seleccionar de los 50 pares del módulo</p>
                      <p className="text-xs text-gray-500 ml-4">Usar la lista de 50 pares optimizados para escolares</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Estómago (-) → Estómago (+) - Somatizaciones</li>
                        <li>• Duodeno (-) → Duodeno (+) - Colon irritable</li>
                        <li>• Timo (-) → Suprarrenal (+) - Autoestima</li>
                      </ul>
                      
                      <p><strong>4. Colocar los imanes:</strong> Aplicar los imanes de los pares seleccionados</p>
                      <p className="text-xs text-gray-500 ml-4">Tiempo: 15-20 minutos según el par específico</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para las Técnicas de Rastreo?
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que conoces las patologías comunes, es momento de aprender 
            las técnicas de rastreo biomagnético específicas para el entorno escolar.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block2;