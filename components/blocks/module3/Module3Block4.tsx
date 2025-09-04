import React from 'react';
import CourseSection from '../../CourseSection';
import { MapPin, Target, ArrowRight, CheckCircle, Activity, Shield, Zap, Heart, Brain } from 'lucide-react';

const Module3Block4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <MapPin className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Evaluación y Mapeo de Sensaciones
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Herramientas de Evaluación Integral para el Biomagnetismo Escolar
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción a la Evaluación Integral Escolar"
          icon={<MapPin className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              La Evaluación como Herramienta de Comprensión Profunda
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                La evaluación en el contexto del biomagnetismo escolar no es solo un diagnóstico, 
                sino un proceso de comprensión profunda del niño en su totalidad. Cada herramienta 
                de evaluación nos permite acceder a diferentes capas de información sobre el estado 
                físico, emocional, energético y cognitivo del estudiante.
              </p>
              <p>
                <strong>El mapeo de sensaciones</strong> nos conecta con la sabiduría corporal del niño. 
                <strong>La evaluación energética</strong> nos revela desequilibrios que no son visibles 
                a simple vista. <strong>La observación sistemática</strong> nos muestra patrones de 
                comportamiento que indican conflictos específicos.
              </p>
              <p>
                La integración de todas estas herramientas de evaluación nos permite crear un mapa 
                completo del niño, no como un "paciente" sino como un ser único con necesidades 
                específicas que requieren un abordaje personalizado y respetuoso.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Evaluación Inicial */}
        <CourseSection
          title="Evaluación Inicial del Estudiante"
          icon={<Target className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La evaluación inicial es el fundamento de todo el proceso. No se trata solo de recopilar 
              información, sino de establecer una conexión profunda con el niño y comprender su mundo 
              desde su perspectiva.
            </p>
          </div>

          <div className="space-y-8">
            {/* Entrevista con Padres */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Entrevista con Padres</h3>
                  <p className="text-sm text-gray-500">Información fundamental del contexto familiar</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Preguntas clave:</p>
                  <p className="text-sm leading-relaxed">
                    ¿Cuándo comenzaron los síntomas? ¿Coincidió con algún evento familiar o escolar? 
                    ¿Cómo es el comportamiento del niño en casa vs. en la escuela? ¿Hay patrones 
                    estacionales o relacionados con actividades específicas?
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Historia del desarrollo:</p>
                  <p className="text-sm leading-relaxed">
                    Embarazo, parto, primeros años de vida, hitos del desarrollo, enfermedades 
                    importantes, traumas o cambios significativos en la familia.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Contexto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    ¿Cómo ha sido la adaptación a la escuela? ¿Hay maestros o materias específicas 
                    que generan más estrés? ¿Cómo son las relaciones con compañeros?
                  </p>
                </div>
              </div>
            </div>

            {/* Entrevista con Maestros */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Entrevista con Maestros</h3>
                  <p className="text-sm text-gray-500">Perspectiva del entorno educativo</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Comportamiento en clase:</p>
                  <p className="text-sm leading-relaxed">
                    ¿Cómo se comporta el niño en diferentes materias? ¿Hay patrones de comportamiento 
                    específicos? ¿Cómo interactúa con compañeros y maestros?
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Rendimiento académico:</p>
                  <p className="text-sm leading-relaxed">
                    ¿En qué materias tiene más dificultades? ¿Hay fluctuaciones en el rendimiento? 
                    ¿Cómo responde a diferentes métodos de enseñanza?
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Factores desencadenantes:</p>
                  <p className="text-sm leading-relaxed">
                    ¿Qué situaciones o eventos parecen desencadenar comportamientos problemáticos? 
                    ¿Hay momentos del día o actividades específicas que generan más estrés?
                  </p>
                </div>
              </div>
            </div>

            {/* Evaluación Energética Inicial */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Evaluación Energética Inicial</h3>
                  <p className="text-sm text-gray-500">Rastreo básico del campo energético</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Pares principales:</p>
                  <p className="text-sm leading-relaxed">
                    Temporal Izq (-) → Temporal Der (+), Frontal (-) → Occipital (+), 
                    Timo (-) → Timo (+), Suprarrenal (-) → Suprarrenal (+)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sistemas prioritarios:</p>
                  <p className="text-sm leading-relaxed">
                    Sistema nervioso central, sistema endocrino, sistema inmune, sistema digestivo. 
                    Identificar cuáles presentan mayor desequilibrio.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Microorganismos asociados:</p>
                  <p className="text-sm leading-relaxed">
                    Rastrear virus, bacterias y parásitos que puedan estar afectando el equilibrio 
                    energético del niño y su capacidad de aprendizaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Mapeo de Sensaciones */}
        <CourseSection
          title="Mapeo de Sensaciones Corporales"
          icon={<MapPin className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El mapeo de sensaciones es una herramienta poderosa que nos permite acceder a la 
              sabiduría corporal del niño. Los niños son especialmente sensibles a sus sensaciones 
              y pueden reportar cambios sutiles que los adultos no perciben.
            </p>
          </div>

          <div className="space-y-8">
            {/* Sensaciones Físicas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sensaciones Físicas</h3>
                  <p className="text-sm text-gray-500">Mapeo corporal detallado</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de escaneo:</p>
                  <p className="text-sm leading-relaxed">
                    "Vamos a hacer un mapa de tu cuerpo. Cierra los ojos y dime qué sientes en cada parte. 
                    ¿Hay algún lugar que se siente diferente, caliente, frío, tenso, pesado o ligero?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sensaciones a identificar:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Calor:</strong> Inflamación, actividad excesiva<br/>
                    <strong>Frío:</strong> Debilidad, falta de energía<br/>
                    <strong>Tensión:</strong> Estrés, contracturas<br/>
                    <strong>Hormigueo:</strong> Circulación, activación nerviosa<br/>
                    <strong>Pesadez:</strong> Congestión, bloqueos<br/>
                    <strong>Ligereza:</strong> Equilibrio, bienestar
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Documentación:</p>
                  <p className="text-sm leading-relaxed">
                    Registrar todas las sensaciones reportadas en un diagrama corporal. 
                    Marcar intensidad (1-10) y características específicas de cada sensación.
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
                  <p className="text-sm text-gray-500">Mapeo emocional corporal</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de mapeo emocional:</p>
                  <p className="text-sm leading-relaxed">
                    "¿Dónde sientes la tristeza en tu cuerpo? ¿Y la alegría? ¿Y el enojo? 
                    ¿Hay algún lugar que se siente pesado, vacío, o que duele cuando estás triste?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Emociones y ubicaciones:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Tristeza:</strong> Pecho, corazón<br/>
                    <strong>Enojo:</strong> Hígado, estómago, mandíbula<br/>
                    <strong>Miedo:</strong> Riñones, vejiga, piernas<br/>
                    <strong>Alegría:</strong> Corazón, pecho, brazos<br/>
                    <strong>Ansiedad:</strong> Plexo solar, estómago<br/>
                    <strong>Frustración:</strong> Mandíbula, cuello, hombros
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

            {/* Sensaciones Energéticas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sensaciones Energéticas</h3>
                  <p className="text-sm text-gray-500">Mapeo del campo energético</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de visualización energética:</p>
                  <p className="text-sm leading-relaxed">
                    "Imagina que tienes una luz dorada que recorre tu cuerpo desde la cabeza hasta los pies. 
                    ¿Dónde se detiene la luz? ¿Dónde se siente más brillante o más tenue?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sensaciones energéticas:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Flujo suave:</strong> Equilibrio energético<br/>
                    <strong>Bloqueos:</strong> Sensación de "atasco"<br/>
                    <strong>Vibración:</strong> Activación energética<br/>
                    <strong>Vacío:</strong> Falta de energía<br/>
                    <strong>Calor energético:</strong> Activación excesiva<br/>
                    <strong>Frescor:</strong> Energía equilibrada
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Correlación con pares biomagnéticos:</p>
                  <p className="text-sm leading-relaxed">
                    Las sensaciones energéticas reportadas por el niño suelen correlacionar 
                    directamente con los pares biomagnéticos desequilibrados encontrados en el rastreo.
                  </p>
                </div>
              </div>
            </div>

            {/* Sensaciones Cognitivas */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Sensaciones Cognitivas</h3>
                  <p className="text-sm text-gray-500">Mapeo de la función mental</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de mapeo cognitivo:</p>
                  <p className="text-sm leading-relaxed">
                    "¿Cómo se siente tu cabeza cuando piensas? ¿Hay algún lugar que se siente pesado, 
                    confuso, o que duele cuando intentas concentrarte?"
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sensaciones cognitivas:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Claridad mental:</strong> Sensación de "luz" en la cabeza<br/>
                    <strong>Confusión:</strong> Sensación de "niebla" o "nubes"<br/>
                    <strong>Presión:</strong> Sensación de "peso" en la cabeza<br/>
                    <strong>Hormigueo:</strong> Activación nerviosa<br/>
                    <strong>Vacío:</strong> Falta de concentración<br/>
                    <strong>Calor:</strong> Sobrecarga mental
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Aplicación en el aprendizaje:</p>
                  <p className="text-sm leading-relaxed">
                    Identificar qué sensaciones cognitivas están afectando la capacidad de aprendizaje 
                    del niño y correlacionarlas con los desequilibrios biomagnéticos encontrados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Herramientas de Evaluación */}
        <CourseSection
          title="Herramientas de Evaluación Especializadas"
          icon={<Activity className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Las herramientas de evaluación especializadas nos permiten obtener información 
              objetiva y subjetiva sobre el estado del niño, complementando el rastreo biomagnético 
              con datos cuantificables y observables.
            </p>
          </div>

          <div className="space-y-8">
            {/* Escalas de Evaluación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Escalas de Evaluación</h3>
                  <p className="text-sm text-gray-500">Herramientas cuantificables para escolares</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Escala de Bienestar Escolar (1-10):</p>
                  <p className="text-sm leading-relaxed">
                    "¿Qué tan bien te sientes en la escuela hoy?" (1 = muy mal, 10 = muy bien). 
                    Evaluar diariamente para identificar patrones y cambios.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Escala de Energía Corporal (1-10):</p>
                  <p className="text-sm leading-relaxed">
                    "¿Qué tan energético te sientes hoy?" (1 = muy cansado, 10 = muy energético). 
                    Correlacionar con los tratamientos biomagnéticos aplicados.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Escala de Concentración (1-10):</p>
                  <p className="text-sm leading-relaxed">
                    "¿Qué tan fácil te resulta concentrarte hoy?" (1 = muy difícil, 10 = muy fácil). 
                    Evaluar antes y después de las sesiones de tratamiento.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Escala de Emociones (1-10):</p>
                  <p className="text-sm leading-relaxed">
                    Evaluar alegría, tristeza, enojo, miedo, ansiedad. "¿Qué tan alegre te sientes hoy?" 
                    (1 = muy triste, 10 = muy alegre). Repetir para cada emoción.
                  </p>
                </div>
              </div>
            </div>

            {/* Técnicas de Observación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Técnicas de Observación</h3>
                  <p className="text-sm text-gray-500">Observación sistemática del comportamiento</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Observación en el aula:</p>
                  <p className="text-sm leading-relaxed">
                    Postura, movimientos, nivel de atención, interacciones con compañeros, 
                    respuesta a instrucciones, participación en actividades.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Observación durante el recreo:</p>
                  <p className="text-sm leading-relaxed">
                    Nivel de actividad, interacciones sociales, preferencias de juego, 
                    comportamiento en grupo vs. individual, respuesta al ruido y movimiento.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Observación durante las comidas:</p>
                  <p className="text-sm leading-relaxed">
                    Apetito, preferencias alimentarias, comportamiento en la mesa, 
                    interacciones sociales durante la comida.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Registro de patrones:</p>
                  <p className="text-sm leading-relaxed">
                    Documentar horarios de mayor/menor energía, días de la semana con más dificultades, 
                    factores ambientales que afectan el comportamiento.
                  </p>
                </div>
              </div>
            </div>

            {/* Registro de Datos */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Registro de Datos</h3>
                  <p className="text-sm text-gray-500">Documentación sistemática del progreso</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Formulario de evaluación inicial:</p>
                  <p className="text-sm leading-relaxed">
                    Datos demográficos, historia clínica, evaluación energética inicial, 
                    mapeo de sensaciones, escalas de evaluación, observaciones del comportamiento.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Registro de sesiones:</p>
                  <p className="text-sm leading-relaxed">
                    Fecha, duración, pares biomagnéticos trabajados, sensaciones reportadas, 
                    cambios observados, escalas de evaluación post-sesión.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Seguimiento semanal:</p>
                  <p className="text-sm leading-relaxed">
                    Evaluación de progreso, cambios en el comportamiento escolar, 
                    reportes de maestros y padres, ajustes al plan de tratamiento.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación de resultados:</p>
                  <p className="text-sm leading-relaxed">
                    Comparación de escalas iniciales vs. finales, análisis de patrones de mejora, 
                    identificación de factores de éxito, recomendaciones para el futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Interpretación de Resultados */}
        <CourseSection
          title="Interpretación de Resultados"
          icon={<Shield className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              La interpretación de resultados es el arte de integrar toda la información recopilada 
              para crear un plan de tratamiento personalizado y efectivo. No se trata solo de 
              analizar datos, sino de comprender al niño como un ser único.
            </p>
          </div>

          <div className="space-y-8">
            {/* Análisis Integral */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Análisis Integral</h3>
                  <p className="text-sm text-gray-500">Integración de toda la información recopilada</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Correlación de datos:</p>
                  <p className="text-sm leading-relaxed">
                    Relacionar los pares biomagnéticos desequilibrados con las sensaciones reportadas, 
                    las escalas de evaluación y las observaciones del comportamiento. Buscar patrones 
                    consistentes que indiquen conflictos específicos.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Identificación de prioridades:</p>
                  <p className="text-sm leading-relaxed">
                    Determinar qué desequilibrios están afectando más significativamente el bienestar 
                    y rendimiento del niño. Priorizar el tratamiento de los conflictos más impactantes.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Contexto escolar específico:</p>
                  <p className="text-sm leading-relaxed">
                    Analizar cómo los desequilibrios encontrados se manifiestan específicamente en 
                    el entorno escolar. Identificar factores ambientales que pueden estar exacerbando 
                    los conflictos.
                  </p>
                </div>
              </div>
            </div>

            {/* Plan de Tratamiento */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Plan de Tratamiento</h3>
                  <p className="text-sm text-gray-500">Protocolo personalizado basado en la evaluación</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo biomagnético específico:</p>
                  <p className="text-sm leading-relaxed">
                    Seleccionar los pares biomagnéticos más importantes para trabajar primero. 
                    Establecer una secuencia de tratamiento que respete la capacidad del niño 
                    y su respuesta a las sesiones.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Frecuencia de sesiones:</p>
                  <p className="text-sm leading-relaxed">
                    Determinar la frecuencia óptima basada en la edad del niño, la severidad 
                    de los desequilibrios y la respuesta inicial. Ajustar según la evolución.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Estrategias de apoyo:</p>
                  <p className="text-sm leading-relaxed">
                    Incluir recomendaciones para el hogar y la escuela: cambios en la dieta, 
                    técnicas de relajación, modificaciones ambientales, estrategias de comunicación.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Objetivos específicos:</p>
                  <p className="text-sm leading-relaxed">
                    Establecer objetivos claros y medibles para el tratamiento. Incluir escalas 
                    de evaluación para monitorear el progreso y ajustar el plan según sea necesario.
                  </p>
                </div>
              </div>
            </div>

            {/* Consideraciones Especiales */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Brain className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Consideraciones Especiales</h3>
                  <p className="text-sm text-gray-500">Factores únicos de cada niño</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Edad y desarrollo:</p>
                  <p className="text-sm leading-relaxed">
                    Adaptar el lenguaje, las técnicas y las expectativas según la edad del niño. 
                    Los niños más pequeños requieren más juego y visualización, mientras que los 
                    mayores pueden participar más activamente en su tratamiento.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Contexto familiar:</p>
                  <p className="text-sm leading-relaxed">
                    Considerar el apoyo familiar disponible, la comprensión de los padres sobre 
                    el biomagnetismo, y la capacidad de la familia para implementar recomendaciones.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Contexto escolar:</p>
                  <p className="text-sm leading-relaxed">
                    Evaluar la receptividad de la escuela a las recomendaciones, la disponibilidad 
                    de recursos de apoyo, y la capacidad de los maestros para implementar estrategias 
                    de ayuda.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Necesidades individuales:</p>
                  <p className="text-sm leading-relaxed">
                    Reconocer que cada niño es único y puede requerir adaptaciones específicas 
                    en el tratamiento. Mantener flexibilidad y estar dispuesto a ajustar el 
                    enfoque según la respuesta del niño.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para el Enfoque Sistémico?
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que conoces las herramientas de evaluación, es momento de aprender 
            sobre el enfoque sistémico y la conflictología dental.
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