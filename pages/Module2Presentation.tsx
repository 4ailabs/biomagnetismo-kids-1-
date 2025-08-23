import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause 
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  content: string[];
  type: 'hero' | 'title' | 'content' | 'key-points' | 'summary' | 'image' | 'timeline' | 'comparison' | 'process';
}

const Module2Presentation: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [slideTransition, setSlideTransition] = useState(false);

  // Agregar estilos CSS para animaciones
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
      
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-slide-in-left {
        animation: slideInLeft 0.6s ease-out forwards;
      }
      
      .animate-slide-in-right {
        animation: slideInRight 0.6s ease-out forwards;
      }
      
      .animate-pulse-slow {
        animation: pulse 2s ease-in-out infinite;
      }
      
      .slide-transition {
        transition: all 0.5s ease-out;
      }
      
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }
      
      button:disabled:hover {
        transform: none !important;
        scale: 1 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const slides: Slide[] = [
    // SLIDE 1: BIENVENIDA AL MÓDULO 2
    {
      id: 1,
      title: "MÓDULO 2: PRIMERA INFANCIA",
      content: ["\"La Historia Continúa: Cuando el Cuerpo Encuentra su Voz\""],
      type: 'hero'
    },
    
    // SLIDE 2: OBJETIVO DEL MÓDULO 2
    {
      id: 2,
      title: "OBJETIVO DEL MÓDULO 2",
      content: [
        "Comprender conflictos biológicos gestacionales en primera infancia (3m-5a)",
        "Identificar los 8 conflictos fundamentales de esta etapa",
        "Aplicar técnicas biomagnéticas específicas por rango de edad",
        "Enfoque práctico y accesible para terapeutas"
      ],
      type: 'process'
    },
    
    // SLIDE 3: LOS 8 GRANDES CONFLICTOS DE LA INFANCIA
    {
      id: 3,
      title: "LOS 8 GRANDES CONFLICTOS DE LA INFANCIA",
      content: [
        "Separación & Abandono - Miedo a perder a quien más ama",
        "No Ser Escuchado - Señales ignoradas o malinterpretadas",
        "Territorio & Control - Pérdida de autonomía",
        "Amenaza de Supervivencia - Peligro vital real o imaginario",
        "No Soy Suficiente - No cumple expectativas"
      ],
      type: 'comparison'
    },
    
    // SLIDE 4: LOS 8 GRANDES CONFLICTOS (CONTINUACIÓN)
    {
      id: 4,
      title: "LOS 8 GRANDES CONFLICTOS (CONTINUACIÓN)",
      content: [
        "Caos Relacional - Inconsistencias extremas en el cuidado",
        "Pérdida de Base Segura - Cambios drásticos alteran su mundo",
        "Invasión de Límites - Espacio corporal o emocional violado",
        "Trauma de Separación - Ausencia prolongada genera miedo existencial",
        "No son simples 'problemas de conducta', sino conflictos biológicos profundos"
      ],
      type: 'timeline'
    },
    
    // SLIDE 5: POR QUÉ FUNCIONA EL BIOMAGNETISMO EN NIÑOS
    {
      id: 5,
      title: "POR QUÉ FUNCIONA EL BIOMAGNETISMO EN NIÑOS",
      content: [
        "Su cuerpo habla primero - Síntomas antes que palabras",
        "Respuesta inmediata - Más rápido que los adultos",
        "La energía no miente - Campo energético revela la verdad",
        "Sanación natural - Sistema inmune en desarrollo activo",
        "Máxima plasticidad - Cerebro como arcilla fresca"
      ],
      type: 'content'
    },
    
    // SLIDE 6: CONFLICTOS BIOLÓGICOS POSTNATALES
    {
      id: 6,
      title: "CONFLICTOS BIOLÓGICOS POSTNATALES",
      content: [
        "Separación del Cuidador Principal - Miedo existencial a la supervivencia",
        "Pérdida de Territorio - Cambios de casa, ciudad o país",
        "Amenaza de Abandono - Divorcio, muerte o ausencia prolongada",
        "Invasión de Límites - Abuso físico, emocional o sexual",
        "Pérdida de Control - Situaciones donde no puede decidir nada"
      ],
      type: 'comparison'
    },
    
    // SLIDE 7: SENSACIONES CLAVE DE LA INFANCIA
    {
      id: 7,
      title: "SENSACIONES CLAVE DE LA INFANCIA",
      content: [
        "Miedo - Sensación de peligro constante e inminente",
        "Abandono - Sentimiento de estar solo en el mundo",
        "Inseguridad - Falta de base sólida para desarrollarse",
        "Confusión - No entender qué está pasando a su alrededor",
        "Frustración - No poder expresar o conseguir lo que necesita"
      ],
      type: 'key-points'
    },
    
    // SLIDE 8: PARES BIOMAGNÉTICOS FUNDAMENTALES
    {
      id: 8,
      title: "PARES BIOMAGNÉTICOS FUNDAMENTALES",
      content: [
        "Timpanocentro - Timpanocentro (Separación y comunicación)",
        "Hipófisis - Hipófisis (Control y supervivencia)",
        "Tiroides - Tiroides (Expresión y autonomía)",
        "Corazón - Corazón (Amor y protección)",
        "Estómago - Estómago (Nutrición emocional)"
      ],
      type: 'content'
    },
    
    // SLIDE 9: PROTOCOLOS POR EDAD - 3-12 MESES
    {
      id: 9,
      title: "PROTOCOLOS POR EDAD - 3-12 MESES",
      content: [
        "Separación del cuidador - Timpanocentro + Corazón",
        "Cambios de rutina - Hipófisis + Estómago",
        "Miedo a extraños - Tiroides + Timpanocentro",
        "Problemas de sueño - Hipófisis + Corazón",
        "Llanto inconsolable - Corazón + Estómago"
      ],
      type: 'process'
    },
    
    // SLIDE 10: PROTOCOLOS POR EDAD - 1-2 AÑOS
    {
      id: 10,
      title: "PROTOCOLOS POR EDAD - 1-2 AÑOS",
      content: [
        "Berrinches y rabietas - Tiroides + Corazón",
        "Miedo a la separación - Timpanocentro + Hipófisis",
        "Problemas de alimentación - Estómago + Tiroides",
        "Agresividad - Corazón + Tiroides",
        "Regresión en el desarrollo - Hipófisis + Estómago"
      ],
      type: 'process'
    },
    
    // SLIDE 11: PROTOCOLOS POR EDAD - 2-3 AÑOS
    {
      id: 11,
      title: "PROTOCOLOS POR EDAD - 2-3 AÑOS",
      content: [
        "Control de esfínteres - Hipófisis + Estómago",
        "Límites y disciplina - Tiroides + Corazón",
        "Miedo a la oscuridad - Timpanocentro + Hipófisis",
        "Problemas de lenguaje - Timpanocentro + Tiroides",
        "Celos entre hermanos - Corazón + Estómago"
      ],
      type: 'process'
    },
    
    // SLIDE 12: PROTOCOLOS POR EDAD - 3-5 AÑOS
    {
      id: 12,
      title: "PROTOCOLOS POR EDAD - 3-5 AÑOS",
      content: [
        "Adaptación escolar - Timpanocentro + Hipófisis",
        "Miedos específicos - Tiroides + Timpanocentro",
        "Problemas de socialización - Corazón + Tiroides",
        "Ansiedad por separación - Timpanocentro + Corazón",
        "Problemas de conducta - Hipófisis + Tiroides"
      ],
      type: 'process'
    },
    
    // SLIDE 13: CASOS CLÍNICOS - SEPARACIÓN DEL CUIDADOR
    {
      id: 13,
      title: "CASOS CLÍNICOS - SEPARACIÓN DEL CUIDADOR",
      content: [
        "Niña de 2 años - Llanto inconsolable tras divorcio de padres",
        "Protocolo: Timpanocentro + Corazón + Hipófisis",
        "Síntomas: Insomnio, ansiedad, regresión en el lenguaje",
        "Resultado: Mejora en 3 sesiones, sueño normalizado",
        "Seguimiento: Estable a los 6 meses"
      ],
      type: 'summary'
    },
    
    // SLIDE 14: CASOS CLÍNICOS - PÉRDIDA DE TERRITORIO
    {
      id: 14,
      title: "CASOS CLÍNICOS - PÉRDIDA DE TERRITORIO",
      content: [
        "Niño de 4 años - Cambio de ciudad por trabajo de padre",
        "Protocolo: Hipófisis + Tiroides + Estómago",
        "Síntomas: Enuresis, miedos nocturnos, agresividad",
        "Resultado: Control de esfínteres en 2 semanas",
        "Seguimiento: Adaptación completa en 3 meses"
      ],
      type: 'summary'
    },
    
    // SLIDE 15: CASOS CLÍNICOS - INVASIÓN DE LÍMITES
    {
      id: 15,
      title: "CASOS CLÍNICOS - INVASIÓN DE LÍMITES",
      content: [
        "Niña de 3 años - Abuso emocional por cuidadora",
        "Protocolo: Corazón + Timpanocentro + Tiroides",
        "Síntomas: Miedo extremo, regresión, pesadillas",
        "Resultado: Recuperación emocional en 4 sesiones",
        "Seguimiento: Confianza restaurada, desarrollo normal"
      ],
      type: 'summary'
    },
    
    // SLIDE 16: EVALUACIÓN DEL DESARROLLO
    {
      id: 16,
      title: "EVALUACIÓN DEL DESARROLLO",
      content: [
        "Observación directa del comportamiento del niño",
        "Entrevista con padres sobre cambios recientes",
        "Evaluación de síntomas físicos y emocionales",
        "Identificación de conflictos biológicos activos",
        "Plan de tratamiento personalizado por edad"
      ],
      type: 'key-points'
    },
    
    // SLIDE 17: HERRAMIENTAS DE EVALUACIÓN
    {
      id: 17,
      title: "HERRAMIENTAS DE EVALUACIÓN",
      content: [
        "Cuestionario de síntomas por edad (3m-5a)",
        "Escala de conflictos biológicos postnatales",
        "Mapeo de pares biomagnéticos específicos",
        "Registro de progreso y evolución",
        "Seguimiento a largo plazo del desarrollo"
      ],
      type: 'comparison'
    },
    
    // SLIDE 18: PREVENCIÓN Y MANTENIMIENTO
    {
      id: 18,
      title: "PREVENCIÓN Y MANTENIMIENTO",
      content: [
        "Sesiones de mantenimiento cada 3-6 meses",
        "Educación a padres sobre señales de alerta",
        "Protocolos preventivos para cambios importantes",
        "Seguimiento del desarrollo normal",
        "Intervención temprana ante primeros síntomas"
      ],
      type: 'key-points'
    },
    
    // SLIDE 19: INTEGRACIÓN CON OTRAS TERAPIAS
    {
      id: 19,
      title: "INTEGRACIÓN CON OTRAS TERAPIAS",
      content: [
        "Terapia ocupacional para desarrollo motor",
        "Logopedia para problemas de comunicación",
        "Psicología infantil para apoyo emocional",
        "Pediatría para seguimiento médico",
        "Biomagnetismo como terapia complementaria"
      ],
      type: 'content'
    },
    
    // SLIDE 20: RESULTADOS ESPERADOS
    {
      id: 20,
      title: "RESULTADOS ESPERADOS",
      content: [
        "Mejora en síntomas emocionales y conductuales",
        "Normalización del desarrollo por edad",
        "Reducción de miedos y ansiedades",
        "Mejora en la calidad del sueño",
        "Restauración de la confianza y seguridad"
      ],
      type: 'key-points'
    },
    
    // SLIDE 21: SEGUIMIENTO Y EVALUACIÓN
    {
      id: 21,
      title: "SEGUIMIENTO Y EVALUACIÓN",
      content: [
        "Evaluación semanal durante las primeras 4 semanas",
        "Seguimiento mensual durante los primeros 6 meses",
        "Evaluación trimestral hasta completar el año",
        "Registro de cambios en síntomas y desarrollo",
        "Ajuste de protocolos según evolución"
      ],
      type: 'timeline'
    },
    
    // SLIDE 22: COMPLICACIONES Y MANEJO
    {
      id: 22,
      title: "COMPLICACIONES Y MANEJO",
      content: [
        "Resistencia del niño a la terapia",
        "Falta de cooperación de los padres",
        "Síntomas que no mejoran con el protocolo",
        "Recaídas tras mejoría inicial",
        "Necesidad de derivación a especialistas"
      ],
      type: 'key-points'
    },
    
    // SLIDE 23: ÉTICA Y RESPONSABILIDAD
    {
      id: 23,
      title: "ÉTICA Y RESPONSABILIDAD",
      content: [
        "Consentimiento informado de los padres",
        "Confidencialidad absoluta del caso",
        "Límites de la práctica biomagnética",
        "Derivación cuando sea necesario",
        "Documentación completa de cada sesión"
      ],
      type: 'key-points'
    },
    
    // SLIDE 24: INVESTIGACIÓN Y EVIDENCIA
    {
      id: 24,
      title: "INVESTIGACIÓN Y EVIDENCIA",
      content: [
        "Estudios de casos documentados",
        "Resultados de seguimiento a largo plazo",
        "Comparación con tratamientos convencionales",
        "Validación por pares en la comunidad",
        "Publicaciones en revistas especializadas"
      ],
      type: 'content'
    },
    
    // SLIDE 25: FORMACIÓN CONTINUA
    {
      id: 25,
      title: "FORMACIÓN CONTINUA",
      content: [
        "Actualización en nuevas técnicas biomagnéticas",
        "Participación en congresos y seminarios",
        "Intercambio de experiencias con colegas",
        "Lectura de literatura científica actualizada",
        "Práctica supervisada y mentoring"
      ],
      type: 'key-points'
    },
    
    // SLIDE 26: RECURSOS Y HERRAMIENTAS
    {
      id: 26,
      title: "RECURSOS Y HERRAMIENTAS",
      content: [
        "Manual de protocolos por edad",
        "Fichas de evaluación estandarizadas",
        "Registros de seguimiento digitales",
        "Biblioteca de casos clínicos",
        "Red de profesionales biomagnéticos"
      ],
      type: 'content'
    },
    
    // SLIDE 27: FUTURO DEL BIOMAGNETISMO PEDIÁTRICO
    {
      id: 27,
      title: "FUTURO DEL BIOMAGNETISMO PEDIÁTRICO",
      content: [
        "Integración en protocolos pediátricos estándar",
        "Investigación clínica multicéntrica",
        "Formación universitaria especializada",
        "Reconocimiento por sistemas de salud",
        "Acceso universal para todos los niños"
      ],
      type: 'timeline'
    },
    
    // SLIDE 28: REFLEXIÓN FINAL
    {
      id: 28,
      title: "REFLEXIÓN FINAL",
      content: [
        "Cada niño es único y requiere atención personalizada",
        "El biomagnetismo ofrece una alternativa natural y efectiva",
        "La intervención temprana es clave para el éxito",
        "El trabajo en equipo con otros profesionales es fundamental",
        "Nuestro compromiso es mejorar la vida de cada niño"
      ],
      type: 'hero'
    },
    
    // SLIDE 29: AGRADECIMIENTOS
    {
      id: 29,
      title: "AGRADECIMIENTOS",
      content: [
        "A todos los niños que confiaron en nosotros",
        "A los padres que apostaron por esta terapia",
        "A la comunidad biomagnética por su apoyo",
        "A los investigadores que validan nuestra práctica",
        "A la vida por permitirnos hacer esta labor"
      ],
      type: 'title'
    },
    
    // SLIDE 30: CONTACTO Y RECURSOS
    {
      id: 30,
      title: "CONTACTO Y RECURSOS",
      content: [
        "Consulta personalizada disponible",
        "Material educativo para padres",
        "Grupos de apoyo y comunidad",
        "Formación para profesionales",
        "Investigación y desarrollo continuo"
      ],
      type: 'summary'
    }
  ];

  const currentSlideData = slides[currentSlide];

  const getSlideContent = () => {
    switch (currentSlideData.type) {
      case 'hero':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <div className="relative max-w-5xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3 sm:mb-4 animate-fade-in-up">
                {currentSlideData.title}
              </h1>
              <div className="max-w-4xl mx-auto">
                {currentSlideData.content.map((line, index) => (
                  <p key={index} className="text-base sm:text-lg lg:text-xl text-slate-600 mb-2 sm:mb-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'title':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center text-center">
            <div className="max-w-5xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 animate-fade-in-up">
                {currentSlideData.title}
              </h1>
              {currentSlideData.content.map((line, index) => (
                <p key={index} className="text-base sm:text-lg lg:text-xl text-slate-600 mb-2 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        );
      
      case 'key-points':
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-center animate-fade-in-up">
                {currentSlideData.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {currentSlideData.content.map((point, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-xs sm:text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed font-semibold">
                          {point}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'content':
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-center animate-fade-in-up">
                {currentSlideData.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {currentSlideData.content.map((line, index) => (
                  <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 sm:p-4 border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed font-semibold">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'process':
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-center animate-fade-in-up">
                {currentSlideData.title}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {currentSlideData.content.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs sm:text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-2 sm:p-3 border border-slate-200 shadow-md">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'comparison':
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 text-center animate-fade-in-up">
                {currentSlideData.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
                {currentSlideData.content.map((item, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg p-2 sm:p-3 bg-gradient-to-br from-slate-50 to-gray-100 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-slate-700 leading-tight font-medium">
                          {item}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'timeline':
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-center animate-fade-in-up">
                {currentSlideData.title}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {currentSlideData.content.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-white text-xs sm:text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-2 sm:p-3 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'summary':
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 text-center animate-fade-in-up">
                {currentSlideData.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {currentSlideData.content.map((point, index) => (
                  <div key={index} className="group relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    {point.includes('Protocolo:') || point.includes('Síntomas:') || point.includes('Resultado:') || point.includes('Seguimiento:') ? (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 border border-green-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <h3 className="text-xs sm:text-sm font-semibold text-green-800">Información</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-tight font-medium">
                          {point}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3 sm:p-4 border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <h3 className="text-xs sm:text-sm font-semibold text-blue-800">Punto</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-tight font-medium">
                          {point}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setSlideTransition(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setSlideTransition(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setSlideTransition(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setSlideTransition(false);
      }, 300);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Escape') {
      navigate('/');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        if (currentSlide < slides.length - 1) {
          nextSlide();
        } else {
          setIsAutoPlay(false);
        }
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlay, currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors duration-200"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">Volver al Inicio</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleAutoPlay}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isAutoPlay 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="hidden sm:inline font-medium">
                  {isAutoPlay ? 'Pausar' : 'AutoPlay'}
                </span>
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="p-2 text-slate-700 hover:text-slate-900 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className={`w-full max-w-6xl mx-auto ${slideTransition ? 'slide-transition' : ''}`}>
          {/* Slide Content - Fixed 16:9 Aspect Ratio */}
          <div className="relative w-full aspect-video bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-white/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16">
              {getSlideContent()}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 z-20 cursor-pointer"
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-slate-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 z-20 cursor-pointer"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-6 md:h-6" />
          </button>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-3 sm:p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  {currentSlide + 1} / {slides.length}
                </span>
                <div className="flex space-x-1 sm:space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <button
                  onClick={prevSlide}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 active:bg-white/40 transition-all duration-200 text-xs sm:text-sm font-medium cursor-pointer"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft size={16} className="sm:w-4 sm:h-4 md:w-5 md:w-5" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                <button
                  onClick={nextSlide}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 active:bg-white/40 transition-all duration-200 text-xs sm:text-sm font-medium cursor-pointer"
                  disabled={currentSlide === slides.length - 1}
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ChevronRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module2Presentation;
