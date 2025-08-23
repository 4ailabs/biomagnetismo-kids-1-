import React from 'react';
import { useTranslation } from "react-i18next";
import CourseSection from '../../CourseSection';
import { BookOpen, Users, Beaker, Lightbulb, Sparkles, Table } from 'lucide-react';
import Module2ConflictTable from '../../Module2ConflictTable';
import { MODULE2_CONFLICTS_DATA } from '../../../constants';

const Module2Block1 = () => {
  const { t } = useTranslation();

  return (
    <div id="block-1" className="space-y-12 w-full overflow-hidden">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-700 mb-3">Objetivo del Bloque</h2>
        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Comprender cómo los conflictos biológicos gestacionales continúan manifestándose en la primera infancia (3m-5a), aprendiendo a identificar los 8 conflictos fundamentales y aplicar técnicas biomagnéticas específicas para cada rango de edad.
        </p>
      </section>

      <CourseSection title="Fundamentos Teóricos" icon={<BookOpen />}>
        <div className="space-y-8">
          {/* Primera sección - fluida sin numeración */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-4">La Historia Continúa Después del Nacimiento</h3>
            <p className="text-slate-700 leading-relaxed text-base">
              Imagina que el nacimiento no es el final de una historia, sino el comienzo de un nuevo capítulo. Las experiencias que vivió el bebé en el vientre materno no se borran mágicamente al nacer. Durante los primeros 5 años de vida, estas memorias energéticas encuentran formas de expresarse: a través de berrinches inexplicables, miedos que no tienen sentido, regresiones repentinas, o síntomas físicos que los médicos no logran explicar.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mt-3 sm:mt-4">
              El biomagnetismo nos enseña que el cuerpo del niño "habla" de lo que su mente aún no puede poner en palabras. Cada síntoma, cada conducta, es una comunicación valiosa sobre desequilibrios energéticos que requieren nuestra atención y comprensión.
            </p>
          </div>
          
          {/* Segunda sección - conflictos explicados de forma atractiva */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">Los 8 Grandes Conflictos de la Infancia</h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
              Después de años de observación clínica, hemos identificado 8 patrones universales que se repiten en los niños. Estos no son simples "problemas de conducta", sino expresiones profundas de conflictos biológicos que buscan resolución:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">Separación & Abandono</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando el niño siente que puede perder a quien más ama</p>
              </div>
              <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">No Ser Escuchado</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando sus señales son ignoradas o malinterpretadas</p>
              </div>
              <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">Territorio & Control</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando siente que ha perdido toda autonomía</p>
              </div>
              <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">Amenaza de Supervivencia</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando percibe peligro vital real o imaginario</p>
              </div>
              <div className="bg-white/70 rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">No Soy Suficiente</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando recibe mensajes de que no cumple expectativas</p>
              </div>
              <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">Caos Relacional</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando vive inconsistencias extremas en el cuidado</p>
              </div>
              <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">Pérdida de Base Segura</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando cambios drásticos alteran su mundo conocido</p>
              </div>
              <div className="bg-white/70 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm">
                                  <h4 className="font-bold text-blue-700 text-base sm:text-lg mb-2">Invasión de Límites</h4>
                <p className="text-xs sm:text-sm text-slate-600">Cuando su espacio corporal o emocional es violado</p>
              </div>
            </div>
          </div>
          
          {/* Nueva sección - Experiencias Adversas de la Infancia */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-800 mb-4 sm:mb-6">Experiencias Adversas de la Infancia: El Legado Invisible</h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
              Las Experiencias Adversas de la Infancia (ACE por sus siglas en inglés) son eventos traumáticos que ocurren antes de los 18 años y que pueden tener impactos profundos en la salud física, mental y emocional a lo largo de toda la vida. En el contexto del biomagnetismo, estas experiencias dejan huellas energéticas específicas que se manifiestan como desequilibrios electromagnéticos en el cuerpo.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Primera columna - ACE del hogar */}
              <div className="space-y-4">
                <h4 className="font-bold text-orange-700 text-lg border-b-2 border-orange-200 pb-2">ACE del Hogar y Familia:</h4>
                <div className="space-y-3">
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Abuso Físico</h5>
                    <p className="text-slate-600 text-xs">Golpes, empujones, quemaduras, lesiones físicas intencionales</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Abuso Emocional</h5>
                    <p className="text-slate-600 text-xs">Humillaciones, críticas constantes, amenazas, rechazo emocional</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Abuso Sexual</h5>
                    <p className="text-slate-600 text-xs">Contacto sexual inapropiado, exposición a material sexual</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Negligencia Física</h5>
                    <p className="text-slate-600 text-xs">Falta de alimentación, higiene, ropa, supervisión médica</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Negligencia Emocional</h5>
                    <p className="text-slate-600 text-xs">Falta de atención, cariño, apoyo emocional, validación</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Violencia Doméstica</h5>
                    <p className="text-slate-600 text-xs">Testigo de violencia entre padres o cuidadores</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Separación/Divorcio</h5>
                    <p className="text-slate-600 text-xs">Pérdida de contacto con uno o ambos padres</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Enfermedad Mental Familiar</h5>
                    <p className="text-slate-600 text-xs">Depresión, ansiedad, esquizofrenia, trastorno bipolar</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Adicciones Familiares</h5>
                    <p className="text-slate-600 text-xs">Alcoholismo, drogadicción, ludopatía en cuidadores</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Encarcelamiento Familiar</h5>
                    <p className="text-slate-600 text-xs">Padre, madre o cuidador en prisión</p>
                  </div>
                </div>
              </div>
              
              {/* Segunda columna - ACE externas y sistémicas */}
              <div className="space-y-4">
                <h4 className="font-bold text-orange-700 text-lg border-b-2 border-orange-200 pb-2">ACE Externas y Sistémicas:</h4>
                <div className="space-y-3">
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Bullying/Acoso Escolar</h5>
                    <p className="text-slate-600 text-xs">Acoso físico, verbal, social o cibernético</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Discriminación</h5>
                    <p className="text-slate-600 text-xs">Por raza, etnia, religión, orientación sexual, discapacidad</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Pobreza Extrema</h5>
                    <p className="text-slate-600 text-xs">Inseguridad alimentaria, falta de vivienda estable</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Migración Forzada</h5>
                    <p className="text-slate-600 text-xs">Separación de familia, pérdida de raíces culturales</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Desastres Naturales</h5>
                    <p className="text-slate-600 text-xs">Terremotos, huracanes, incendios, inundaciones</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Guerra/Conflicto Armado</h5>
                    <p className="text-slate-600 text-xs">Exposición a violencia, pérdida de seres queridos</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Abandono Escolar</h5>
                    <p className="text-slate-600 text-xs">Falta de acceso a educación o expulsión</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Trabajo Infantil</h5>
                    <p className="text-slate-600 text-xs">Explotación laboral, trabajo peligroso</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Tráfico de Personas</h5>
                    <p className="text-slate-600 text-xs">Explotación sexual o laboral forzada</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <h5 className="font-semibold text-orange-800 text-sm mb-1">Pérdida Traumática</h5>
                    <p className="text-slate-600 text-xs">Muerte súbita de padres, hermanos o cuidadores</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Manifestaciones Biomagnéticas */}
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-5 mb-6 border border-orange-200">
              <h4 className="font-bold text-orange-800 text-lg mb-4 text-center">Manifestaciones Biomagnéticas de las ACE</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h5 className="font-semibold text-orange-700 mb-2">Sistema Nervioso</h5>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p>• Ansiedad crónica</p>
                    <p>• Depresión</p>
                    <p>• TDAH</p>
                    <p>• Trastornos del sueño</p>
                    <p>• Hipervigilancia</p>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold text-orange-700 mb-2">Sistema Inmune</h5>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p>• Infecciones recurrentes</p>
                    <p>• Alergias</p>
                    <p>• Enfermedades autoinmunes</p>
                    <p>• Cicatrización lenta</p>
                    <p>• Inflamación crónica</p>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-semibold text-orange-700 mb-2">Sistemas Corporales</h5>
                  <div className="text-xs text-slate-600 space-y-1">
                    <p>• Problemas digestivos</p>
                    <p>• Alteraciones endocrinas</p>
                    <p>• Dolores crónicos</p>
                    <p>• Problemas cardíacos</p>
                    <p>• Trastornos respiratorios</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enfoque Biomagnético */}
            <div className="bg-white/80 rounded-xl p-5 border-l-4 border-orange-400 shadow-lg">
              <h4 className="font-bold text-orange-800 text-lg mb-4">El Enfoque Biomagnético para las ACE</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                El biomagnetismo aborda las ACE desde una perspectiva energética integral, reconociendo que cada tipo de trauma se almacena en el cuerpo en puntos específicos y afecta diferentes sistemas energéticos. La intervención biomagnética busca restaurar el equilibrio electromagnético alterado por estas experiencias.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                  <h5 className="font-semibold text-orange-800 mb-3">Fase 1: Identificación del Trauma</h5>
                  <div className="space-y-2 text-sm text-slate-700">
                    <p>• <strong>Historia clínica detallada:</strong> Mapeo de eventos traumáticos</p>
                    <p>• <strong>Test de ACE:</strong> Evaluación estandarizada de experiencias</p>
                    <p>• <strong>Detección biomagnética:</strong> Localización de puntos de conflicto</p>
                    <p>• <strong>Análisis de síntomas:</strong> Correlación trauma-manifestación</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                  <h5 className="font-semibold text-orange-800 mb-3">Fase 2: Restauración Energética</h5>
                  <div className="space-y-2 text-sm text-slate-700">
                    <p>• <strong>Pares biomagnéticos:</strong> Aplicación específica por tipo de ACE</p>
                    <p>• <strong>Secuencia de tratamiento:</strong> Orden jerárquico de intervención</p>
                    <p>• <strong>Monitoreo de cambios:</strong> Seguimiento de mejoras energéticas</p>
                    <p>• <strong>Prevención secundaria:</strong> Fortalecimiento de sistemas afectados</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-orange-800 text-sm font-medium text-center">
                  <strong>Nota importante:</strong> El tratamiento biomagnético de las ACE debe realizarse siempre en conjunto con apoyo psicológico profesional y en casos de trauma severo, bajo supervisión médica especializada.
                </p>
              </div>
            </div>
          </div>
          
          {/* Tercera sección - principios explicados de forma humana */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-800 mb-3 sm:mb-4">Por Qué Funciona el Biomagnetismo en Niños</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs sm:text-sm">1</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold">Su cuerpo habla primero:</span> Antes de que un niño pueda 
                  decir "me duele el corazón por la separación", su cuerpo ya lo está gritando a través de 
                  síntomas.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs sm:text-sm">2</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold">Máxima plasticidad:</span> El cerebro infantil es como arcilla 
                  fresca. Los cambios energéticos se integran más rápido y con mayor permanencia.
                </p>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs sm:text-sm">3</span>
                </div>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  <span className="font-semibold">Conexión familiar:</span> El campo energético del niño vibra 
                  en sintonía con su familia. Sanando al niño, a menudo sanamos patrones familiares completos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Conflictos y Pares Biomagnéticos" icon={<Table />}>
        <Module2ConflictTable data={MODULE2_CONFLICTS_DATA} />
      </CourseSection>

      <CourseSection title="Mapa de Navegación" icon={<Beaker />}>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
          <p className="text-slate-700 leading-relaxed text-base mb-6">
            Trabajar con niños requiere un enfoque diferente al de los adultos. Aquí tienes una guía paso a paso
            que hemos perfeccionado después de miles de consultas pediátricas:
          </p>
          
          <div className="space-y-6">
            {/* Paso 1 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                  <span className="text-purple-700 font-bold text-sm sm:text-base">1</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2">Conviértete en Detective</h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Observa todo: ¿cuándo empezaron los síntomas? ¿Qué cambios hubo en casa? ¿Cómo se comporta 
                  con mamá vs. papá? Los niños no mienten con su cuerpo, pero nosotros debemos aprender su lenguaje.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                  <span className="text-purple-700 font-bold text-sm sm:text-base">2</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2">Encuentra el Patrón</h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  De los 8 conflictos fundamentales, ¿cuál resuena más con lo que observas? No busques el perfecto, 
                  busca el que más sentido hace en la historia del niño.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                  <span className="text-purple-700 font-bold text-sm sm:text-base">3</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2">Localiza el Punto Trauma</h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Coloca suavemente el imán negativo en el punto correspondiente al conflicto. Los niños son 
                  más sensibles, así que menos presión y más intuición.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                  <span className="text-purple-700 font-bold text-sm sm:text-base">4</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2">Busca el Equilibrio</h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Encuentra el segundo punto donde el imán positivo crea la armonía. Las piernas se alinean, 
                  pero más importante: observa si el niño se relaja o cambia su expresión.
                </p>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                  <span className="text-purple-700 font-bold text-sm sm:text-base">5</span>
              </div>
              <div>
                <h4 className="text-purple-800 text-base sm:text-lg mb-2">Mantén la Conexión</h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  15-20 minutos máximo. Mantente presente, habla suavemente, permite que el niño se mueva 
                  ligeramente si lo necesita. Su cuerpo te dirá cuándo es suficiente.
                </p>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-200 rounded-full flex items-center justify-center">
                                  <span className="text-purple-700 font-bold text-sm sm:text-base">6</span>
              </div>
              <div>
                <h4 className="font-bold text-purple-800 text-base sm:text-lg mb-2">Celebra los Cambios</h4>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Los cambios en niños pueden ser inmediatos o aparecer en días siguientes. Confía en el proceso 
                  y mantente disponible para ajustes si es necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Casos Clínicos Reales" icon={<Lightbulb />}>
        <div className="space-y-6">
          {/* Caso 1 - Narrativo */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">S</span>
              </div>
              <div>
                                  <h5 className="font-bold text-slate-800 text-lg sm:text-xl mb-2 sm:mb-3">Sofia, 18 meses: "¿Dónde está papá?"</h5>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Sofia llegó a consulta con berrinches que duraban horas. Sus padres se habían divorciado 
                  hace un mes, y la niña que antes era alegre ahora lloraba inconsolablemente cada noche. 
                  No quería separarse de mamá ni por un momento, y había regresado a despertarse cada 2 horas.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "He perdido mi 
                  seguridad, necesito saber que no me van a abandonar"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Plexo Solar (-) → Riñón 
                  Derecho (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> Después de 2 sesiones, 
                  Sofia comenzó a jugar sola por períodos cortos y aceptó que la abuela la cuidara mientras mamá trabajaba.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Caso 2 - Narrativo */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <div className="flex items-start space-x-3 sm:space-x-4">
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-slate-200 rounded-full flex items-center justify-center">
                                  <span className="text-slate-700 font-bold text-sm sm:text-base lg:text-lg">D</span>
              </div>
              <div>
                                  <h5 className="font-bold text-slate-800 text-lg sm:text-xl mb-2 sm:mb-3">Diego, 3 años: "Las palabras que no salen"</h5>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  Diego hablaba perfectamente en casa, contaba historias, cantaba canciones. Pero en el jardín 
                  no pronunciaba una palabra. Las maestras pensaban que tenía un retraso del lenguaje. 
                  Su mamá estaba desesperada: "¡En casa no se calla!"
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "Solo me siento 
                  seguro para expresarme donde sé que me escuchan"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Temporal Izq (-) → 
                  Temporal Der (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> En la tercera sesión, 
                  Diego comenzó a susurrar con su maestra favorita. En dos semanas hablaba normalmente en clase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Reflexión Final" icon={<Sparkles />}>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-md border-l-4 border-slate-200 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Tu Nueva Mirada</h3>
            <p className="text-slate-700 leading-relaxed text-base mb-6">
              A partir de ahora, cada vez que veas a un niño con "problemas de conducta", recuerda que
              estás ante un pequeño ser humano cuyo cuerpo está gritando una verdad que aún no puede expresar con 
              palabras.
            </p>
            <blockquote className="text-lg sm:text-xl font-medium text-amber-800 italic mb-4 sm:mb-6">
              "El cuerpo del niño habla antes que sus palabras, 
              y el biomagnetismo nos da el diccionario para entenderlo."
            </blockquote>
            <div className="bg-white/70 rounded-lg p-4 text-left">
                              <h4 className="font-semibold text-amber-800 mb-2">Lo que llevas contigo:</h4>
                                <p className="text-slate-600 text-sm mb-2">• Los 8 conflictos fundamentales que rigen la infancia</p>
                  <p className="text-slate-700 text-sm mb-2">• Un método de rastreo adaptado específicamente para niños</p>
                  <p className="text-slate-600 text-sm">• La certeza de que cada síntoma tiene sentido y solución</p>
            </div>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default Module2Block1;

