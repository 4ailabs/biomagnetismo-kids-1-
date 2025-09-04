import React from 'react';
import CourseSection from '../../CourseSection';
import { Heart, Activity, Brain, Target, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react';

const Module3Block2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-200 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-slate-200 rounded-full">
              <Heart className="w-12 h-12 text-slate-600" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Patologías Escolares Comunes
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto">
            TDAH, Asma, Bruxismo y Otras Condiciones que Afectan el Aprendizaje
          </p>
        </div>
      </div>

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
                <div>
                  <h3 className="text-xl font-bold text-gray-800">TDAH Inatento</h3>
                  <p className="text-sm text-gray-500">"Me desconecto para protegerme"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Temporal Izq (-) → Temporal Der (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Microorganismo:</p>
                  <p className="text-sm">Virus del polioma (trastornos del sueño, anorexia)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
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
                <div>
                  <h3 className="text-xl font-bold text-gray-800">TDAH Hiperactivo</h3>
                  <p className="text-sm text-gray-500">"Me muevo para liberar tensión y mantenerme alerta"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par biomagnético:</p>
                  <p className="text-sm">Temporal Der (-) → Temporal Der (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Microorganismo:</p>
                  <p className="text-sm">Bonilla (específico para niños hiperactivos)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
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
                <div>
                  <h3 className="text-xl font-bold text-gray-800">TDAH Mixto</h3>
                  <p className="text-sm text-gray-500">"Oscilo entre desconectarme y hiperactivarme según la amenaza"</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par principal:</p>
                  <p className="text-sm">Frontal (-) → Occipital (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par complementario:</p>
                  <p className="text-sm">Temporal Izq (-) → Temporal Der (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
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
              Protocolo de Evaluación TDAH
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
                <p className="font-semibold text-gray-800 mb-2">Secuencia de Rastreo:</p>
                <p className="text-sm leading-relaxed">
                  1. Temporal Izq (-) → buscar resonancia<br/>
                  2. Temporal Der (-) → buscar resonancia<br/>
                  3. Frontal (-) → buscar resonancia<br/>
                  4. Suprarrenal (-) → buscar resonancia<br/>
                  5. Timo (-) → buscar resonancia
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
            {/* Crisis Aguda */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Crisis Aguda</h3>
                  <p className="text-sm text-gray-500">Protocolo de emergencia (Máximo 10 minutos)</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Par inmediato:</p>
                  <p className="text-sm">Pulmón (-) → Suprarrenal (+)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Posición:</p>
                  <p className="text-sm">Niño sentado, ligeramente inclinado hacia adelante</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Descripción:</p>
                  <p className="text-sm leading-relaxed">
                    Para crisis respiratorias severas que aparecen exclusivamente en contexto escolar. 
                    El objetivo es estabilizar la respiración inmediatamente. Técnica: Presión muy suave, 
                    más intención que fuerza. Respiración guiada: "Inhala por la nariz, exhala por la boca".
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ansiedad Escolar
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Relacionada con conflictos de rendimiento y competencia, se manifiesta como preocupación excesiva, evitación escolar y síntomas físicos de ansiedad.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Depresión Infantil
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Brain className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Asociada con conflictos de aceptación e identidad, se caracteriza por tristeza persistente, pérdida de interés y cambios en el comportamiento escolar.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Trastornos del Sueño
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Activity className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Relacionados con conflictos de autoridad y creatividad, incluyen insomnio, pesadillas frecuentes y somnolencia diurna que afectan el rendimiento.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Trastornos Alimentarios
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p>Asociados con conflictos de aceptación y competencia, incluyen pérdida de apetito, cambios en los hábitos alimentarios y problemas de crecimiento.</p>
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