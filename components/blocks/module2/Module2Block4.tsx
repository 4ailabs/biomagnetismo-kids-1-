import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpenIcon, TableCellsIcon, BeakerIcon, LightBulbIcon, SparklesIcon } from '../../icons';
import CourseSection from '../../CourseSection';

const Module2Block4: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-12">
      <section className="bg-slate-600 text-white rounded-xl shadow-lg p-8 text-center ring-4 ring-slate-200 ring-offset-4 ring-offset-slate-50">
        <h2 className="text-3xl font-bold mb-3">Objetivo del Bloque</h2>
        <p className="text-lg max-w-3xl mx-auto font-light">
          Acompañar la etapa preescolar (3-5 años) donde emergen la creatividad, la iniciativa y las 
          primeras habilidades sociales complejas, utilizando biomagnetismo para equilibrar miedos, 
          fomentar la autoconfianza y preparar al niño para los desafíos escolares.
        </p>
      </section>

      <CourseSection title="Fundamentos Teóricos" icon={<BookOpenIcon />}>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border-l-4 border-slate-400">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">La Explosión de la Personalidad</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Entre los 3 y 5 años asistimos a un espectáculo fascinante: el nacimiento de la personalidad única. 
              El niño ya no es solo "el hijo de" o "el hermano de" - ahora es alguien con gustos, preferencias, 
              ideas propias y, lo más importante, con proyectos. Quiere construir torres, inventar historias, 
              liderar juegos y crear mundos fantásticos.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              Esta explosión creativa viene acompañada de nuevos desafíos. El miedo al fracaso puede paralizar 
              su iniciativa, la comparación con otros puede minar su autoestima, y la presión por "rendir" 
              puede generar ansiedad temprana. Aquí el biomagnetismo se convierte en un facilitador de la 
              expresión auténtica, liberando bloqueos que impiden al niño brillar con luz propia.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 border-l-4 border-blue-300">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Los Nuevos Conflictos de Esta Etapa</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              A medida que el mundo del niño se expande hacia la escuela, los amigos y las actividades 
              estructuradas, aparecen conflictos energéticos específicos que pueden manifestarse como 
              inhibición, perfeccionismo o dificultades de socialización:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Miedo al Juicio</h4>
                <p className="text-sm text-slate-600">Miedo a hacer el ridículo o ser criticado</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Autodesvalorización</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Ansiedad de Separación</h4>
                <p className="text-sm text-slate-600">Dificultad para separarse en la escuela</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Separación/Abandono</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Inhibición Creativa</h4>
                <p className="text-sm text-slate-600">No se atreve a proponer ideas o liderar</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Falta de reconocimiento</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border-l-4 border-gray-400">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">El Cerebro Social en Desarrollo</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Esta etapa marca el despertar del "cerebro social" - la capacidad de entender que otros 
              tienen pensamientos, sentimientos y perspectivas diferentes a las suyas. Esto abre un 
              universo de posibilidades pero también de complejidades. El niño debe aprender a navegar 
              amistades, manejar conflictos, compartir atención y negociar deseos.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              Cuando este desarrollo no fluye naturalmente, podemos ver niños excesivamente tímidos, 
              agresivos o que se aíslan. El biomagnetismo puede equilibrar estas tendencias, permitiendo 
              que el niño encuentre su lugar natural en el grupo sin perder su individualidad.
            </p>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Pares Biomagnéticos para Iniciativa y Socialización" icon={<BeakerIcon />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-4">Protocolo Preescolar (3-5 años)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Para Timidez y Inhibición</h5>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Pericardio (-) → Timo (+):</strong> Fortalece la autoestima y confianza</li>
                  <li><strong>Plexo Solar (-) → Riñón Der (+):</strong> Libera miedo al juicio</li>
                  <li><strong>Tiroides (-) → Paratiroides (+):</strong> Facilita la expresión y comunicación</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Para Hiperactividad y Agresividad</h5>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Suprarrenal (-) → Suprarrenal (+):</strong> Regula la hiperactivación</li>
                  <li><strong>Temporal Izq (-) → Temporal Der (+):</strong> Calma la impulsividad</li>
                  <li><strong>Bulbo Raquídeo (-) → Hígado (+):</strong> Equilibra la irritabilidad</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white/70 rounded-lg p-4">
              <h6 className="font-semibold text-slate-800 mb-2">Momento Clave de Aplicación:</h6>
              <p className="text-sm text-slate-600">
                Aplica <strong>Pericardio-Timo</strong> antes de situaciones sociales nuevas (primer día de 
                escuela, fiestas, actividades grupales). Muchos niños muestran mayor disposición a participar.
              </p>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Guía de Preparación Escolar" icon={<TableCellsIcon />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border-l-4 border-slate-400">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">El Verdadero "School Readiness"</h3>
          <p className="text-slate-700 leading-relaxed text-lg mb-6">
            La preparación escolar va más allá de saber letras y números. Un niño está listo para la escuela 
            cuando puede separarse de sus cuidadores sin drama excesivo, puede pedir ayuda cuando la necesita, 
            tolera la frustración de no ser siempre el primero, y puede concentrarse en una actividad dirigida.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Autonomía Emocional</h4>
                <p className="text-slate-700 leading-relaxed">
                  Puede regularse cuando está frustrado, pide ayuda apropiadamente y no necesita 
                  atención constante del adulto. <strong>Par clave: Pericardio-Timo</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Flexibilidad Social</h4>
                <p className="text-slate-700 leading-relaxed">
                  Puede jugar con diferentes niños, adaptarse a nuevas rutinas y aceptar que no 
                  siempre puede ser el líder. <strong>Par clave: Temporal-Temporal</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Curiosidad Resiliente</h4>
                <p className="text-slate-700 leading-relaxed">
                  Mantiene el interés por aprender aún cuando algo es difícil. No se rinde al primer 
                  obstáculo y disfruta del proceso, no solo del resultado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Casos Clínicos Reales" icon={<LightBulbIcon />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 border-l-4 border-slate-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">S</span>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-xl mb-3">Sofía, 4 años: "La Perfecta Invisible"</h5>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Sofía era la niña "perfecta" - nunca molestaba, siempre obedecía, nunca pedía nada. 
                  Pero también nunca proponía juegos, no expresaba preferencias y se quedaba paralizada 
                  si algo no le salía bien al primer intento. Su creatividad estaba completamente bloqueada 
                  por el miedo al error.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "Es mejor no intentar que intentar y decepcionar. La perfección es mi única opción segura"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Pericardio (-) → Timo (+) + Plexo Solar (-) → Riñón Derecho (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> En 8 sesiones, Sofía comenzó a proponer actividades, a preguntar "¿qué pasa si...?" y, lo más hermoso, a reírse de sus errores.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border-l-4 border-gray-400">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">D</span>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-xl mb-3">Diego, 5 años: "El Huracán Social"</h5>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Diego era pura energía mal canalizada. Interrumpía constantemente, no podía esperar 
                  turnos, tomaba juguetes sin pedir y reaccionaba con agresividad ante cualquier límite. 
                  Los otros niños habían comenzado a evitarlo, lo que intensificaba su comportamiento disruptivo.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "Tengo tanto que ofrecer pero no sé cómo conectar sin abrumar. Mi intensidad me desconecta de los demás"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Suprarrenal (-) → Suprarrenal (+) + Temporal Izq (-) → Temporal Der (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> Diego aprendió a "bajar la intensidad" sin perder su esencia. Se convirtió en un líder natural que incluía a otros en sus juegos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Reflexión Final" icon={<SparklesIcon />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 border-l-4 border-slate-400 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">La Edad de la Posibilidad</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Entre los 3 y 5 años, el niño descubre que puede ser creador de su propia experiencia. 
              Puede inventar, proponer, liderar y transformar el mundo que lo rodea. Nuestro trabajo no es 
              moldear esta creatividad, sino remover los obstáculos que impiden su expresión natural.
            </p>
            <blockquote className="text-xl font-medium text-slate-800 italic mb-6">
              "La iniciativa saludable nace cuando el niño siente que sus ideas importan 
              y que sus errores son oportunidades, no fracasos."
            </blockquote>
            <div className="bg-white/70 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-slate-800 mb-2">Lo que recordarás siempre:</h4>
              <p className="text-slate-600 text-sm mb-2">• La creatividad bloqueada se manifiesta como perfeccionismo o inhibición</p>
              <p className="text-slate-600 text-sm mb-2">• El biomagnetismo libera la expresión auténtica sin cambiar la esencia del niño</p>
              <p className="text-slate-600 text-sm">• La preparación escolar verdadera es emocional, no solo académica</p>
            </div>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default Module2Block4;
