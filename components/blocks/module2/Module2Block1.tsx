import React from 'react';
import { useTranslation } from "react-i18next";
import CourseSection from '../../CourseSection';
import { BookOpenIcon, UserGroupIcon, BeakerIcon, LightBulbIcon, SparklesIcon, TableCellsIcon } from '../../icons';
import Module2ConflictTable from '../../Module2ConflictTable';
import { MODULE2_CONFLICTS_DATA } from '../../../constants';

const Module2Block1 = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 sm:space-y-8 lg:space-y-12">
      <section className="bg-slate-600 text-white rounded-lg sm:rounded-xl lg:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 text-center ring-2 sm:ring-4 ring-slate-200 ring-offset-2 sm:ring-offset-4 ring-offset-slate-50">
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3">Objetivo del Bloque</h2>
        <p className="text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed">
          Comprender cómo los conflictos biológicos gestacionales continúan manifestándose en la primera infancia (3m-5a), aprendiendo a identificar los 8 conflictos fundamentales y aplicar técnicas biomagnéticas específicas para cada rango de edad.
        </p>
      </section>

      <CourseSection title="Fundamentos Teóricos" icon={<BookOpenIcon />}>
        <div className="space-y-8">
          {/* Primera sección - fluida sin numeración */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border-l-4 border-pink-400">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-800 mb-3 sm:mb-4">La Historia Continúa Después del Nacimiento</h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg">
              Imagina que el nacimiento no es el final de una historia, sino el comienzo de un nuevo capítulo.
              Las experiencias que vivió el bebé en el vientre materno no se borran mágicamente al nacer.
              Durante los primeros 5 años de vida, estas memorias energéticas encuentran formas de expresarse: 
              a través de berrinches inexplicables, miedos que no tienen sentido, regresiones repentinas, 
              o síntomas físicos que los médicos no logran explicar.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mt-3 sm:mt-4">
              El biomagnetismo nos enseña que el cuerpo del niño "habla" de lo que su mente aún no puede 
              poner en palabras. Cada síntoma, cada conducta, es una comunicación valiosa sobre desequilibrios 
              energéticos que requieren nuestra atención y comprensión.
            </p>
          </div>
          
          {/* Segunda sección - conflictos explicados de forma atractiva */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-400">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">Los 8 Grandes Conflictos de la Infancia</h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
              Después de años de observación clínica, hemos identificado 8 patrones universales que
              se repiten en los niños. Estos no son simples "problemas de conducta", sino expresiones
              profundas de conflictos biológicos que buscan resolución:
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
          
          {/* Tercera sección - principios explicados de forma humana */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
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

      <CourseSection title="Conflictos Biológicos y Pares Biomagnéticos (3m-5a)" icon={<TableCellsIcon />}>
        <Module2ConflictTable data={MODULE2_CONFLICTS_DATA} />
      </CourseSection>

      <CourseSection title="Tu Mapa de Navegación: Cómo Rastrear en Primera Infancia" icon={<BeakerIcon />}>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-purple-400">
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
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

      <CourseSection title="Historias Reales: Cuando el Cuerpo Encuentra su Voz" icon={<LightBulbIcon />}>
        <div className="space-y-6">
          {/* Caso 1 - Narrativo */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border-l-4 border-pink-400">
            <div className="flex items-start space-x-3 sm:space-x-4">
                              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-slate-200 rounded-full flex items-center justify-center">
                                  <span className="text-slate-700 font-bold text-sm sm:text-base lg:text-lg">S</span>
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-400">
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

      <CourseSection title="Reflexión Final" icon={<SparklesIcon />}>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-400 text-center">
          <div className="max-w-3xl mx-auto">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-800 mb-3 sm:mb-4">Tu Nueva Mirada</h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
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

