import React from 'react';
import CourseSection from '../../CourseSection';
import { UserCheck, AlertTriangle, Heart, Target, ArrowRight, CheckCircle, Activity, Shield, Zap, Users } from 'lucide-react';

const Module3Block6: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <UserCheck className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Casos Clínicos y Protocolos de Emergencia
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            Aplicación Práctica del Biomagnetismo Escolar en Situaciones Reales
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción */}
        <CourseSection
          title="Introducción a los Casos Clínicos y Protocolos de Emergencia"
          icon={<UserCheck className="w-8 h-8 text-slate-500" />}
        >
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Aplicación Práctica del Biomagnetismo Escolar
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Los casos clínicos reales nos permiten entender cómo aplicar el biomagnetismo 
                en situaciones concretas del entorno escolar. Cada caso presenta desafíos únicos 
                que requieren un abordaje personalizado y protocolos específicos.
              </p>
              <p>
                <strong>Los protocolos de emergencia</strong> son fundamentales para manejar 
                situaciones críticas que pueden surgir en el entorno escolar, donde la 
                intervención inmediata puede marcar la diferencia en el bienestar del estudiante.
              </p>
              <p>
                <strong>La coordinación con el equipo educativo</strong> es esencial para 
                asegurar un seguimiento integral y la implementación de estrategias de apoyo 
                que complementen el tratamiento biomagnético.
              </p>
            </div>
          </div>
        </CourseSection>

        {/* Casos Clínicos Comunes */}
        <CourseSection
          title="Casos Clínicos Comunes en el Entorno Escolar"
          icon={<UserCheck className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los casos clínicos reales nos permiten entender cómo aplicar el biomagnetismo 
              en situaciones concretas del entorno escolar. Cada caso presenta desafíos únicos 
              que requieren un abordaje personalizado y protocolos específicos.
            </p>
          </div>

          <div className="space-y-8">
            {/* Caso 1: TDAH con Ansiedad */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <UserCheck className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Caso 1: TDAH con Ansiedad</h3>
                  <p className="text-sm text-gray-500">Estudiante de 8 años - Dificultades de concentración y ansiedad</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Presentación del caso:</p>
                  <p className="text-sm leading-relaxed">
                    Estudiante de 8 años con dificultades de concentración, hiperactividad, impulsividad 
                    y ansiedad por el rendimiento académico. Presentaba problemas de comportamiento 
                    en el aula, dificultades para seguir instrucciones y episodios de ansiedad durante 
                    exámenes y presentaciones.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación biomagnética:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Pares desequilibrados:</strong> Temporal Izq (-) → Temporal Der (+), Plexo Solar (-) → Suprarrenal (+)<br/>
                    <strong>Microorganismos:</strong> Virus del polioma, Helicobacter pylori<br/>
                    <strong>Sistemas afectados:</strong> Nervioso, endocrino, digestivo
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de tratamiento:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Trabajo en pares principales (Temporal, Plexo Solar, Suprarrenal)<br/>
                    <strong>Fase 2:</strong> Protocolo específico para TDAH (Frontal, Occipital, Timo)<br/>
                    <strong>Fase 3:</strong> Protocolo de ansiedad (Corazón, Pulmón, Riñón)<br/>
                    <strong>Fase 4:</strong> Protocolo de microorganismos (Virus del polioma, H. pylori)
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Resultados obtenidos:</p>
                  <p className="text-sm leading-relaxed">
                    Mejora significativa en la concentración, reducción de la hiperactividad, 
                    disminución de la ansiedad, mejor rendimiento académico y mejora en las 
                    relaciones sociales. El estudiante pudo seguir las clases sin interrupciones 
                    y participar activamente en las actividades escolares.
                  </p>
                </div>
              </div>
            </div>

            {/* Caso 2: Asma Inducida por Estrés */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Caso 2: Asma Inducida por Estrés</h3>
                  <p className="text-sm text-gray-500">Niña de 10 años - Episodios de asma durante exámenes</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Presentación del caso:</p>
                  <p className="text-sm leading-relaxed">
                    Niña de 10 años con episodios de asma que se desencadenaban durante exámenes, 
                    presentaciones orales y situaciones de estrés académico. Presentaba dificultad 
                    respiratoria, sibilancias, tos seca y ansiedad durante los episodios.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación biomagnética:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Pares desequilibrados:</strong> Pulmón (-) → Suprarrenal (+), Corazón (-) → Corazón (+)<br/>
                    <strong>Microorganismos:</strong> Virus de la rabia (Axila - Axila), Pseudomonas aeruginosa<br/>
                    <strong>Sistemas afectados:</strong> Respiratorio, cardiovascular, nervioso
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de tratamiento:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Protocolo de crisis asmática (Pulmón, Suprarrenal, Corazón)<br/>
                    <strong>Fase 2:</strong> Protocolo de prevención (Axila, Timo, Plexo Solar)<br/>
                    <strong>Fase 3:</strong> Protocolo de mantenimiento (Sistema inmune, endocrino)<br/>
                    <strong>Fase 4:</strong> Técnicas de relajación y respiración
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Resultados obtenidos:</p>
                  <p className="text-sm leading-relaxed">
                    Reducción significativa de episodios de asma, mejor control del estrés, 
                    disminución de la ansiedad durante exámenes, mejora en la capacidad 
                    respiratoria y mayor confianza en situaciones académicas estresantes.
                  </p>
                </div>
              </div>
            </div>

            {/* Caso 3: Bruxismo Nocturno */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Caso 3: Bruxismo Nocturno</h3>
                  <p className="text-sm text-gray-500">Estudiante de 9 años - Bruxismo severo relacionado con estrés</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Presentación del caso:</p>
                  <p className="text-sm leading-relaxed">
                    Estudiante de 9 años con bruxismo severo durante el sueño, relacionado con 
                    estrés escolar y conflictos familiares. Presentaba desgaste dental, dolor 
                    mandibular, dolores de cabeza y problemas de sueño.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación biomagnética:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Pares desequilibrados:</strong> Mandíbula (-) → Mandíbula (+), Ángulo (-) → Ángulo (+)<br/>
                    <strong>Microorganismos:</strong> Neisseria gonorreae, Streptococcus fragilis<br/>
                    <strong>Sistemas afectados:</strong> Muscular, nervioso, digestivo
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de tratamiento:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Protocolo de bruxismo (Mandíbula, Ángulo, TMJ)<br/>
                    <strong>Fase 2:</strong> Protocolo de estrés (Suprarrenal, Plexo Solar, Timo)<br/>
                    <strong>Fase 3:</strong> Protocolo de microorganismos (Neisseria, Streptococcus)<br/>
                    <strong>Fase 4:</strong> Técnicas de relajación y manejo del estrés
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Resultados obtenidos:</p>
                  <p className="text-sm leading-relaxed">
                    Reducción significativa del bruxismo, disminución del dolor mandibular, 
                    mejora en la calidad del sueño, reducción del estrés y mejor rendimiento 
                    académico. El estudiante pudo dormir mejor y concentrarse más en clase.
                  </p>
                </div>
              </div>
            </div>

            {/* Caso 4: Depresión Infantil */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Caso 4: Depresión Infantil</h3>
                  <p className="text-sm text-gray-500">Niño de 11 años - Depresión, aislamiento y bajo rendimiento</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Presentación del caso:</p>
                  <p className="text-sm leading-relaxed">
                    Niño de 11 años con síntomas de depresión, aislamiento social, bajo rendimiento 
                    académico, falta de motivación y episodios de tristeza. Presentaba problemas 
                    de autoestima y dificultades para relacionarse con otros niños.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación biomagnética:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Pares desequilibrados:</strong> Timo (-) → Timo (+), Corazón (-) → Corazón (+)<br/>
                    <strong>Microorganismos:</strong> Streptococcus pneumoniae, Candida albicans<br/>
                    <strong>Sistemas afectados:</strong> Inmune, endocrino, nervioso
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo de tratamiento:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Fase 1:</strong> Protocolo de depresión (Timo, Corazón, Plexo Solar)<br/>
                    <strong>Fase 2:</strong> Protocolo de autoestima (Suprarrenal, Tiroides, Hipófisis)<br/>
                    <strong>Fase 3:</strong> Protocolo de microorganismos (Streptococcus, Candida)<br/>
                    <strong>Fase 4:</strong> Técnicas de apoyo emocional y social
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Resultados obtenidos:</p>
                  <p className="text-sm leading-relaxed">
                    Mejora significativa en el estado de ánimo, aumento de la autoestima, 
                    mejor rendimiento académico, mejora en las relaciones sociales y mayor 
                    participación en actividades escolares. El niño recuperó su motivación 
                    y entusiasmo por aprender.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Protocolos de Emergencia */}
        <CourseSection
          title="Protocolos de Emergencia Biomagnética"
          icon={<AlertTriangle className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los protocolos de emergencia son fundamentales para manejar situaciones críticas 
              que pueden surgir en el entorno escolar. La intervención inmediata puede marcar 
              la diferencia en el bienestar del estudiante y prevenir complicaciones mayores.
            </p>
          </div>

          <div className="space-y-8">
            {/* Crisis de Ansiedad */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Crisis de Ansiedad</h3>
                  <p className="text-sm text-gray-500">Protocolo inmediato para crisis de ansiedad</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Síntomas de crisis:</p>
                  <p className="text-sm leading-relaxed">
                    Taquicardia, sudoración, temblores, dificultad para respirar, sensación de 
                    ahogo, náuseas, mareos, miedo intenso, sensación de pérdida de control.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo inmediato:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Paso 1:</strong> Aplicar imanes en Plexo Solar (-) → Suprarrenal (+)<br/>
                    <strong>Paso 2:</strong> Trabajar Corazón (-) → Corazón (+) para estabilizar<br/>
                    <strong>Paso 3:</strong> Aplicar Pulmón (-) → Pulmón (+) para respiración<br/>
                    <strong>Paso 4:</strong> Técnicas de respiración 4-7-8
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnicas de apoyo:</p>
                  <p className="text-sm leading-relaxed">
                    Respiración diafragmática, técnicas de grounding (5-4-3-2-1), 
                    relajación muscular progresiva, visualización de lugar seguro.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Seguimiento:</p>
                  <p className="text-sm leading-relaxed">
                    Evaluar respuesta en 5-10 minutos, documentar duración y intensidad, 
                    planificar seguimiento con protocolo preventivo.
                  </p>
                </div>
              </div>
            </div>

            {/* Crisis Asmática */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Crisis Asmática</h3>
                  <p className="text-sm text-gray-500">Protocolo para crisis respiratoria</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Síntomas de crisis:</p>
                  <p className="text-sm leading-relaxed">
                    Dificultad respiratoria, sibilancias, tos seca, opresión en el pecho, 
                    ansiedad, sudoración, uso de músculos accesorios para respirar.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo inmediato:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Paso 1:</strong> Aplicar Pulmón (-) → Suprarrenal (+) para broncodilatación<br/>
                    <strong>Paso 2:</strong> Trabajar Corazón (-) → Corazón (+) para estabilizar<br/>
                    <strong>Paso 3:</strong> Aplicar Axila (-) → Axila (+) para virus de la rabia<br/>
                    <strong>Paso 4:</strong> Técnicas de respiración controlada
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnicas de apoyo:</p>
                  <p className="text-sm leading-relaxed">
                    Respiración de labios fruncidos, posición de recuperación, 
                    técnicas de relajación, masaje en puntos de acupresión.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Seguimiento:</p>
                  <p className="text-sm leading-relaxed">
                    Monitorear función respiratoria, evaluar respuesta al tratamiento, 
                    coordinar con servicios médicos si es necesario.
                  </p>
                </div>
              </div>
            </div>

            {/* Crisis Emocional */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Crisis Emocional</h3>
                  <p className="text-sm text-gray-500">Protocolo para crisis emocional severa</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Síntomas de crisis:</p>
                  <p className="text-sm leading-relaxed">
                    Llanto incontrolable, agresividad, retraimiento extremo, autolesiones, 
                    pensamientos suicidas, desregulación emocional severa.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo inmediato:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Paso 1:</strong> Aplicar Timo (-) → Timo (+) para estabilizar emociones<br/>
                    <strong>Paso 2:</strong> Trabajar Corazón (-) → Corazón (+) para calma<br/>
                    <strong>Paso 3:</strong> Aplicar Plexo Solar (-) → Plexo Solar (+) para centro<br/>
                    <strong>Paso 4:</strong> Técnicas de grounding y contención
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnicas de apoyo:</p>
                  <p className="text-sm leading-relaxed">
                    Técnicas de grounding (5-4-3-2-1), respiración consciente, 
                    técnicas de contención emocional, apoyo psicológico inmediato.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Seguimiento:</p>
                  <p className="text-sm leading-relaxed">
                    Evaluar estabilidad emocional, coordinar con psicólogo escolar, 
                    implementar protocolo de seguimiento emocional.
                  </p>
                </div>
              </div>
            </div>

            {/* Crisis de Hiperactividad */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Activity className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Crisis de Hiperactividad</h3>
                  <p className="text-sm text-gray-500">Protocolo para crisis de hiperactividad severa</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Síntomas de crisis:</p>
                  <p className="text-sm leading-relaxed">
                    Hiperactividad extrema, impulsividad severa, agresividad, 
                    incapacidad para mantenerse quieto, comportamiento disruptivo.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Protocolo inmediato:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Paso 1:</strong> Aplicar Temporal Izq (-) → Temporal Der (+) para concentración<br/>
                    <strong>Paso 2:</strong> Trabajar Frontal (-) → Occipital (+) para calma<br/>
                    <strong>Paso 3:</strong> Aplicar Suprarrenal (-) → Suprarrenal (+) para regulación<br/>
                    <strong>Paso 4:</strong> Técnicas de calma y relajación
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnicas de apoyo:</p>
                  <p className="text-sm leading-relaxed">
                    Técnicas de respiración profunda, relajación muscular progresiva, 
                    actividades de descarga física controlada, técnicas de mindfulness.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Seguimiento:</p>
                  <p className="text-sm leading-relaxed">
                    Evaluar nivel de actividad, implementar estrategias de regulación, 
                    coordinar con equipo educativo para adaptaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Técnicas de Intervención */}
        <CourseSection
          title="Técnicas de Intervención Inmediata"
          icon={<Zap className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Las técnicas de intervención inmediata son herramientas esenciales para estabilizar 
              al estudiante durante crisis y situaciones de emergencia. Estas técnicas complementan 
              el trabajo biomagnético y pueden aplicarse de forma independiente cuando sea necesario.
            </p>
          </div>

          <div className="space-y-8">
            {/* Técnicas de Respiración */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Zap className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Técnicas de Respiración</h3>
                  <p className="text-sm text-gray-500">Herramientas para calmar el sistema nervioso</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Respiración 4-7-8:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Inhalar por 4 segundos, mantener por 7 segundos, exhalar por 8 segundos<br/>
                    <strong>Indicación:</strong> Crisis de ansiedad, hiperactividad, estrés agudo<br/>
                    <strong>Beneficio:</strong> Activa el sistema nervioso parasimpático, reduce cortisol
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Respiración diafragmática:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Respiración profunda usando el diafragma, manos en el abdomen<br/>
                    <strong>Indicación:</strong> Crisis asmática, ansiedad, problemas respiratorios<br/>
                    <strong>Beneficio:</strong> Mejora oxigenación, reduce tensión muscular
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Respiración de labios fruncidos:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Inhalar por la nariz, exhalar por la boca con labios fruncidos<br/>
                    <strong>Indicación:</strong> Crisis asmática, dificultad respiratoria<br/>
                    <strong>Beneficio:</strong> Mejora intercambio gaseoso, reduce sibilancias
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Respiración consciente:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Atención plena en la respiración, contar inhalaciones y exhalaciones<br/>
                    <strong>Indicación:</strong> Crisis emocional, hiperactividad, problemas de concentración<br/>
                    <strong>Beneficio:</strong> Mejora concentración, reduce estrés, aumenta autocontrol
                  </p>
                </div>
              </div>
            </div>

            {/* Técnicas de Relajación */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Técnicas de Relajación</h3>
                  <p className="text-sm text-gray-500">Métodos para reducir tensión y estrés</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Relajación muscular progresiva:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Tensar y relajar grupos musculares de forma secuencial<br/>
                    <strong>Indicación:</strong> Bruxismo, tensión muscular, ansiedad, estrés<br/>
                    <strong>Beneficio:</strong> Reduce tensión física, mejora conciencia corporal
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Visualización guiada:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Imaginar un lugar seguro y tranquilo con todos los sentidos<br/>
                    <strong>Indicación:</strong> Crisis emocional, ansiedad, depresión, trauma<br/>
                    <strong>Beneficio:</strong> Reduce estrés, mejora estado de ánimo, aumenta sensación de seguridad
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Mindfulness adaptado:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Atención plena en el presente, observación sin juicio<br/>
                    <strong>Indicación:</strong> TDAH, problemas de concentración, impulsividad<br/>
                    <strong>Beneficio:</strong> Mejora atención, reduce impulsividad, aumenta autocontrol
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica de la mariposa:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Cruzar brazos sobre el pecho y alternar golpes suaves<br/>
                    <strong>Indicación:</strong> Trauma, crisis emocional, ansiedad severa<br/>
                    <strong>Beneficio:</strong> Regula sistema nervioso, reduce activación emocional
                  </p>
                </div>
              </div>
            </div>

            {/* Técnicas de Grounding */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Técnicas de Grounding</h3>
                  <p className="text-sm text-gray-500">Métodos para estabilizar y conectar con el presente</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica 5-4-3-2-1:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Identificar 5 cosas que ves, 4 que tocas, 3 que escuchas, 2 que hueles, 1 que saboreas<br/>
                    <strong>Indicación:</strong> Crisis de ansiedad, disociación, trauma<br/>
                    <strong>Beneficio:</strong> Conecta con el presente, reduce disociación, mejora estabilidad
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Grounding físico:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Sentir los pies en el suelo, peso del cuerpo, contacto con superficies<br/>
                    <strong>Indicación:</strong> Crisis emocional, hiperactividad, ansiedad<br/>
                    <strong>Beneficio:</strong> Aumenta sensación de estabilidad, reduce flotación
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Actividades sensoriales:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Usar objetos con diferentes texturas, temperaturas, sonidos<br/>
                    <strong>Indicación:</strong> TDAH, problemas de concentración, crisis sensorial<br/>
                    <strong>Beneficio:</strong> Regula sistema nervioso, mejora concentración, reduce sobrecarga
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnica del anclaje:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Técnica:</strong> Identificar un objeto o lugar que represente seguridad y estabilidad<br/>
                    <strong>Indicación:</strong> Crisis emocional, trauma, ansiedad severa<br/>
                    <strong>Beneficio:</strong> Proporciona sensación de seguridad, reduce ansiedad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Seguimiento Post-Intervención */}
        <CourseSection
          title="Seguimiento Post-Intervención"
          icon={<CheckCircle className="w-8 h-8 text-slate-500" />}
        >
          <div className="mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              El seguimiento post-intervención es fundamental para asegurar la estabilidad del estudiante 
              y prevenir futuras crisis. Un seguimiento adecuado incluye evaluación inmediata, planificación 
              a largo plazo y coordinación con el equipo educativo.
            </p>
          </div>

          <div className="space-y-8">
            {/* Evaluación Inmediata */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <CheckCircle className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Evaluación Inmediata</h3>
                  <p className="text-sm text-gray-500">Evaluación de la respuesta a la intervención</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Evaluación de síntomas:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Física:</strong> Respiración, frecuencia cardíaca, tensión muscular, dolor<br/>
                    <strong>Emocional:</strong> Estado de ánimo, nivel de ansiedad, estabilidad emocional<br/>
                    <strong>Conductual:</strong> Nivel de actividad, capacidad de concentración, interacción social
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Documentación:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Registro de crisis:</strong> Duración, intensidad, síntomas presentes, respuesta al tratamiento<br/>
                    <strong>Cambios observados:</strong> Mejoras, empeoramientos, nuevos síntomas<br/>
                    <strong>Tiempo de respuesta:</strong> Cuánto tardó en responder a la intervención
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Planificación inmediata:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Necesidades inmediatas:</strong> Continuar tratamiento, derivar a especialista, hospitalización<br/>
                    <strong>Apoyo requerido:</strong> Técnicas de autocuidado, medicación, terapia psicológica<br/>
                    <strong>Coordinación:</strong> Contactar familia, equipo educativo, servicios médicos
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Indicadores de éxito:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Estabilización:</strong> Reducción de síntomas, mejora en función respiratoria, calma emocional<br/>
                    <strong>Funcionamiento:</strong> Capacidad de comunicarse, seguir instrucciones, participar en actividades<br/>
                    <strong>Seguridad:</strong> Ausencia de riesgo de autolesión, estabilidad emocional
                  </p>
                </div>
              </div>
            </div>

            {/* Plan de Seguimiento */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Target className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Plan de Seguimiento</h3>
                  <p className="text-sm text-gray-500">Planificación a largo plazo para el estudiante</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sesiones regulares de biomagnetismo:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Frecuencia:</strong> Sesiones semanales durante el primer mes, luego cada 15 días<br/>
                    <strong>Duración:</strong> 60-90 minutos por sesión, adaptado a la edad del niño<br/>
                    <strong>Objetivos:</strong> Mantener equilibrio sistémico, prevenir recaídas, fortalecer sistemas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Técnicas de autocuidado:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Respiración:</strong> Enseñar técnicas de respiración para uso independiente<br/>
                    <strong>Relajación:</strong> Práctica de técnicas de relajación y mindfulness<br/>
                    <strong>Grounding:</strong> Técnicas de estabilización para crisis futuras
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Coordinación con equipo educativo:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Maestros:</strong> Estrategias de apoyo en el aula, adaptaciones curriculares<br/>
                    <strong>Psicólogos:</strong> Apoyo emocional, terapia individual o grupal<br/>
                    <strong>Familia:</strong> Educación sobre el trastorno, técnicas de apoyo en casa
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Monitoreo continuo:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Evaluación semanal:</strong> Progreso, nuevos síntomas, efectividad del tratamiento<br/>
                    <strong>Registro de crisis:</strong> Frecuencia, intensidad, desencadenantes<br/>
                    <strong>Ajustes del plan:</strong> Modificaciones según la respuesta del estudiante
                  </p>
                </div>
              </div>
            </div>

            {/* Coordinación con el Equipo Educativo */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Coordinación con el Equipo Educativo</h3>
                  <p className="text-sm text-gray-500">Trabajo colaborativo para el bienestar del estudiante</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Comunicación con maestros:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Información sobre el trastorno:</strong> Síntomas, desencadenantes, estrategias de apoyo<br/>
                    <strong>Adaptaciones en el aula:</strong> Tiempos de descanso, actividades alternativas, métodos de evaluación<br/>
                    <strong>Señales de alerta:</strong> Cómo identificar crisis inminentes, cuándo contactar especialistas
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Apoyo psicológico:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Psicólogo escolar:</strong> Evaluación psicológica, terapia individual, apoyo emocional<br/>
                    <strong>Terapia familiar:</strong> Apoyo a la familia, técnicas de manejo en casa<br/>
                    <strong>Grupos de apoyo:</strong> Conectarse con otros estudiantes con problemas similares
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Coordinación médica:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Pediatra:</strong> Evaluación médica, medicación si es necesaria, seguimiento de salud<br/>
                    <strong>Especialistas:</strong> Neurólogo, psiquiatra, otros especialistas según necesidades<br/>
                    <strong>Servicios de emergencia:</strong> Protocolos para crisis severas, contactos de emergencia
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Plan de crisis:</p>
                  <p className="text-sm leading-relaxed">
                    <strong>Protocolo de emergencia:</strong> Pasos a seguir en caso de crisis, contactos de emergencia<br/>
                    <strong>Estrategias de prevención:</strong> Identificar desencadenantes, implementar medidas preventivas<br/>
                    <strong>Apoyo continuo:</strong> Disponibilidad de especialistas, seguimiento regular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Próximos Pasos */}
        <div className="bg-gradient-to-r from-slate-100 to-gray-200 rounded-lg p-8 text-slate-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para los Microorganismos?
          </h2>
          <p className="text-slate-700 mb-6">
            Ahora que conoces los casos clínicos y protocolos de emergencia, es momento de aprender 
            sobre los microorganismos que afectan el entorno escolar.
          </p>
          <div className="flex justify-center">
            <ArrowRight className="w-6 h-6 text-slate-700 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module3Block6;