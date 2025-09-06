import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { textUtils } from '../../../src/styles/typography';
import { 
  Shield, 
  Brain, 
  Target, 
  Eye, 
  Ear, 
  Heart,
  AlertTriangle,
  Baby,
  Zap,
  Compass,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  CheckCircle,
  Clock,
  Activity,
  Gauge
} from 'lucide-react';

const Module3Block5: React.FC = () => {
  const { t } = useTranslation();
  const [activeConstellationGroup, setActiveConstellationGroup] = useState<string | null>('tronco');
  const [selectedConstellation, setSelectedConstellation] = useState<string | null>(null);

  const constellationGroups = {
    tronco: {
      title: "Supervivencia Primaria",
      subtitle: "Tronco Cerebral y Cerebelo",
      color: "from-red-500 to-rose-600",
      icon: <Shield className="w-5 h-5" />,
      constellations: [
        {
          id: "tcr",
          name: "TCR - Sentirse Perdido",
          conflict: "Abandono y Desorientación",
          manifestation: "Niño en su propio mundo, no escucha, se distrae",
          biomagnetic_pair: "Riñón (-) → Riñón (+)",
          examples: ["Abandono en guardería", "Mudanza repentina", "Nacimiento hermano", "Perderse en lugar público"],
          tracking_protocol: "Test muscular para identificar sensación de abandono y edad del conflicto"
        },
        {
          id: "mamarias",
          name: "Glándulas Mamarias - El Pequeño Cuidador",
          conflict: "Preocupación Excesiva por Otros",
          manifestation: "Asume rol de cuidador, se preocupa por el bienestar familiar",
          biomagnetic_pair: "Mama (-) → Mama (+)",
          examples: ["Padre enfermo", "Peleas de padres", "Responsabilidad por hermano menor", "Muerte de mascota"],
          tracking_protocol: "Test muscular para identificar sensación de responsabilidad y edad del conflicto"
        },
        {
          id: "cerebelo",
          name: "Cerebelo - El Muro Emocional",
          conflict: "Protección por Aplanamiento",
          manifestation: "Aislamiento emocional, frialdad, 'nada le importa'",
          biomagnetic_pair: "Cerebelo (-) → Cerebelo (+)",
          examples: ["Bullying escolar", "Críticas constantes", "Ridiculización pública", "Invasión del espacio"],
          tracking_protocol: "Test muscular para identificar sensación de protección y edad del conflicto"
        }
      ]
    },
    corteza: {
      title: "Procesamiento Cognitivo",
      subtitle: "Sustancia Blanca y Corteza",
      color: "from-blue-500 to-indigo-600",
      icon: <Brain className="w-5 h-5" />,
      constellations: [
        {
          id: "blanca",
          name: "Sustancia Blanca - No Soy Suficiente",
          conflict: "Devaluación Intelectual",
          manifestation: "Megalomanía compensatoria, necesita ser centro de atención",
          biomagnetic_pair: "Frontal (-) → Timo (+)",
          examples: ["Comparaciones constantes", "No cumple expectativas", "Último en ser elegido", "Discapacidad o dificultad"],
          tracking_protocol: "Test muscular para identificar sensación de devaluación y edad del conflicto"
        },
        {
          id: "sensorial",
          name: "Corteza Sensorial - Déficit de Atención",
          conflict: "Pérdida de Contacto",
          manifestation: "Despiste, olvidos, distracción, posible diagnóstico TDAH",
          biomagnetic_pair: "Temporal Izq (-) → Temporal Der (+)",
          examples: ["Divorcio de padres", "Padres ausentes", "Sobreprotección asfixiante", "Invasión del espacio"],
          tracking_protocol: "Test muscular para identificar sensación de pérdida de contacto y edad del conflicto"
        },
        {
          id: "frontal",
          name: "Lóbulo Frontal - Miedo al Futuro",
          conflict: "Ansiedad Anticipatoria",
          manifestation: "Ansiedad constante, preocupación excesiva, miedos irracionales",
          biomagnetic_pair: "Frontal (-) → Occipital (+)",
          examples: ["Pánico ante exámenes", "Angustia por cambio colegio", "Miedo a médicos", "Temor separación padres"],
          tracking_protocol: "Test muscular para identificar sensación de ansiedad y edad del conflicto"
        },
        {
          id: "motora",
          name: "Corteza Motora - Atrapado sin Salida",
          conflict: "Inmovilización",
          manifestation: "Tics nerviosos, parpadeo, movimientos repetitivos, hiperactividad motora",
          biomagnetic_pair: "Bulbo (-) → Suprarrenal (+)",
          examples: ["Inmovilizado en pelea", "Obligado a comer", "Atrapado en discusión", "Encerrado accidentalmente"],
          tracking_protocol: "Test muscular para identificar sensación de inmovilización y edad del conflicto"
        }
      ]
    },
    territorial: {
      title: "Defensa del Territorio",
      subtitle: "Corteza Territorial",
      color: "from-green-500 to-emerald-600",
      icon: <Target className="w-5 h-5" />,
      constellations: [
        {
          id: "maniaco",
          name: "Maniaco-Depresiva - El Subibaja",
          conflict: "Conflicto de Lealtades",
          manifestation: "Cambios humor extremos, manía-depresión, inmadurez",
          biomagnetic_pair: "Temporal Der (-) → Temporal Der (+)",
          examples: ["Lealtades en divorcio", "Rey en casa/don nadie en colegio", "Peleas territoriales hermanos"],
          tracking_protocol: "Test muscular para identificar sensación de conflicto de lealtades y edad del conflicto"
        },
        {
          id: "asma",
          name: "Asma - Miedo en mi Territorio",
          conflict: "Amenaza Territorial",
          manifestation: "Crisis asmáticas, dificultad respiratoria",
          biomagnetic_pair: "Axila (-) → Axila (+)",
          examples: ["Miedo a ladrones", "Pánico a profesor", "Amenaza por discusiones padres"],
          tracking_protocol: "Test muscular para identificar sensación de amenaza territorial y edad del conflicto"
        },
        {
          id: "planeante",
          name: "Planeante - El Niño en las Nubes",
          conflict: "Disociación por Susto",
          manifestation: "Ausente, desconectado, vive en fantasía",
          biomagnetic_pair: "Bulbo (-) → Cerebelo (+)",
          examples: ["Susto grande", "Miedo paralizante"],
          tracking_protocol: "Test muscular para identificar sensación de disociación y edad del conflicto"
        },
        {
          id: "agresiva",
          name: "Agresiva - Furia o Autolesión",
          conflict: "Frustración Explosiva",
          manifestation: "Rabietas explosivas (manía) o autolesión (depresión)",
          biomagnetic_pair: "Mastoides Der (-) → Corazón (+)",
          examples: ["Castigo injusto", "Destrucción de algo valioso", "Frustración no expresada"],
          tracking_protocol: "Test muscular para identificar sensación de frustración y edad del conflicto"
        },
        {
          id: "marcaje",
          name: "Marcaje Urinario - Haciendo Mío el Espacio",
          conflict: "Invasión del Territorio",
          manifestation: "Enuresis repetitiva y compulsiva",
          biomagnetic_pair: "Vejiga (-) → Vejiga (+)",
          examples: ["Llegada nuevo bebé", "Compañero cuarto", "Invasión espacio aula"],
          tracking_protocol: "Test muscular para identificar sensación de invasión territorial y edad del conflicto"
        }
      ]
    },
    especiales: {
      title: "Patrones Complejos",
      subtitle: "Constelaciones Especiales",
      color: "from-purple-500 to-violet-600",
      icon: <Zap className="w-5 h-5" />,
      constellations: [
        {
          id: "mitomana",
          name: "Mitómana - Creador de Historias",
          conflict: "Confusión de Identidad",
          manifestation: "Inventa historias, exagera, miente patológicamente",
          biomagnetic_pair: "Lengua (-) → Hioides (+)",
          examples: ["Rol confuso familia reconstituida", "Miedo al castigo"],
          tracking_protocol: "Test muscular para identificar sensación de confusión de identidad y edad del conflicto"
        },
        {
          id: "autista",
          name: "Autista - Encerrado en mi Mundo",
          conflict: "Múltiples Traumas",
          manifestation: "Aislamiento profundo, evita contacto social",
          biomagnetic_pair: "Múltiples pares activos simultáneamente",
          examples: ["Ambiente caótico", "Combinación conflictos severos"],
          tracking_protocol: "Test muscular para identificar sensación de aislamiento y edad del conflicto"
        },
        {
          id: "alimentaria",
          name: "Bulímica/Anoréxica - Conflicto en el Plato",
          conflict: "No Poder Tragar",
          manifestation: "Rechazo comida o ciclos compulsivos",
          biomagnetic_pair: "Estómago (-) → Duodeno (+)",
          examples: ["Contrariedad familiar", "Asco hacia situación", "Conflictos identidad"],
          tracking_protocol: "Test muscular para identificar sensación de no poder tragar y edad del conflicto"
        },
        {
          id: "obsesivo",
          name: "Obsesivo-Compulsivo - Rituales de Control",
          conflict: "Susto + Injusticia + Confusión Identidad",
          manifestation: "Necesidad de rituales, manías, comportamientos repetitivos",
          biomagnetic_pair: "Temporal Izq (-) → Suprarrenal (+)",
          examples: ["Evento aterrador súbito", "Injusticia + confusión"],
          tracking_protocol: "Test muscular para identificar sensación de obsesión y edad del conflicto"
        }
      ]
    }
  };

  const trackingSteps = [
    {
      step: 1,
      title: "Buscar la Sensación",
      description: "Test muscular para identificar la sensación predominante de las 18 disponibles",
      icon: <Heart className="w-4 h-4" />
    },
    {
      step: 2,
      title: "Buscar el Instante",
      description: "Regresión de edad preguntando en qué momento ocurrió el conflicto",
      icon: <Clock className="w-4 h-4" />
    },
    {
      step: 3,
      title: "Buscar el Par",
      description: "Test muscular para encontrar el par que corrige el desequilibrio",
      icon: <Target className="w-4 h-4" />
    }
  ];

  return (
    <div id="block-5" className="mb-8 sm:mb-12 lg:mb-16 max-w-6xl mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mb-3 sm:mb-4">
          <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2 sm:mb-3">
          Estrategias de Supervivencia
        </h2>
        <p className="${textUtils.subtitle.section} max-w-3xl mx-auto leading-relaxed">
          Identificación y rastreo biomagnético de constelaciones cerebrales en niños escolares
        </p>
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-50 rounded-lg">
          <p className="text-sm sm:text-base text-amber-800">
            <strong>Metodología:</strong> Test muscular para identificar sensaciones, instante del conflicto y par biomagnético correcto
          </p>
        </div>
      </div>

      {/* Protocolo de Rastreo */}
      <div className="mb-8 sm:mb-10 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 sm:p-6 border-b border-slate-200">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
            Protocolo de Rastreo para Estrategias de Supervivencia
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            Método consistente con los demás protocolos de la aplicación
          </p>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trackingSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">
                  {step.step}. {step.title}
                </h4>
                <p className="${textUtils.cards.content} leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grupos de Constelaciones */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {Object.entries(constellationGroups).map(([key, group]) => (
          <button
            key={key}
            onClick={() => setActiveConstellationGroup(activeConstellationGroup === key ? null : key)}
            className={`p-4 sm:p-5 rounded-xl transition-all duration-300 text-left ${
              activeConstellationGroup === key
                ? 'bg-white shadow-xl border-2 border-orange-200 scale-105'
                : 'bg-white/80 hover:bg-white shadow-md border border-slate-200 hover:shadow-lg'
            }`}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${group.color} rounded-full flex items-center justify-center mb-3 text-white`}>
              {group.icon}
            </div>
            <h3 className="font-semibold text-slate-800 mb-1 text-sm sm:text-base">
              {group.title}
            </h3>
            <p className="${textUtils.cards.content} mb-2">
              {group.subtitle}
            </p>
            <div className="flex items-center text-xs text-slate-500">
              <span>{group.constellations.length} constelaciones</span>
              {activeConstellationGroup === key ? 
                <ChevronUp className="w-4 h-4 ml-auto" /> : 
                <ChevronDown className="w-4 h-4 ml-auto" />
              }
            </div>
          </button>
        ))}
      </div>

      {/* Constelaciones Detalladas */}
      {activeConstellationGroup && (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-8">
          <div className={`bg-gradient-to-r ${constellationGroups[activeConstellationGroup].color} p-4 sm:p-6 text-white`}>
            <div className="flex items-center mb-2">
              {constellationGroups[activeConstellationGroup].icon}
              <h3 className="text-lg sm:text-xl font-bold ml-3">
                {constellationGroups[activeConstellationGroup].title}
              </h3>
            </div>
            <p className="text-sm sm:text-base opacity-90">
              {constellationGroups[activeConstellationGroup].subtitle}
            </p>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="space-y-6">
              {constellationGroups[activeConstellationGroup].constellations.map((constellation) => (
                <div
                  key={constellation.id}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    selectedConstellation === constellation.id 
                      ? 'border-orange-300 shadow-lg' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setSelectedConstellation(selectedConstellation === constellation.id ? null : constellation.id)}
                    className="w-full p-4 text-left hover:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm sm:text-base mb-1">
                          {constellation.name}
                        </h4>
                        <p className="${textUtils.cards.content}">
                          {constellation.conflict} → {constellation.manifestation}
                        </p>
                      </div>
                      {selectedConstellation === constellation.id ? 
                        <ChevronUp className="w-5 h-5 text-slate-400" /> : 
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      }
                    </div>
                  </button>
                  
                  {selectedConstellation === constellation.id && (
                    <div className="border-t border-slate-200 p-4 bg-slate-50">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Información Clínica */}
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-slate-700 mb-2 text-sm flex items-center">
                              <AlertTriangle className="w-4 h-4 mr-2 text-red-500" />
                              Conflicto Biológico
                            </h5>
                            <p className="text-sm text-slate-600 bg-red-50 p-3 rounded-lg">
                              {constellation.conflict}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-slate-700 mb-2 text-sm flex items-center">
                              <Activity className="w-4 h-4 mr-2 text-blue-500" />
                              Manifestación Observable
                            </h5>
                            <p className="text-sm text-slate-600 bg-blue-50 p-3 rounded-lg">
                              {constellation.manifestation}
                            </p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-slate-700 mb-2 text-sm flex items-center">
                              <Baby className="w-4 h-4 mr-2 text-green-500" />
                              Ejemplos Específicos
                            </h5>
                            <ul className="text-sm text-slate-600 space-y-1">
                              {constellation.examples.map((example, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ArrowRight className="w-3 h-3 mr-2 mt-1 text-green-500 flex-shrink-0" />
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {/* Información de Rastreo */}
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-slate-700 mb-2 text-sm flex items-center">
                              <Target className="w-4 h-4 mr-2 text-purple-500" />
                              Par Biomagnético
                            </h5>
                            <p className="text-sm font-mono text-purple-700 bg-purple-50 p-3 rounded-lg">
                              {constellation.biomagnetic_pair}
                            </p>
                          </div>
                          
                          
                          <div>
                            <h5 className="font-medium text-slate-700 mb-2 text-sm flex items-center">
                              <Search className="w-4 h-4 mr-2 text-teal-500" />
                              Protocolo de Rastreo
                            </h5>
                            <p className="text-sm text-slate-600 bg-teal-50 p-3 rounded-lg">
                              {constellation.tracking_protocol}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Notas Importantes */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 border border-amber-200">
        <h3 className="font-semibold text-amber-800 mb-3 text-base sm:text-lg flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Consideraciones Importantes
        </h3>
        <div className="space-y-2 text-sm sm:text-base text-amber-700">
          <p>• Las estrategias de supervivencia son respuestas inteligentes del organismo ante amenazas</p>
          <p>• Cada constelación representa una adaptación neurológica específica</p>
          <p>• El rastreo debe ser respetuoso, gradual y apropiado para la edad del niño</p>
          <p>• La presencia de múltiples constelaciones indica situaciones más complejas</p>
          <p>• El objetivo es liberar las estrategias una vez que ya no son necesarias</p>
        </div>
      </div>
    </div>
  );
};

export default Module3Block5;