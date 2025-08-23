import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Home,
  BookOpen,
  Beaker,
  Baby,
  Rocket,
  Target,
  Heart,
  Brain,
  Sparkles,
  Lightbulb,
  Users,
  Clock,
  GraduationCap,
  AlertTriangle,
  Table,
  History,
  Download,
  Shield,
  Search,
  CheckCircle,
  List,
  MessageCircle,
  BarChart,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  content: string[];
  type: 'title' | 'content' | 'key-points' | 'summary' | 'image';
}

const Module2Presentation: React.FC = () => {
  const { t } = useTranslation();
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
        transition: all 0.5s ease-in-out;
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
      type: 'title'
    },
    
    // SLIDE 2: OBJETIVO DEL MÓDULO 2
    {
      id: 2,
      title: "OBJETIVO DEL MÓDULO 2",
      content: [
        "Comprender cómo los conflictos biológicos gestacionales continúan manifestándose",
        "en la primera infancia (3m-5a), aprendiendo a identificar los 8 conflictos fundamentales",
        "y aplicar técnicas biomagnéticas específicas para cada rango de edad",
        "con un enfoque práctico y accesible para terapeutas"
      ],
      type: 'key-points'
    },
    
    // SLIDE 3: LOS 8 GRANDES CONFLICTOS DE LA INFANCIA
    {
      id: 3,
      title: "LOS 8 GRANDES CONFLICTOS DE LA INFANCIA",
      content: [
        "1. Separación & Abandono - Cuando el niño siente que puede perder a quien más ama",
        "2. No Ser Escuchado - Cuando sus señales son ignoradas o malinterpretadas",
        "3. Territorio & Control - Cuando siente que ha perdido toda autonomía",
        "4. Amenaza de Supervivencia - Cuando percibe peligro vital real o imaginario",
        "5. No Soy Suficiente - Cuando recibe mensajes de que no cumple expectativas"
      ],
      type: 'key-points'
    },
    
    // SLIDE 4: LOS 8 GRANDES CONFLICTOS (CONTINUACIÓN)
    {
      id: 4,
      title: "LOS 8 GRANDES CONFLICTOS (CONTINUACIÓN)",
      content: [
        "6. Caos Relacional - Cuando vive inconsistencias extremas en el cuidado",
        "7. Pérdida de Base Segura - Cuando cambios drásticos alteran su mundo conocido",
        "8. Invasión de Límites - Cuando su espacio corporal o emocional es violado",
        "9. Trauma de Separación - Cuando la ausencia prolongada genera miedo existencial",
        "Estos no son simples 'problemas de conducta', sino expresiones profundas",
        "de conflictos biológicos que buscan resolución"
      ],
      type: 'key-points'
    },
    
    // SLIDE 5: POR QUÉ FUNCIONA EL BIOMAGNETISMO EN NIÑOS
    {
      id: 5,
      title: "POR QUÉ FUNCIONA EL BIOMAGNETISMO EN NIÑOS",
      content: [
        "Su cuerpo habla primero: Antes de que un niño pueda decir 'me duele el corazón'",
        "por la separación, su cuerpo ya lo está gritando a través de síntomas",
        "Respuesta inmediata: Los niños responden más rápido que los adultos",
        "La energía no miente: Mientras que un niño puede fingir estar bien para complacer",
        "a los adultos, su campo energético siempre revela la verdad",
        "Sanación natural: Su sistema inmune está en desarrollo activo",
        "Máxima plasticidad: El cerebro infantil es como arcilla fresca"
      ],
      type: 'key-points'
    },
    
    // SLIDE 6: PARES BIOMAGNÉTICOS PRÁCTICOS (3M-5A)
    {
      id: 6,
      title: "PARES BIOMAGNÉTICOS PRÁCTICOS (3M-5A)",
      content: [
        "Separación & Abandono: Pericardio (-) → Timo (+)",
        "No Ser Escuchado: Temporal Izq (-) → Temporal Der (+)",
        "Territorio & Control: Bulbo Raquídeo (-) → Suprarrenal (+)",
        "Amenaza de Supervivencia: Plexo Solar (-) → Riñón Derecho (+)",
        "No Soy Suficiente: Suprarrenal (-) → Suprarrenal (+)"
      ],
      type: 'key-points'
    },
    
    // SLIDE 7: PARES BIOMAGNÉTICOS (CONTINUACIÓN)
    {
      id: 7,
      title: "PARES BIOMAGNÉTICOS (CONTINUACIÓN)",
      content: [
        "Caos Relacional: Timo (-) → Bazo (+) | Pericardio (-) → Timo (+)",
        "Pérdida de Base Segura: Bulbo Raquídeo (-) → Suprarrenal (+) | Temporal Izq (-) → Temporal Der (+)",
        "Invasión de Límites: Plexo Solar (-) → Riñón Derecho (+) | Suprarrenal (-) → Suprarrenal (+)",
        "Trauma de Separación: Pericardio (-) → Pulmón (+) | Bulbo Raquídeo (-) → Plexo Solar (+)",
        "Todos estos pares son fáciles de localizar y aplicar en la práctica clínica"
      ],
      type: 'key-points'
    },
    
    // SLIDE 8: TU MAPA DE NAVEGACIÓN: CÓMO RASTREAR EN PRIMERA INFANCIA
    {
      id: 8,
      title: "TU MAPA DE NAVEGACIÓN: CÓMO RASTREAR EN PRIMERA INFANCIA",
      content: [
        "Trabajar con niños requiere un enfoque diferente al de los adultos",
        "Aquí tienes una guía paso a paso que hemos perfeccionado",
        "después de miles de consultas pediátricas:",
        "",
        "6 pasos fundamentales para el rastreo exitoso en primera infancia"
      ],
      type: 'title'
    },
    
    // SLIDE 9: PASO 1: CONVIÉRTETE EN DETECTIVE
    {
      id: 9,
      title: "PASO 1: CONVIÉRTETE EN DETECTIVE",
      content: [
        "Observa todo: ¿cuándo empezaron los síntomas?",
        "¿Qué cambios hubo en casa?",
        "¿Cómo se comporta con mamá vs. papá?",
        "Presta atención a los patrones de sueño y alimentación",
        "Los niños no mienten con su cuerpo, pero nosotros",
        "debemos aprender su lenguaje"
      ],
      type: 'key-points'
    },
    
    // SLIDE 10: PASO 2: ENCUENTRA EL PATRÓN
    {
      id: 10,
      title: "PASO 2: ENCUENTRA EL PATRÓN",
      content: [
        "De los 8 conflictos fundamentales, ¿cuál resuena más",
        "con lo que observas?",
        "Considera el contexto familiar y social del niño",
        "No busques el perfecto, busca el que más sentido hace",
        "en la historia del niño",
        "Observa las reacciones emocionales y físicas",
        "Confía en tu intuición y observación clínica"
      ],
      type: 'key-points'
    },
    
    // SLIDE 11: PASO 3: LOCALIZA EL PUNTO TRAUMA
    {
      id: 11,
      title: "PASO 3: LOCALIZA EL PUNTO TRAUMA",
      content: [
        "Coloca suavemente el imán negativo en el punto correspondiente",
        "al conflicto identificado",
        "Mantén el imán por 3-5 minutos para niños pequeños",
        "Los niños son más sensibles, así que menos presión",
        "y más intuición",
        "",
        "Observa las reacciones del niño durante la localización"
      ],
      type: 'key-points'
    },
    
    // SLIDE 12: PASO 4: BUSCA EL EQUILIBRIO
    {
      id: 12,
      title: "PASO 4: BUSCA EL EQUILIBRIO",
      content: [
        "Encuentra el segundo punto donde el imán positivo",
        "crea la armonía",
        "",
        "Las piernas se alinean, pero más importante:",
        "observa si el niño se relaja o cambia su expresión",
        "La respuesta puede ser inmediata o gradual",
        "El cuerpo del niño te dirá cuándo has encontrado el equilibrio"
      ],
      type: 'key-points'
    },
    
    // SLIDE 13: PASO 5: MANTÉN LA CONEXIÓN
    {
      id: 13,
      title: "PASO 5: MANTÉN LA CONEXIÓN",
      content: [
        "15-20 minutos máximo",
        "Los niños tienen menor tolerancia que los adultos",
        "Mantente presente, habla suavemente, permite que el niño",
        "se mueva ligeramente si lo necesita",
        "La paciencia es fundamental en esta etapa",
        "Su cuerpo te dirá cuándo es suficiente",
        "Confía en las señales del niño"
      ],
      type: 'key-points'
    },
    
    // SLIDE 14: PASO 6: CELEBRA LOS CAMBIOS
    {
      id: 14,
      title: "PASO 6: CELEBRA LOS CAMBIOS",
      content: [
        "Los cambios en niños pueden ser inmediatos o aparecer",
        "en días siguientes",
        "La respuesta varía según la edad y el conflicto",
        "Confía en el proceso y mantente disponible para ajustes",
        "si es necesario",
        "La consistencia es clave para resultados duraderos",
        "Cada pequeño cambio es un paso hacia la sanación"
      ],
      type: 'key-points'
    },
    
    // SLIDE 15: HISTORIAS REALES: SOFIA, 18 MESES
    {
      id: 15,
      title: "HISTORIA REAL: SOFIA, 18 MESES",
      content: [
        "Sofia llegó a consulta con berrinches que duraban horas",
        "Sus padres se habían divorciado hace un mes",
        "El trauma de separación era evidente",
        "Su cuerpo hablaba: 'He perdido mi seguridad, necesito saber",
        "que no me van a abandonar'",
        "La intervención fue específica y directa",
        "Intervención: Plexo Solar (-) → Riñón Derecho (+)",
        "Resultado: Después de 2 sesiones, Sofia comenzó a jugar sola"
      ],
      type: 'key-points'
    },
    
    // SLIDE 16: HISTORIA REAL: DIEGO, 3 AÑOS
    {
      id: 16,
      title: "HISTORIA REAL: DIEGO, 3 AÑOS",
      content: [
        "Diego hablaba perfectamente en casa, pero en el jardín",
        "no pronunciaba una palabra",
        "La inhibición selectiva era clara",
        "Su cuerpo hablaba: 'Solo me siento seguro para expresarme",
        "donde sé que me escuchan'",
        "El miedo al juicio social era evidente",
        "Intervención: Temporal Izq (-) → Temporal Der (+)",
        "Resultado: En la tercera sesión comenzó a susurrar con su maestra"
      ],
      type: 'key-points'
    },
    
    // SLIDE 17: PROTOCOLO ANTI-BERRINCHES (18M-3A)
    {
      id: 17,
      title: "PROTOCOLO ANTI-BERRINCHES (18M-3A)",
      content: [
        "Para Berrinches Explosivos:",
        "• Suprarrenal (-) → Suprarrenal (+): Calma la hiperactivación del estrés",
        "• Temporal Izq (-) → Temporal Der (+): Equilibra la sobrecarga sensorial",
        "• Bulbo Raquídeo (-) → Plexo Solar (+): Regula el sistema nervioso autónomo",
        "Para Berrinches por Frustración:",
        "Para Desarrollo del Lenguaje:",
        "• Lengua (-) → Hioides (+): Facilita articulación y expresión"
      ],
      type: 'key-points'
    },
    
    // SLIDE 18: PROTOCOLO PREESCOLAR (3-5 AÑOS)
    {
      id: 18,
      title: "PROTOCOLO PREESCOLAR (3-5 AÑOS)",
      content: [
        "Para Timidez e Inhibición:",
        "• Pericardio (-) → Timo (+): Fortalece la autoestima y confianza",
        "• Plexo Solar (-) → Riñón Der (+): Libera miedo al juicio",
        "• Tiroides (-) → Paratiroides (+): Facilita la expresión",
        "Para Ansiedad Social:",
        "Para Hiperactividad y Agresividad:",
        "• Suprarrenal (-) → Suprarrenal (+): Regula la hiperactivación"
      ],
      type: 'key-points'
    },
    
    // SLIDE 19: GUÍA DE INTERVENCIÓN INMEDIATA
    {
      id: 19,
      title: "GUÍA DE INTERVENCIÓN INMEDIATA",
      content: [
        "Cuando un niño está en crisis, sigue estos 3 pasos:",
        "Respira profundamente y mantén la calma",
        "1. CALMA: Suprarrenal-Suprarrenal para reducir la activación del estrés",
        "2. CENTRA: Plexo Solar-Riñón Derecho para estabilizar emocionalmente",
        "3. CONECTA: Temporal Izq-Temporal Der para equilibrar la percepción sensorial",
        "Observa los cambios en la respiración del niño",
        "Aplica cada par por 5-10 minutos, observando la respuesta del niño"
      ],
      type: 'key-points'
    },
    
    // SLIDE 20: PUNTOS DE REFERENCIA FÁCILES
    {
      id: 20,
      title: "PUNTOS DE REFERENCIA FÁCILES",
      content: [
        "Para facilitar la localización de los pares biomagnéticos:",
        "Usa la palma de tu mano como referencia de tamaño",
        "• Suprarrenal: 2 dedos por encima del ombligo, a los lados",
        "• Plexo Solar: En el centro del abdomen, debajo del esternón",
        "• Temporal: En las sienes, a los lados de la cabeza",
        "• Pericardio: En el centro del pecho, sobre el corazón",
        "• Timo: En el centro superior del pecho, debajo de la garganta"
      ],
      type: 'key-points'
    },
    
    // SLIDE 21: LA GRAN TRANSFORMACIÓN: DE BEBÉ A NIÑO
    {
      id: 21,
      title: "LA GRAN TRANSFORMACIÓN: DE BEBÉ A NIÑO",
      content: [
        "Entre los 18 meses y 3 años ocurre una revolución silenciosa",
        "El desarrollo neurológico se acelera exponencialmente",
        "El bebé que dependía completamente de otros ahora quiere",
        "hacerlo todo solo",
        "La frustración es parte natural del proceso de aprendizaje",
        "Su cerebro está desarrollando el concepto de 'yo', y con eso",
        "viene una necesidad imperiosa de control y autonomía",
        "Los 'terribles dos años' no son terribles - son necesarios"
      ],
      type: 'key-points'
    },
    
    // SLIDE 22: ENTENDIENDO LOS BERRINCHES DESDE EL BIOMAGNETISMO
    {
      id: 22,
      title: "ENTENDIENDO LOS BERRINCHES DESDE EL BIOMAGNETISMO",
      content: [
        "Un berrinche no es simplemente 'mal comportamiento'",
        "Es una respuesta fisiológica normal del desarrollo",
        "Es una descarga energética intensa cuando el sistema nervioso",
        "del niño se sobrecarga",
        "Los berrinches tienen un propósito evolutivo",
        "Desde la perspectiva biomagnética, los berrinches indican",
        "desequilibrios específicos que podemos corregir:",
        "• Berrinche por Frustración: Conflicto de Territorio/Control",
        "• Berrinche por Límites: Conflicto de Territorio/Autonomía"
      ],
      type: 'key-points'
    },
    
    // SLIDE 23: EL DESARROLLO DEL LENGUAJE Y LA FRUSTRACIÓN
    {
      id: 23,
      title: "EL DESARROLLO DEL LENGUAJE Y LA FRUSTRACIÓN",
      content: [
        "Esta etapa presenta una paradoja fascinante:",
        "El desarrollo cognitivo avanza más rápido que el verbal",
        "El niño sabe exactamente lo que quiere, pero aún no tiene",
        "las palabras para expresarlo",
        "La frustración se acumula y busca salida",
        "Su comprensión supera por mucho su capacidad de expresión,",
        "creando una brecha frustrante que puede manifestarse como",
        "berrinches, regresiones o incluso síntomas físicos",
        "El biomagnetismo puede acelerar el desarrollo del lenguaje"
      ],
      type: 'key-points'
    },
    
    // SLIDE 24: LA EXPLOSIÓN DE LA PERSONALIDAD (3-5 AÑOS)
    {
      id: 24,
      title: "LA EXPLOSIÓN DE LA PERSONALIDAD (3-5 AÑOS)",
      content: [
        "Entre los 3 y 5 años asistimos a un espectáculo fascinante:",
        "el nacimiento de la personalidad única",
        "La individualidad emerge con fuerza",
        "El niño ya no es solo 'el hijo de' o 'el hermano de' -",
        "ahora es alguien con gustos, preferencias, ideas propias",
        "La creatividad se desborda naturalmente",
        "Quiere construir torres, inventar historias, liderar juegos",
        "y crear mundos fantásticos",
        "Esta explosión creativa viene acompañada de nuevos desafíos"
      ],
      type: 'key-points'
    },
    
    // SLIDE 25: LOS NUEVOS CONFLICTOS DE ESTA ETAPA
    {
      id: 25,
      title: "LOS NUEVOS CONFLICTOS DE ESTA ETAPA",
      content: [
        "A medida que el mundo del niño se expande hacia la escuela,",
        "los amigos y las actividades estructuradas, aparecen",
        "conflictos energéticos específicos:",
        "La socialización trae nuevos desafíos",
        "• Miedo al Juicio: Miedo a hacer el ridículo o ser criticado",
        "• Ansiedad de Separación: Dificultad para separarse en la escuela",
        "• Inhibición Creativa: No se atreve a proponer ideas o liderar",
        "La presión del grupo se intensifica",
        "Estos conflictos pueden manifestarse como inhibición,",
        "perfeccionismo o dificultades de socialización"
      ],
      type: 'key-points'
    },
    
    // SLIDE 26: EL CEREBRO SOCIAL EN DESARROLLO
    {
      id: 26,
      title: "EL CEREBRO SOCIAL EN DESARROLLO",
      content: [
        "Esta etapa marca el despertar del 'cerebro social' -",
        "la capacidad de entender que otros tienen pensamientos,",
        "sentimientos y perspectivas diferentes a las suyas",
        "La empatía se desarrolla naturalmente",
        "Esto abre un universo de posibilidades pero también de",
        "complejidades. El niño debe aprender a navegar amistades,",
        "manejar conflictos, compartir atención y negociar deseos",
        "Las habilidades sociales se perfeccionan",
        "Cuando este desarrollo no fluye naturalmente, podemos ver",
        "niños excesivamente tímidos, agresivos o que se aíslan"
      ],
      type: 'key-points'
    },
    
    // SLIDE 27: PROTOCOLO INTEGRADO POR EDAD
    {
      id: 27,
      title: "PROTOCOLO INTEGRADO POR EDAD",
      content: [
        "La Caja de Herramientas del Terapeuta Pediátrico:",
        "Cada etapa tiene sus necesidades específicas",
        "3-9 meses: La Base - '¿Puedo Confiar?'",
        "Par clave: Pericardio-Timo para fortalecer la confianza primordial",
        "La seguridad es fundamental en esta etapa",
        "9-18 meses: La Aventura - '¿Puedo Explorar?'",
        "Par clave: Bulbo Raquídeo-Suprarrenal para equilibrar curiosidad y prudencia",
        "El equilibrio entre libertad y protección",
        "18m-3a: La Revolución - '¿Puedo Ser Yo?'",
        "Par clave: Suprarrenal-Suprarrenal para navegar la tormenta emocional"
      ],
      type: 'key-points'
    },
    
    // SLIDE 28: PROTOCOLO INTEGRADO (CONTINUACIÓN)
    {
      id: 28,
      title: "PROTOCOLO INTEGRADO (CONTINUACIÓN)",
      content: [
        "3-5 años: La Creación - '¿Puedo Crear?'",
        "Par clave: Pericardio-Timo para liberar la creatividad sin miedo al juicio",
        "La expresión artística se libera naturalmente",
        "Cada etapa que hemos explorado es como un movimiento en una sinfonía",
        "La evolución sigue un patrón natural y predecible",
        "No son episodios aislados, sino capítulos de una historia",
        "que se construye día a día",
        "Cada transición prepara la siguiente",
        "El biomagnetismo no cambia esta historia natural - la facilita"
      ],
      type: 'key-points'
    },
    
    // SLIDE 29: REFLEXIÓN FINAL: TU NUEVA MIRADA
    {
      id: 29,
      title: "REFLEXIÓN FINAL: TU NUEVA MIRADA",
      content: [
        "A partir de ahora, cada vez que veas a un niño con",
        "'problemas de conducta', recuerda que estás ante un pequeño",
        "ser humano cuyo cuerpo está gritando una verdad que aún",
        "no puede expresar con palabras",
        "Tu mirada cambia cuando entiendes el lenguaje del cuerpo",
        "El cuerpo del niño habla antes que sus palabras,",
        "y el biomagnetismo nos da el diccionario para entenderlo"
      ],
      type: 'key-points'
    },
    
    // SLIDE 30: LO QUE LLEVAS CONTIGO
    {
      id: 30,
      title: "LO QUE LLEVAS CONTIGO",
      content: [
        "• Los 8 conflictos fundamentales que rigen la infancia",
        "• Un método de rastreo adaptado específicamente para niños",
        "• La certeza de que cada síntoma tiene sentido y solución",
        "• Protocolos prácticos para cada etapa evolutiva",
        "• La confianza para intervenir con precisión y amor",
        "• Una nueva perspectiva sobre el desarrollo infantil",
        "Has completado el Módulo 2 de Biomagnetismo Kids"
      ],
      type: 'summary'
    }
  ];

  const currentSlideData = slides[currentSlide];

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
      }, 8000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlay, currentSlide]);

  const getSlideContent = () => {
    switch (currentSlideData.type) {
      case 'title':
        return (
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-8 animate-fade-in-up">
              {currentSlideData.title}
            </h1>
            {currentSlideData.content.map((line, index) => (
              <p key={index} className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-4 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
                {line}
              </p>
            ))}
          </div>
        );
      
      case 'key-points':
        return (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 text-center animate-fade-in-up">
              {currentSlideData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {currentSlideData.content.map((point, index) => {
                const colorSchemes = [
                  { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', circle: 'from-blue-500 to-indigo-600', text: 'text-slate-800' },
                  { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', circle: 'from-green-500 to-emerald-600', text: 'text-slate-800' },
                  { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', circle: 'from-purple-500 to-pink-600', text: 'text-slate-800' },
                  { bg: 'from-amber-50 to-orange-50', border: 'border-amber-200', circle: 'from-amber-500 to-orange-600', text: 'text-slate-800' },
                  { bg: 'from-teal-50 to-cyan-50', border: 'border-teal-200', circle: 'from-teal-500 to-cyan-600', text: 'text-slate-800' },
                  { bg: 'from-rose-50 to-red-50', border: 'border-rose-200', circle: 'from-rose-500 to-red-600', text: 'text-slate-800' },
                  { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', circle: 'from-indigo-500 to-blue-600', text: 'text-slate-800' },
                  { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200', circle: 'from-emerald-500 to-green-600', text: 'text-slate-800' }
                ];
                const colorScheme = colorSchemes[index % colorSchemes.length];
                
                return (
                  <div key={index} className={`bg-gradient-to-br ${colorScheme.bg} rounded-xl p-4 sm:p-6 border ${colorScheme.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-left`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${colorScheme.circle} rounded-full flex items-center justify-center shadow-md`}>
                        <span className="text-white text-sm sm:text-base font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className={`text-base sm:text-lg lg:text-xl ${colorScheme.text} leading-relaxed font-semibold`}>
                          {point}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      case 'content':
        return (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 text-center animate-fade-in-up">
              {currentSlideData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {currentSlideData.content.map((line, index) => {
                const colorSchemes = [
                  { bg: 'from-indigo-50 to-purple-50', border: 'border-indigo-200', text: 'text-slate-800' },
                  { bg: 'from-pink-50 to-rose-50', border: 'border-pink-200', text: 'text-slate-800' },
                  { bg: 'from-cyan-50 to-blue-50', border: 'border-cyan-200', text: 'text-slate-800' },
                  { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', text: 'text-slate-800' },
                  { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', text: 'text-slate-800' },
                  { bg: 'from-violet-50 to-purple-50', border: 'border-violet-200', text: 'text-slate-800' }
                ];
                const colorScheme = colorSchemes[index % colorSchemes.length];
                
                return (
                  <div key={index} className={`bg-gradient-to-br ${colorScheme.bg} rounded-xl p-4 sm:p-6 border ${colorScheme.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <p className={`text-base sm:text-lg lg:text-xl ${colorScheme.text} leading-relaxed font-semibold`}>
                      {line}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      case 'summary':
        return (
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 animate-fade-in-up">
              {currentSlideData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {currentSlideData.content.map((point, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {point.startsWith('•') ? (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-medium">
                        {point}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                        {point}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

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
          {/* Slide Content */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-white/20">
            {getSlideContent()}
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

          {/* Keyboard Shortcuts Info */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-xs sm:text-sm opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-4">
              <span>← → Navegar</span>
              <span>Espacio Siguiente</span>
              <span>Esc Salir</span>
            </div>
          </div>

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
