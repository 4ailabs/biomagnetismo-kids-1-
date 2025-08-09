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

const Presentation: React.FC = () => {
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
    // SLIDE 1: BIENVENIDA
    {
      id: 1,
      title: t('slides.welcome.title'),
      content: [t('slides.welcome.subtitle')],
      type: 'title'
    },
    // SLIDE 2: FUNDAMENTOS TEÓRICOS
    {
      id: 2,
      title: t('slides.fundamentals.title'),
      content: [
        t('slides.fundamentals.point1'),
        t('slides.fundamentals.point2'),
        t('slides.fundamentals.point3'),
        t('slides.fundamentals.point4')
      ],
      type: 'key-points'
    },
    // SLIDE 3: CAMPO BIOELÉCTRICO MATERNO-FETAL
    {
      id: 3,
      title: "CAMPO BIOELÉCTRICO MATERNO-FETAL",
      content: [
        "Madre y bebé forman un ecosistema energético unificado",
        "Todo cambio en el campo magnético materno genera resonancia directa",
        "El bebé absorbe todas las vibraciones maternas con permeabilidad total",
        "Los tejidos registran eventos significativos creando memoria celular",
        "Plasticidad máxima que permite gran capacidad de adaptación"
      ],
      type: 'key-points'
    },
    // SLIDE 4: PRINCIPIOS FUNDAMENTALES
    {
      id: 4,
      title: "PRINCIPIOS FUNDAMENTALES",
      content: [
        "Ley de Resonancia Materno-Filial: Todo lo que siente la madre, lo vive el bebé",
        "Ley de Impronta Energética: Los primeros 100 días definen el 70% del patrón energético adulto",
        "Ley de Plasticidad Decreciente: La capacidad de modificación energética es máxima al nacer",
        "Ley de Vulnerabilidad Extrema: Máxima sensibilidad a desequilibrios externos"
      ],
      type: 'key-points'
    },
    // SLIDE 5: 5 CONFLICTOS BIOLÓGICOS FUNDAMENTALES
    {
      id: 5,
      title: t('slides.conflicts.title'),
      content: [
        t('slides.conflicts.survival'),
        t('slides.conflicts.protection'),
        t('slides.conflicts.separation'),
        t('slides.conflicts.identity'),
        t('slides.conflicts.territory')
      ],
      type: 'key-points'
    },
    // SLIDE 6: CONFLICTO DE SUPERVIVENCIA
    {
      id: 6,
      title: "CONFLICTO DE SUPERVIVENCIA",
      content: [
        "Se activa con amenaza real o percibida a la continuidad del embarazo",
        "Manifestaciones: amenaza de aborto, hemorragias gestacionales",
        "Diagnósticos médicos graves y accidentes",
        "Par biomagnético principal: Suprarrenal - Riñón Derecho",
        "Efecto en el bebé: hipervigilancia, estrés crónico, trastornos del sueño"
      ],
      type: 'key-points'
    },
    // SLIDE 7: CONFLICTO DE PROTECCIÓN
    {
      id: 7,
      title: "CONFLICTO DE PROTECCIÓN",
      content: [
        "Se presenta cuando el entorno es percibido como inseguro o hostil",
        "Incluye situaciones de violencia, agresiones y entornos caóticos",
        "Par principal: Temporal - Temporal",
        "Manifestaciones en el bebé: hipertonía muscular",
        "Sobresaltos e hipersensibilidad auditiva"
      ],
      type: 'key-points'
    },
    // SLIDE 8: CONFLICTO DE SEPARACIÓN
    {
      id: 8,
      title: "CONFLICTO DE SEPARACIÓN",
      content: [
        "Surge por separación física o emocional de figuras importantes",
        "Abarca hospitalización, ausencia del padre, duelo y aislamiento",
        "Se trabaja con Plexo Solar - Riñón Izquierdo",
        "Genera en el bebé: cólicos, dificultades alimentarias",
        "Letargia y problemas de apego"
      ],
      type: 'key-points'
    },
    // SLIDE 9: CONFLICTO DE IDENTIDAD
    {
      id: 9,
      title: "CONFLICTO DE IDENTIDAD",
      content: [
        "Aparece cuando hay dudas sobre la deseabilidad o identidad del bebé",
        "Incluye embarazo no deseado y expectativas no cumplidas",
        "El par Hipófisis - Pineal trabaja estos aspectos",
        "Puede causar trastornos del crecimiento",
        "Problemas hormonales y de desarrollo"
      ],
      type: 'key-points'
    },
    // SLIDE 10: CONFLICTO DE TERRITORIO
    {
      id: 10,
      title: "CONFLICTO DE TERRITORIO",
      content: [
        "Se desarrolla por pérdida o amenaza del espacio vital seguro",
        "Engloba mudanzas, pérdida de vivienda y cambios drásticos",
        "El par Bulbo - Cerebelo genera en el bebé irritabilidad",
        "Dificultades de adaptación y problemas de estabilidad",
        "Inseguridad y ansiedad territorial"
      ],
      type: 'key-points'
    },
    // SLIDE 11: ENFOQUE SISTÉMICO
    {
      id: 11,
      title: t('slides.systemic.title'),
      content: [
        t('slides.systemic.point1'),
        t('slides.systemic.point2'),
        t('slides.systemic.point3'),
        t('slides.systemic.point4')
      ],
      type: 'key-points'
    },
    // SLIDE 12: INTERCONEXIÓN ENERGÉTICA FAMILIAR
    {
      id: 12,
      title: "INTERCONEXIÓN ENERGÉTICA FAMILIAR",
      content: [
        "El campo energético del niño está directamente conectado con el de sus padres",
        "Los desequilibrios familiares se reflejan en el sistema energético infantil",
        "Requiere un abordaje que considere el sistema completo",
        "No solo al niño de forma aislada",
        "Los niños actúan como 'antenas' del sistema familiar"
      ],
      type: 'key-points'
    },
    // SLIDE 13: TRANSMISIÓN GENERACIONAL
    {
      id: 13,
      title: "TRANSMISIÓN GENERACIONAL DE PATRONES",
      content: [
        "Los patrones energéticos se transmiten de generación en generación",
        "Conflictos no resueltos de los padres o abuelos pueden manifestarse",
        "En el niño como síntomas específicos",
        "Requieren pares biomagnéticos que aborden tanto el síntoma actual",
        "Como su origen familiar"
      ],
      type: 'key-points'
    },
    // SLIDE 14: SENSIBILIDAD AL CAMPO FAMILIAR
    {
      id: 14,
      title: "SENSIBILIDAD AL CAMPO FAMILIAR",
      content: [
        "Los niños captan y manifiestan desequilibrios que otros no perciben",
        "Su mayor sensibilidad energética los convierte en indicadores precisos",
        "Del estado del sistema familiar completo",
        "Pueden manifestar síntomas que 'protegen' a otros miembros",
        "Requieren pares que liberen la carga sacrificial"
      ],
      type: 'key-points'
    },
    // SLIDE 15: EFECTO RESONANCIA SISTÉMICA
    {
      id: 15,
      title: "EFECTO RESONANCIA SISTÉMICA",
      content: [
        "Cuando se equilibra el campo energético del niño",
        "Se produce una resonancia que afecta positivamente al sistema familiar",
        "El biomagnetismo pediátrico puede catalizar cambios energéticos",
        "En toda la familia, creando un efecto terapéutico multiplicador",
        "Beneficia al sistema familiar en su totalidad"
      ],
      type: 'key-points'
    },
    // SLIDE 16: PROTOCOLO BIOENERGÉTICO
    {
      id: 16,
      title: t('slides.protocol.title'),
      content: [
        t('slides.protocol.step1'),
        t('slides.protocol.step2'),
        t('slides.protocol.step3'),
        t('slides.protocol.step4'),
        t('slides.protocol.step5')
      ],
      type: 'key-points'
    },
    // SLIDE 17: IDENTIFICACIÓN DEL CONFLICTO
    {
      id: 17,
      title: "IDENTIFICACIÓN DEL CONFLICTO",
      content: [
        "Preguntar por la sensación o conflicto específico",
        "Utilizando las listas de esta aplicación",
        "A través del test muscular, identificar cuál es el conflicto principal",
        "Que está afectando al niño",
        "Fundamental dominar el test muscular para identificación correcta"
      ],
      type: 'key-points'
    },
    // SLIDE 18: RECESIÓN DE EDAD
    {
      id: 18,
      title: "RECESIÓN DE EDAD",
      content: [
        "Realizar una recesión de edad para encontrar el instante exacto",
        "Partiendo del momento actual, se va hacia atrás",
        "Hasta encontrar el instante donde se originó el conflicto",
        "Que puede llegar hasta el momento de la concepción",
        "La recesión debe ser guiada con cuidado, respetando el ritmo"
      ],
      type: 'key-points'
    },
    // SLIDE 19: SELECCIÓN DE PARES BIOMAGNÉTICOS
    {
      id: 19,
      title: "SELECCIÓN DE PARES BIOMAGNÉTICOS",
      content: [
        "Una vez identificado el instante, se determina cuál es el par",
        "Que soporta la información",
        "Se eligen los pares de la lista de puntos de rastreo",
        "O los pares sugeridos en la aplicación",
        "Los pares deben seleccionarse según la información obtenida"
      ],
      type: 'key-points'
    },
    // SLIDE 20: APLICACIÓN Y EVALUACIÓN
    {
      id: 20,
      title: "APLICACIÓN Y EVALUACIÓN",
      content: [
        "Se impactan los pares seleccionados",
        "Se evalúa cuántos pares son necesarios para el tratamiento completo",
        "Se realiza una evaluación continua del proceso",
        "Evaluar la efectividad del tratamiento en cada paso",
        "Continuar hasta completar el protocolo"
      ],
      type: 'key-points'
    },
    // SLIDE 21: CONSCIENTIZACIÓN DE LA INFORMACIÓN
    {
      id: 21,
      title: "CONSCIENTIZACIÓN DE LA INFORMACIÓN",
      content: [
        "El paso final es hacer consciente la información",
        "Para que la madre pueda procesar y comprender el conflicto",
        "Esto permite descargar la memoria energética del conflicto",
        "Liberando el patrón que afecta al niño",
        "La conscientización es el paso más importante"
      ],
      type: 'key-points'
    },
    // SLIDE 22: 20 SHOCKS VIVENCIALES GESTACIONALES
    {
      id: 22,
      title: t('slides.shocks.title'),
      content: [
        t('slides.shocks.intro'),
        t('slides.shocks.example1'),
        t('slides.shocks.example2'),
        t('slides.shocks.example3')
      ],
      type: 'content'
    },
    // SLIDE 23: SHOCKS GESTACIONALES - PRIMERA PARTE
    {
      id: 23,
      title: "SHOCKS GESTACIONALES (1-10)",
      content: [
        "1. Amenaza de aborto - Suprarrenal-Suprarrenal",
        "2. Diagnóstico médico alarmante - Bulbo-Suprarrenal",
        "3. Pérdida de un ser querido - Pericardio-Pulmón",
        "4. Separación de pareja - Plexo-Riñón der",
        "5. Violencia hacia la madre - Temporal izq-Temporal der"
      ],
      type: 'content'
    },
    // SLIDE 24: SHOCKS GESTACIONALES - SEGUNDA PARTE
    {
      id: 24,
      title: "SHOCKS GESTACIONALES (11-20)",
      content: [
        "11. Enfermedad grave de la madre - Bulbo-Suprarrenal",
        "12. Amenaza de parto prematuro - Hipófisis-Suprarrenal",
        "13. Malformación fetal - Timo-Suprarrenal",
        "14. Conflictos familiares - Plexo-Riñón derecho",
        "15. Embarazo después de pérdida - Suprarrenal-Suprarrenal"
      ],
      type: 'content'
    },
    // SLIDE 25: SENSACIONES VITALES PRENATALES
    {
      id: 25,
      title: t('slides.sensations.title'),
      content: [
        t('slides.sensations.intro'),
        t('slides.sensations.example1'),
        t('slides.sensations.example2'),
        t('slides.sensations.example3')
      ],
      type: 'content'
    },
    // SLIDE 26: SENSACIONES VITALES - DETALLES
    {
      id: 26,
      title: "SENSACIONES VITALES - DETALLES",
      content: [
        "Amenaza de pérdida: Riesgo de aborto, hemorragias",
        "Inseguridad vital: Diagnósticos alarmantes, hospitalización",
        "Abandono emocional: Ausencia del padre, separación",
        "Violencia gestacional: Agresiones, abuso",
        "Rechazo fetal: Embarazo no deseado, dudas"
      ],
      type: 'content'
    },
    // SLIDE 27: LEYES DE PERTENENCIA
    {
      id: 27,
      title: t('slides.belonging.title'),
      content: [
        t('slides.belonging.loyalty'),
        t('slides.belonging.sacrifice'),
        t('slides.belonging.guilt'),
        t('slides.belonging.direction')
      ],
      type: 'key-points'
    },
    // SLIDE 28: LEY DE LEALTAD FAMILIAR
    {
      id: 28,
      title: "LEY DE LEALTAD FAMILIAR",
      content: [
        "'Te seguiré hasta la muerte' - El niño mantiene lealtad energética absoluta",
        "Hacia su sistema familiar",
        "Esta lealtad puede manifestarse como síntomas que 'siguen' patrones familiares",
        "Requiriendo pares biomagnéticos que aborden tanto la lealtad",
        "Como el patrón subyacente"
      ],
      type: 'key-points'
    },
    // SLIDE 29: LEY DE SACRIFICIO SISTÉMICO
    {
      id: 29,
      title: "LEY DE SACRIFICIO SISTÉMICO",
      content: [
        "'Prefiero morir yo antes que tú' - Los niños pueden asumir energéticamente",
        "El sufrimiento de otros miembros del sistema familiar",
        "Este sacrificio se manifiesta como síntomas que 'protegen' a otros",
        "Requiriendo pares que liberen la carga sacrificial",
        "Y restablezcan el equilibrio"
      ],
      type: 'key-points'
    },
    // SLIDE 30: LEY DE REPARACIÓN DE CULPA
    {
      id: 30,
      title: "LEY DE REPARACIÓN DE CULPA",
      content: [
        "'Reparación de la culpa personal' - Los niños pueden manifestar síntomas",
        "Que 'reparan' culpas o conflictos no resueltos",
        "De generaciones anteriores",
        "El biomagnetismo debe abordar tanto el síntoma actual",
        "Como el patrón de culpa familiar subyacente"
      ],
      type: 'key-points'
    },
    // SLIDE 31: LEY DE DIRECCIÓN ENERGÉTICA
    {
      id: 31,
      title: "LEY DE DIRECCIÓN ENERGÉTICA",
      content: [
        "'Dirijo mi mirada hacia...' - Los niños dirigen su energía",
        "Hacia patrones específicos del sistema familiar",
        "Esta dirección puede manifestarse como síntomas que 'miran'",
        "Hacia conflictos no resueltos",
        "Requiriendo pares que reorienten la energía hacia patrones saludables"
      ],
      type: 'key-points'
    },
    // SLIDE 32: PARES BIOMAGNÉTICOS PRINCIPALES
    {
      id: 32,
      title: t('slides.pairs.title'),
      content: [
        t('slides.pairs.intro'),
        t('slides.pairs.example1'),
        t('slides.pairs.example2'),
        t('slides.pairs.example3'),
        t('slides.pairs.example4')
      ],
      type: 'key-points'
    },
    // SLIDE 33: APLICACIÓN BIOMAGNÉTICA DE LEYES SISTÉMICAS
    {
      id: 33,
      title: "APLICACIÓN BIOMAGNÉTICA DE LEYES SISTÉMICAS",
      content: [
        "Ley de Lealtad: Suprarrenal-Suprarrenal, Plexo-Riñón, Pericardio-Pulmón",
        "Ley de Sacrificio: Timo-Suprarrenal, Bulbo-Plexo, Corazón-Suprarrenal",
        "Ley de Culpa: Hipófisis-Pineal, Temporal-Temporal, Occipital-Sacro",
        "Ley de Dirección: Bulbo-Cerebelo, Plexo-Riñón, Estómago-Estómago",
        "Identificar qué ley sistémica está activa en el niño"
      ],
      type: 'key-points'
    },
    // SLIDE 34: TÉCNICAS FUNDAMENTALES
    {
      id: 34,
      title: t('slides.techniques.title'),
      content: [
        t('slides.techniques.muscleTest'),
        t('slides.techniques.recession'),
        t('slides.techniques.consciousness'),
        t('slides.techniques.feelingPhrases')
      ],
      type: 'key-points'
    },
    // SLIDE 35: TEST MUSCULAR
    {
      id: 35,
      title: "TEST MUSCULAR",
      content: [
        "Es fundamental dominar el test muscular",
        "Para identificar correctamente el conflicto",
        "Y evaluar la efectividad del tratamiento en cada paso",
        "Permite identificar cuál es el conflicto principal",
        "Que está afectando al niño"
      ],
      type: 'key-points'
    },
    // SLIDE 36: MÉTODO DE FRASES DEL SENTIR
    {
      id: 36,
      title: "MÉTODO DE FRASES DEL SENTIR",
      content: [
        "Una vez identificado el conflicto y realizado el instante",
        "Es fundamental elaborar frases del sentir que la madre debe repetir",
        "Para permitir descarga emocional y energética del conflicto",
        "Las frases permiten expresar y liberar emociones contenidas",
        "Facilitando la descarga de memoria energética"
      ],
      type: 'key-points'
    },
    // SLIDE 37: EJEMPLOS DE FRASES DEL SENTIR
    {
      id: 37,
      title: "EJEMPLOS DE FRASES DEL SENTIR",
      content: [
        "Miedo: 'Me siento asustada porque no sé si mi bebé estará bien'",
        "Tristeza: 'Me siento triste porque perdí a alguien importante'",
        "Enojo: 'Me siento enojada porque no puedo cambiar la situación'",
        "La madre repite la frase mientras se aplican los pares biomagnéticos",
        "Permitiendo la descarga emocional"
      ],
      type: 'content'
    },
    // SLIDE 38: CASOS CLÍNICOS
    {
      id: 38,
      title: t('slides.cases.title'),
      content: [
        t('slides.cases.case1'),
        t('slides.cases.case2'),
        t('slides.cases.case3')
      ],
      type: 'content'
    },
    // SLIDE 39: CASO CLÍNICO 1 - TRASTORNOS DEL SUEÑO
    {
      id: 39,
      title: "CASO CLÍNICO: TRASTORNOS DEL SUEÑO",
      content: [
        "Niño de 3 años con problemas severos de sueño",
        "Recesión de edad identificó amenaza de aborto en la madre",
        "Pares aplicados: Suprarrenal-Suprarrenal, Pericardio-Pulmón",
        "Frases del sentir: 'Me siento asustada por mi bebé'",
        "Resultado: Mejora del 80% en patrones de sueño"
      ],
      type: 'content'
    },
    // SLIDE 40: CASO CLÍNICO 2 - CÓLICOS
    {
      id: 40,
      title: "CASO CLÍNICO: CÓLICOS SEVEROS",
      content: [
        "Bebé de 2 meses con cólicos intensos",
        "Recesión identificó hospitalización de la madre durante el embarazo",
        "Pares aplicados: Plexo-Riñón Izquierdo, Pericardio-Pulmón",
        "Frases del sentir: 'Me siento sola y separada'",
        "Resultado: Reducción del 90% en episodios de cólicos"
      ],
      type: 'content'
    },
    // SLIDE 41: CASO CLÍNICO 3 - HIPERACTIVIDAD
    {
      id: 41,
      title: "CASO CLÍNICO: HIPERACTIVIDAD",
      content: [
        "Niño de 4 años con hiperactividad y problemas de atención",
        "Recesión identificó violencia doméstica durante la gestación",
        "Pares aplicados: Temporal-Temporal, Bulbo-Plexo",
        "Frases del sentir: 'Me siento en peligro y sin protección'",
        "Resultado: Mejora significativa en concentración y calma"
      ],
      type: 'content'
    },
    // SLIDE 42: RESULTADOS ESPERADOS
    {
      id: 42,
      title: t('slides.results.title'),
      content: [
        t('slides.results.improvement1'),
        t('slides.results.improvement2'),
        t('slides.results.improvement3'),
        t('slides.results.improvement4')
      ],
      type: 'key-points'
    },
    // SLIDE 43: MEJORAS ESPECÍFICAS
    {
      id: 43,
      title: "MEJORAS ESPECÍFICAS OBSERVADAS",
      content: [
        "Patrones de sueño: 70-90% de mejora en la mayoría de casos",
        "Síntomas físicos: Reducción significativa de cólicos y dolores",
        "Equilibrio emocional: Mayor estabilidad y menor irritabilidad",
        "Armonización familiar: Mejora en la dinámica familiar completa",
        "Desarrollo: Aceleración en hitos del desarrollo"
      ],
      type: 'key-points'
    },
    // SLIDE 44: CONSIDERACIONES IMPORTANTES
    {
      id: 44,
      title: "CONSIDERACIONES IMPORTANTES",
      content: [
        "El biomagnetismo pediátrico requiere enfoque sistémico",
        "Es fundamental considerar el contexto familiar completo",
        "La conscientización es clave para resultados duraderos",
        "Cada niño es único y requiere abordaje personalizado",
        "Los resultados varían según la gravedad y tiempo del conflicto"
      ],
      type: 'key-points'
    },
    // SLIDE 45: CONCLUSIONES
    {
      id: 45,
      title: t('slides.conclusion.title'),
      content: [
        t('slides.conclusion.point1'),
        t('slides.conclusion.point2'),
        t('slides.conclusion.point3')
      ],
      type: 'summary'
    }
  ];

  const nextSlide = () => {
    console.log('Next slide clicked, current:', currentSlide, 'total:', slides.length);
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      console.log('Moving to slide:', next);
      return next;
    });
  };

  const prevSlide = () => {
    console.log('Prev slide clicked, current:', currentSlide, 'total:', slides.length);
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      console.log('Moving to slide:', next);
      return next;
    });
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const goHome = () => {
    navigate('/');
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000); // 8 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full h-screen bg-white overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-3 sm:p-6 z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-center sm:text-left">Biomagnetismo Kids - Módulo 1</h1>
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-xs sm:text-sm md:text-lg"
              >
                {isAutoPlay ? <Pause size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <Play size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                <span className="hidden sm:inline">{isAutoPlay ? 'Pausar' : 'Auto'}</span>
              </button>
              <button
                onClick={goHome}
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-xs sm:text-sm md:text-lg"
              >
                <Home size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span className="hidden sm:inline">Inicio</span>
              </button>
              <button
                onClick={goHome}
                className="p-2 sm:p-3 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Content - Full Screen */}
        <div className="absolute inset-0 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-32 px-4 sm:px-8 md:px-12 flex items-center justify-center">
          <div className="w-full max-w-6xl text-center">
            {/* Slide Title with Icon */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 md:mb-8 animate-fade-in-up space-y-2 sm:space-y-0">
              {currentSlideData.id === 1 && <BookOpen className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-teal-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 2 && <Brain className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 3 && <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 4 && <Lightbulb className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 5 && <AlertTriangle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 6 && <Shield className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 7 && <Shield className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 8 && <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 9 && <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 10 && <Target className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 11 && <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 12 && <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 13 && <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-indigo-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 14 && <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-pink-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 15 && <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-teal-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 16 && <Target className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 17 && <Search className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 18 && <History className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 19 && <Table className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-indigo-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 20 && <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 21 && <Brain className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-teal-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 22 && <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-pink-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 23 && <List className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 24 && <List className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 25 && <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 26 && <List className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 27 && <Lightbulb className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 28 && <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 29 && <Shield className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 30 && <AlertTriangle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 31 && <Target className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 32 && <Table className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-indigo-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 33 && <Table className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 34 && <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-teal-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 35 && <Search className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 36 && <MessageCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 37 && <MessageCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-pink-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 38 && <Baby className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 39 && <Baby className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 40 && <Baby className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 41 && <Baby className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 42 && <Rocket className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-green-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 43 && <BarChart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-teal-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 44 && <AlertCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-yellow-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              {currentSlideData.id === 45 && <Target className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-purple-600 sm:mr-4 transform transition-all duration-500 hover:scale-110" />}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
                {currentSlideData.title}
              </h2>
            </div>

            {/* Slide Content with Enhanced Layout */}
            <div className="space-y-6">
              {currentSlideData.type === 'key-points' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentSlideData.content.map((item, index) => {
                    const colors = [
                      { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', circle: 'from-blue-500 to-indigo-500' },
                      { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', circle: 'from-green-500 to-emerald-500' },
                      { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', circle: 'from-purple-500 to-violet-500' },
                      { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', circle: 'from-orange-500 to-amber-500' },
                      { bg: 'from-pink-50 to-rose-50', border: 'border-pink-200', circle: 'from-pink-500 to-rose-500' }
                    ];
                    const colorIndex = index % colors.length;
                    return (
                      <div 
                        key={index} 
                        className={`bg-gradient-to-br ${colors[colorIndex].bg} rounded-xl p-6 border ${colors[colorIndex].border} shadow-lg transform transition-all duration-700 ease-out animate-fade-in-up`}
                        style={{ 
                          animationDelay: `${index * 200}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${colors[colorIndex].circle} rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-110`}>
                            <span className="text-white font-bold text-xs">{index + 1}</span>
                          </div>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    );
                  })}
                </div>
              )}
              
              {currentSlideData.type === 'content' && (
                <div className="space-y-4">
                  {currentSlideData.content.map((item, index) => {
                    const colors = [
                      { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', circle: 'from-purple-500 to-pink-500' },
                      { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-200', circle: 'from-cyan-500 to-teal-500' },
                      { bg: 'from-yellow-50 to-amber-50', border: 'border-yellow-200', circle: 'from-yellow-500 to-amber-500' },
                      { bg: 'from-red-50 to-pink-50', border: 'border-red-200', circle: 'from-red-500 to-pink-500' },
                      { bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-200', circle: 'from-indigo-500 to-blue-500' }
                    ];
                    const colorIndex = index % colors.length;
                    return (
                      <div 
                        key={index} 
                        className={`bg-gradient-to-br ${colors[colorIndex].bg} rounded-xl p-6 border ${colors[colorIndex].border} shadow-lg transform transition-all duration-700 ease-out animate-slide-in-left`}
                        style={{ 
                          animationDelay: `${index * 150}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-6 h-6 bg-gradient-to-r ${colors[colorIndex].circle} rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-110`}>
                            <span className="text-white font-bold text-xs">•</span>
                          </div>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    );
                  })}
                </div>
              )}
              
              {currentSlideData.type === 'summary' && (
                <div className="grid grid-cols-1 gap-6">
                  {currentSlideData.content.map((item, index) => {
                    const colors = [
                      { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', circle: 'from-green-500 to-emerald-500' },
                      { bg: 'from-teal-50 to-cyan-50', border: 'border-teal-200', circle: 'from-teal-500 to-cyan-500' },
                      { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', circle: 'from-blue-500 to-indigo-500' }
                    ];
                    const colorIndex = index % colors.length;
                    return (
                      <div 
                        key={index} 
                        className={`bg-gradient-to-br ${colors[colorIndex].bg} rounded-xl p-6 border ${colors[colorIndex].border} shadow-lg transform transition-all duration-700 ease-out animate-slide-in-right`}
                        style={{ 
                          animationDelay: `${index * 200}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${colors[colorIndex].circle} rounded-full flex items-center justify-center transform transition-all duration-500 hover:scale-110`}>
                            <span className="text-white font-bold text-xs">✓</span>
                          </div>
                        </div>
                        <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Additional Information for Specific Slides */}
            {currentSlideData.id === 1 && (
              <div className="mt-12 p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl border border-teal-200 shadow-xl animate-fade-in-up">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Clock className="w-10 h-10 text-teal-600 animate-pulse-slow" />
                  <span className="text-2xl text-teal-700 font-bold">Módulo 1: El Inicio Invisible</span>
                </div>
                <p className="text-xl text-slate-600 text-center">Cuando la Historia Empieza Antes de Nacer</p>
              </div>
            )}

            {/* Elementos Biomagnéticos Visuales */}
            {currentSlideData.id === 6 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200 shadow-lg animate-fade-in-up">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-bold text-red-700">Par Biomagnético Principal</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-red-300">
                    <h4 className="font-semibold text-red-700 mb-2">Suprarrenal</h4>
                    <p className="text-sm text-slate-600">Glándula de supervivencia</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-red-300">
                    <h4 className="font-semibold text-red-700 mb-2">Riñón Derecho</h4>
                    <p className="text-sm text-slate-600">Filtro de estrés</p>
                  </div>
                </div>
              </div>
            )}

            {currentSlideData.id === 16 && (
              <div className="mt-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 shadow-xl animate-fade-in-up">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Target className="w-8 h-8 text-green-600 animate-pulse-slow" />
                  <span className="text-xl text-green-700 font-bold">Protocolo Bioenergético</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/60 rounded-lg p-3 border border-green-300 transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                      <span className="font-semibold text-green-700 text-sm">1. Identificación</span>
                    </div>
                    <p className="text-xs text-slate-600">Test muscular del conflicto</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 border border-green-300 transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                      <span className="font-semibold text-green-700 text-sm">2. Recesión</span>
                    </div>
                    <p className="text-xs text-slate-600">Encontrar el instante exacto</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 border border-green-300 transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                      <span className="font-semibold text-green-700 text-sm">3. Selección</span>
                    </div>
                    <p className="text-xs text-slate-600">Pares biomagnéticos</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 border border-green-300 transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                      <span className="font-semibold text-green-700 text-sm">4. Aplicación</span>
                    </div>
                    <p className="text-xs text-slate-600">Impacto de pares</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 border border-green-300 transform transition-all duration-500 hover:scale-105">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                      <span className="font-semibold text-green-700 text-sm">5. Conscientización</span>
                    </div>
                    <p className="text-xs text-slate-600">Descarga energética</p>
                  </div>
                </div>
              </div>
            )}

            {currentSlideData.id === 4 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                    <h3 className="text-lg font-bold text-red-700">Resonancia Materno-Filial</h3>
                  </div>
                  <p className="text-sm text-red-600">Todo lo que siente la madre, lo vive el bebé</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="w-8 h-8 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-700">Impronta Energética</h3>
                  </div>
                  <p className="text-sm text-blue-600">Primeros 100 días definen el 70% del patrón adulto</p>
                </div>
              </div>
            )}

            {currentSlideData.id === 5 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-200 shadow-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="w-6 h-6 text-red-600" />
                    <span className="font-bold text-red-700">Supervivencia</span>
                  </div>
                  <p className="text-xs text-red-600">Amenaza de aborto, hemorragias</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200 shadow-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <span className="font-bold text-orange-700">Protección</span>
                  </div>
                  <p className="text-xs text-orange-600">Violencia, entornos hostiles</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 shadow-lg">
                  <div className="flex items-center space-x-2 mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="font-bold text-blue-700">Separación</span>
                  </div>
                  <p className="text-xs text-blue-600">Pérdidas, aislamiento</p>
                </div>
              </div>
            )}



            {currentSlideData.id === 23 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border border-red-200 shadow-lg">
                  <h3 className="font-bold text-red-700 mb-3">Shocks 1-5</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-red-600">Amenaza de aborto</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-red-600">Diagnóstico alarmante</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-red-600">Pérdida de ser querido</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200 shadow-lg">
                  <h3 className="font-bold text-orange-700 mb-3">Shocks 6-10</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-orange-600">Separación de pareja</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-orange-600">Violencia hacia madre</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-orange-600">Accidentes y caídas</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSlideData.id === 27 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                    <h3 className="text-lg font-bold text-red-700">Ley de Lealtad</h3>
                  </div>
                  <p className="text-sm text-red-600 mb-3">"Te seguiré hasta la muerte"</p>
                  <p className="text-xs text-red-500">El niño mantiene lealtad energética absoluta hacia su sistema familiar</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-8 h-8 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-700">Ley de Sacrificio</h3>
                  </div>
                  <p className="text-sm text-orange-600 mb-3">"Prefiero morir yo antes que tú"</p>
                  <p className="text-xs text-orange-500">Los niños asumen energéticamente el sufrimiento de otros</p>
                </div>
              </div>
            )}

            {currentSlideData.id === 39 && (
              <div className="mt-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Baby className="w-8 h-8 text-green-600" />
                  <h3 className="text-lg font-bold text-green-700">Caso Clínico: Trastornos del Sueño</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-green-300">
                    <h4 className="font-semibold text-green-700 mb-2">Diagnóstico</h4>
                    <p className="text-sm text-slate-600">Niño de 3 años con problemas severos de sueño</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-green-300">
                    <h4 className="font-semibold text-green-700 mb-2">Resultado</h4>
                    <p className="text-sm text-slate-600">Mejora del 80% en patrones de sueño</p>
                  </div>
                </div>
              </div>
            )}
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
                            <ChevronLeft size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
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

        {/* Keyboard Navigation */}
        <div className="absolute inset-0 focus:outline-none" tabIndex={0} onKeyDown={(e) => {
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key === 'ArrowLeft') prevSlide();
          if (e.key === 'Escape') goHome();
          if (e.key === ' ') {
            e.preventDefault();
            toggleAutoPlay();
          }
        }} />
      </div>
    </div>
  );
};

export default Presentation;
