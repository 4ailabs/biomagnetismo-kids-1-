import React from 'react';
import { Table, Search, Target, Heart, Clock, CheckCircle } from 'lucide-react';
import CourseSection from '../../CourseSection';

const Module3Block6: React.FC = () => {
  const paresPrioritarios = [
    { id: 1, par: "Temporal Izq - Temporal Der", microorganismo: "Tifus exantemático", aplicacion: "TDAH" },
    { id: 2, par: "Temporal Der - Temporal Der", microorganismo: "Bonilla", aplicacion: "Hiperactividad" },
    { id: 3, par: "Frontal - Occipital", microorganismo: "-", aplicacion: "Función ejecutiva" },
    { id: 4, par: "Suprarrenales - Suprarrenales", microorganismo: "-", aplicacion: "Regulación estrés" },
    { id: 5, par: "Estómago - Estómago", microorganismo: "-", aplicacion: "Somatizaciones" },
    { id: 6, par: "Estómago - Suprarrenales", microorganismo: "Sarampión", aplicacion: "Gastritis/pánico" },
    { id: 7, par: "Axila - Axila", microorganismo: "Virus rabia", aplicacion: "Asma territorial" },
    { id: 8, par: "Mandíbula - Mandíbula", microorganismo: "Neisseria", aplicacion: "Bruxismo" },
    { id: 9, par: "Timo - Timo", microorganismo: "-", aplicacion: "Sistema inmune emocional" },
    { id: 10, par: "Timo - Suprarrenal", microorganismo: "-", aplicacion: "Autoestima" },
    { id: 11, par: "Parietal - Riñón Contralateral", microorganismo: "GOIZ", aplicacion: "Concentración" },
    { id: 12, par: "Bulbo - Cerebelo", microorganismo: "Newcastle", aplicacion: "Coordinación" },
    { id: 13, par: "Polo - Polo", microorganismo: "Abraham", aplicacion: "Dislexia" },
    { id: 14, par: "Cerebelo - Cerebelo", microorganismo: "Universidad Chapingo", aplicacion: "Convulsiones" },
    { id: 15, par: "Hipófisis - Hipófisis", microorganismo: "-", aplicacion: "Regulación endocrina" },
    { id: 16, par: "Riñón - Riñón", microorganismo: "Clostridium tetani", aplicacion: "Depuración" },
    { id: 17, par: "Cervicales - Sacro", microorganismo: "-", aplicacion: "Regulación autonómica" },
    { id: 18, par: "Plexo Solar - Riñón Der", microorganismo: "-", aplicacion: "Seguridad emocional" },
    { id: 19, par: "Duodeno - Duodeno", microorganismo: "-", aplicacion: "Colon irritable" },
    { id: 20, par: "Interciliar - Bulbo", microorganismo: "David", aplicacion: "Enuresis" }
  ];

  const paresPsicoemocionales = [
    { id: 21, par: "Corazón - Corazón", microorganismo: "-", aplicacion: "Negatividad/pesimismo" },
    { id: 22, par: "Corazón - Páncreas", microorganismo: "-", aplicacion: "Envidia" },
    { id: 23, par: "Corazón - Vejiga", microorganismo: "-", aplicacion: "Resentimiento" },
    { id: 24, par: "Riñón Izq - Ojo Izq", microorganismo: "-", aplicacion: "Miedos comunes" },
    { id: 25, par: "Rótula - Rótula", microorganismo: "-", aplicacion: "Miedo general" },
    { id: 26, par: "Bulbo - Corazón", microorganismo: "-", aplicacion: "Crueldad/agresividad" },
    { id: 27, par: "Mastoides Der - Corazón", microorganismo: "-", aplicacion: "Agresividad" },
    { id: 28, par: "Ombligo - Testículo", microorganismo: "-", aplicacion: "Complejo Edipo" },
    { id: 29, par: "Ombligo - Uretero", microorganismo: "-", aplicacion: "Complejo Elektra" },
    { id: 30, par: "Suprarrenal - Hígado", microorganismo: "-", aplicacion: "Soberbia" },
    { id: 31, par: "Timo - Hipófisis", microorganismo: "-", aplicacion: "Avaricia/acaparamiento" },
    { id: 32, par: "Hipófisis - Tiroides", microorganismo: "-", aplicacion: "Venganza" },
    { id: 33, par: "Sien Der - Corazón", microorganismo: "-", aplicacion: "Tristeza" },
    { id: 34, par: "Tráquea - Corazón", microorganismo: "-", aplicacion: "Intolerancia" },
    { id: 35, par: "Estómago - Corazón", microorganismo: "-", aplicacion: "Gula/control peso" }
  ];

  const paresComplementarios = [
    { id: 36, par: "Bazo - Bazo", microorganismo: "Yersinia pestis", aplicacion: "Tos bronquitis" },
    { id: 37, par: "Lengua - Lengua", microorganismo: "Sarcoptes", aplicacion: "Separación dolorosa" },
    { id: 38, par: "Laringe - Laringe", microorganismo: "Bordetella pertussis", aplicacion: "Tos ferina" },
    { id: 39, par: "Oído - Oído", microorganismo: "Toxoplasma", aplicacion: "Conflictos grupales" },
    { id: 40, par: "Canto - Canto", microorganismo: "Aspergillus", aplicacion: "Glaucoma" },
    { id: 41, par: "Nervio Vago - Riñón", microorganismo: "-", aplicacion: "Reservorio universal" },
    { id: 42, par: "Dental - Riñón", microorganismo: "-", aplicacion: "Reservorio universal" },
    { id: 43, par: "Quiasma - Quiasma", microorganismo: "Lucina", aplicacion: "Sistema linfático" },
    { id: 44, par: "Parotida - Parotida", microorganismo: "Leni", aplicacion: "Regulación hormonal" },
    { id: 45, par: "Oreja - Oreja", microorganismo: "Leni", aplicacion: "Tics nerviosos" },
    { id: 46, par: "Muñeca - Tibia Inferior", microorganismo: "-", aplicacion: "Polarización" },
    { id: 47, par: "Pectoral - Cuadríceps", microorganismo: "-", aplicacion: "Energético" },
    { id: 48, par: "Aquiles - Aquiles", microorganismo: "Shigella", aplicacion: "Gastrointestinal" },
    { id: 49, par: "Calcáneo - Calcáneo", microorganismo: "Ricketsia", aplicacion: "Debilidad muscular" },
    { id: 50, par: "Dorsal 7 - Dorsal 7", microorganismo: "-", aplicacion: "Acidez/oxidación" }
  ];

  const hologramasEscolares = [
    { id: 1, holograma: "Humillación Pública", evento: "Ridículo frente a compañeros/maestros", par: "Temporal Izq (-) → Suprarrenal (+)", sensacion: "Vergüenza, humillación", manifestaciones: "Mutismo, retraimiento, somatizaciones" },
    { id: 2, holograma: "Traición del Grupo de Pares", evento: "Ruptura de confianza en amistades", par: "Corazón (-) → Timo (+)", sensacion: "Traición, abandono", manifestaciones: "Aislamiento, desconfianza, agresividad" },
    { id: 3, holograma: "Fracaso Académico Devastador", evento: "Fallo que destruye autoestima intelectual", par: "Frontal (-) → Timo (+)", sensacion: "\"He fallado\", devaluación", manifestaciones: "Autosabotaje, perfeccionismo, miedo al fracaso" },
    { id: 4, holograma: "Injusticia de Autoridad", evento: "Abuso de poder por figura de autoridad", par: "Suprarrenal (-) → Hígado (+)", sensacion: "Ira, impotencia", manifestaciones: "Rebeldía, desafío, conductas oposicionistas" },
    { id: 5, holograma: "Pérdida de Identidad Grupal", evento: "Perder lugar o identidad en el grupo", par: "Pericardio (-) → Plexo Solar (+)", sensacion: "Vacío, no pertenencia", manifestaciones: "Dificultades sociales, cambios de personalidad" },
    { id: 6, holograma: "Sobrecarga Sistémica Súbita", evento: "Demandas que superan capacidad", par: "Temporal Izq (-) → Temporal Der (+)", sensacion: "Agotamiento, \"ya no puedo más\"", manifestaciones: "Fatiga, dificultades concentración, somatizaciones" },
    { id: 7, holograma: "Amenaza de Expulsión/Separación", evento: "Riesgo de perder lugar en sistema escolar", par: "Bulbo Raquídeo (-) → Corazón (+)", sensacion: "Pánico, miedo extremo", manifestaciones: "Ansiedad severa, conductas de supervivencia" }
  ];


  return (
    <div id="block-6" className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-6 sm:py-12 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-indigo-200 rounded-full">
              <Table className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
            Lista de 50 Pares Optimizados
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto px-2">
            Pares Biomagnéticos Específicos para el Contexto Escolar
          </p>
        </div>

        <CourseSection
          title="Puntos Prioritarios Escolares (1-20)"
          icon={<Target className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />}
        >
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="min-w-full px-2 sm:px-0">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">#</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">Par Biomagnético</th>
                  </tr>
                </thead>
                <tbody>
                  {paresPrioritarios.map((par) => (
                    <tr key={par.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-indigo-600 text-xs sm:text-sm">{par.id}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm break-words">{par.par}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CourseSection>

        <CourseSection
          title="Puntos Psicoemocionales (21-35)"
          icon={<Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />}
        >
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="min-w-full px-2 sm:px-0">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">#</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">Par Biomagnético</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">Microorganismo</th>
                  </tr>
                </thead>
                <tbody>
                  {paresPsicoemocionales.map((par) => (
                    <tr key={par.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-indigo-600 text-xs sm:text-sm">{par.id}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm break-words">{par.par}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-600 italic break-words">{par.microorganismo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CourseSection>

        <CourseSection
          title="Puntos Complementarios (36-50)"
          icon={<CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />}
        >
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="min-w-full px-2 sm:px-0">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">#</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">Par Biomagnético</th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm">Microorganismo</th>
                  </tr>
                </thead>
                <tbody>
                  {paresComplementarios.map((par) => (
                    <tr key={par.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-indigo-600 text-xs sm:text-sm">{par.id}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm break-words">{par.par}</td>
                      <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-600 italic break-words">{par.microorganismo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CourseSection>

        <CourseSection
          title="Los 7 Hologramas Escolares"
          icon={<Search className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />}
        >
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <div className="min-w-full px-2 sm:px-0">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
                  <tr>
                    <th className="px-1 sm:px-2 py-2 sm:py-3 text-left font-semibold text-xs">#</th>
                    <th className="px-1 sm:px-2 py-2 sm:py-3 text-left font-semibold text-xs">Holograma</th>
                    <th className="px-1 sm:px-2 py-2 sm:py-3 text-left font-semibold text-xs hidden sm:table-cell">Evento</th>
                    <th className="px-1 sm:px-2 py-2 sm:py-3 text-left font-semibold text-xs hidden lg:table-cell">Par Biomagnético</th>
                    <th className="px-1 sm:px-2 py-2 sm:py-3 text-left font-semibold text-xs hidden lg:table-cell">Sensación</th>
                    <th className="px-1 sm:px-2 py-2 sm:py-3 text-left font-semibold text-xs hidden xl:table-cell">Manifestaciones</th>
                  </tr>
                </thead>
                <tbody>
                  {hologramasEscolares.map((holograma) => (
                    <tr key={holograma.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-1 sm:px-2 py-2 sm:py-3 font-medium text-indigo-600 text-xs">{holograma.id}</td>
                      <td className="px-1 sm:px-2 py-2 sm:py-3 font-medium text-purple-700 text-xs sm:text-sm break-words">{holograma.holograma}</td>
                      <td className="px-1 sm:px-2 py-2 sm:py-3 text-xs text-slate-600 hidden sm:table-cell break-words">{holograma.evento}</td>
                      <td className="px-1 sm:px-2 py-2 sm:py-3 text-xs text-slate-700 font-mono hidden lg:table-cell break-words">{holograma.par}</td>
                      <td className="px-1 sm:px-2 py-2 sm:py-3 text-xs text-slate-600 italic hidden lg:table-cell break-words">{holograma.sensacion}</td>
                      <td className="px-1 sm:px-2 py-2 sm:py-3 text-xs text-slate-600 hidden xl:table-cell break-words">{holograma.manifestaciones}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Vista móvil expandida para hologramas */}
          <div className="sm:hidden mt-4 space-y-4">
            {hologramasEscolares.map((holograma) => (
              <div key={holograma.id} className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center mb-2">
                  <span className="bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full mr-2">{holograma.id}</span>
                  <h3 className="font-medium text-purple-700 text-sm">{holograma.holograma}</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div>
                    <span className="font-medium">Evento:</span> {holograma.evento}
                  </div>
                  <div>
                    <span className="font-medium">Par:</span> <span className="font-mono">{holograma.par}</span>
                  </div>
                  <div>
                    <span className="font-medium">Sensación:</span> <span className="italic">{holograma.sensacion}</span>
                  </div>
                  <div>
                    <span className="font-medium">Manifestaciones:</span> {holograma.manifestaciones}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CourseSection>
      </div>
    </div>
  );
};

export default Module3Block6;
