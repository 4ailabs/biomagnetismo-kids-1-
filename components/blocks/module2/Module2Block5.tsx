import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Table, Beaker, Lightbulb, Sparkles } from 'lucide-react';
import CourseSection from '../../CourseSection';

const Module2Block5: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-12">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-700 mb-3">Objetivo del Bloque</h2>
        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Integrar todo el conocimiento del módulo en una visión práctica y coherente, estableciendo 
          protocolos biomagnéticos seguros para cada etapa evolutiva y preparando al terapeuta 
          para intervenir con confianza y precisión.
        </p>
      </section>

      <CourseSection title="BLOQUE 5: LA SINFONÍA DEL DESARROLLO" icon={<BookOpen />}>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">El Hilo Conductor de los Primeros Años</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Cada etapa que hemos explorado es como un movimiento en una sinfonía. No son episodios aislados, 
              sino capítulos de una historia que se construye día a día. El bebé que necesitaba cercanía a los 
              3 meses se convierte en el explorador valiente de los 12 meses, luego en el pequeño rebelde de 
              los 2 años, y finalmente en el creador incansable de los 4 años.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              El biomagnetismo no cambia esta historia natural - la facilita. Cada par que aplicamos es como 
              afinar un instrumento para que pueda tocar su parte en la sinfonía con más claridad y armonía. 
              No forzamos la música, simplemente removemos la estática que impide que se escuche con nitidez.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">El Mapa Completo del Viaje</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">3-9m</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">La Base: "¿Puedo Confiar?"</h4>
                  <p className="text-slate-700 leading-relaxed">
                    El mundo es seguro o peligroso. Aquí se decide todo. <strong>Par clave: Pericardio-Timo</strong> 
                    para fortalecer esa confianza primordial que lo acompañará toda la vida.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">9-18m</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">La Aventura: "¿Puedo Explorar?"</h4>
                  <p className="text-slate-700 leading-relaxed">
                    El mundo se vuelve fascinante. Cada rincón esconde un misterio. <strong>Par clave: Bulbo Raquídeo-Suprarrenal</strong> 
                    para equilibrar la curiosidad con la prudencia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 font-bold text-sm">18m-3a</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">La Revolución: "¿Puedo Ser Yo?"</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Nace el "yo". Con él, la lucha por la autonomía y los famosos berrinches. <strong>Par clave: Suprarrenal-Suprarrenal</strong> 
                    para navegar esta tormenta emocional.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-sm">3-5a</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">La Creación: "¿Puedo Crear?"</h4>
                  <p className="text-slate-700 leading-relaxed">
                    El mundo se convierte en un lienzo en blanco. Todo es posible. <strong>Par clave: Pericardio-Timo</strong> 
                    para liberar esa creatividad sin miedo al juicio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Protocolos Integrados por Edad" icon={<Beaker />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-4">La Caja de Herramientas del Terapeuta Pediátrico</h4>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Después de recorrer todas estas etapas, es momento de condensar la sabiduría en protocolos 
              prácticos que puedas usar inmediatamente. Estos son los pares más efectivos que han demostrado 
              resultados consistentes en miles de niños.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Protocolo de Emergencia Universal</h5>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Para cualquier crisis emocional (3m-5a):</strong></p>
                  <p className="text-slate-600 text-sm mb-1">1. <strong>Suprarrenal (-) → Suprarrenal (+):</strong> 15 minutos</p>
                  <p className="text-slate-600 text-sm mb-1">2. <strong>Pericardio (-) → Timo (+):</strong> 10 minutos</p>
                  <p className="text-slate-600 text-sm">Este protocolo funciona en 80% de los casos agudos</p>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Protocolo de Mantenimiento</h5>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Para equilibrio general (semanal):</strong></p>
                  <p className="text-slate-600 text-sm mb-1">1. <strong>Temporal Izq (-) → Temporal Der (+):</strong> 15 minutos</p>
                  <p className="text-slate-600 text-sm mb-1">2. <strong>Bulbo Raquídeo (-) → Plexo Solar (+):</strong> 10 minutos</p>
                  <p className="text-slate-600 text-sm">Para prevenir desequilibrios y mantener estabilidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="La Mesa de Trabajo del Terapeuta" icon={<Table />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Checklist de la Sesión Perfecta</h3>
          <p className="text-slate-700 leading-relaxed text-lg mb-6">
            Una sesión efectiva con niños no depende de la técnica perfecta, sino de la preparación adecuada 
            y la flexibilidad para adaptarse al mundo del pequeño. Aquí está tu guía paso a paso:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white/70 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Antes de la Sesión</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                <div>
                  <p className="mb-1">✓ Espacio a temperatura agradable (22-24°C)</p>
                  <p className="mb-1">✓ Juguetes simples para distracción</p>
                  <p>✓ Imanes limpios y organizados por intensidad</p>
                </div>
                <div>
                  <p className="mb-1">✓ Historia clínica revisada</p>
                  <p className="mb-1">✓ Expectativas realistas con los padres</p>
                  <p>✓ Plan B preparado si el niño no coopera</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Durante la Sesión</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
                <div>
                  <p className="font-medium mb-1">Primeros 5 minutos:</p>
                  <p className="mb-1">• Observar el estado del niño</p>
                  <p>• Establecer rapport suave</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Minutos 5-20:</p>
                  <p className="mb-1">• Aplicar protocolo elegido</p>
                  <p>• Monitorear respuesta</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Últimos 5 minutos:</p>
                  <p className="mb-1">• Observar cambios</p>
                  <p>• Documentar resultados</p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Señales de Éxito Inmediato</h4>
              <div className="text-sm text-slate-600">
                <p className="mb-1">• El niño se relaja visiblemente (respiración más lenta, músculos menos tensos)</p>
                <p className="mb-1">• Cambia su comportamiento (de llorar a observar, de inquieto a tranquilo)</p>
                <p>• Los padres notan la diferencia ("se ve más calmado", "ya no está tan rígido")</p>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Casos Reales Integrados" icon={<Lightbulb />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">A</span>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-xl mb-3">Ana, 15 meses: "El Caso que Lo Cambió Todo"</h5>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ana llegó a consulta porque "no caminaba" a los 15 meses. Pero en la primera observación 
                  era evidente que el problema no era motor - era miedo. Se aferraba a su madre con desesperación, 
                  rechazaba tocar el suelo y lloraba ante cualquier novedad. Su desarrollo se había detenido 
                  por una experiencia traumática (hospitalización a los 8 meses).
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "El mundo dejó de ser seguro. Prefiero no moverme que encontrarme con más dolor"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Protocolo aplicado:</strong> Pericardio (-) → Timo (+) por 4 sesiones, luego Bulbo Raquídeo (-) → Suprarrenal (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El milagro:</strong> En la quinta sesión, Ana soltó la mano de su madre y caminó hacia un juguete. Fue el momento en que comprendí el verdadero poder del biomagnetismo pediátrico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Tu Nuevo Comienzo" icon={<Sparkles />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 shadow-md border-l-4 border-slate-200 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">El Terapeuta que Ya Eres</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Al terminar este módulo, no solo conoces protocolos y técnicas. Tienes una nueva forma de ver 
              a los niños - no como pacientes que necesitan ser "arreglados", sino como pequeños seres humanos 
              cuyas historias apenas comienzan y merecen ser escuchadas con respeto y compasión.
            </p>
            <blockquote className="text-xl font-medium text-slate-800 italic mb-6">
              "El biomagnetismo pediátrico no cura niños. Libera la capacidad innata de cada 
              niño para crecer, explorar, crear y brillar con su propia luz única."
            </blockquote>
            <div className="bg-white/70 rounded-lg p-6 text-left">
              <h4 className="font-semibold text-slate-800 mb-4 text-center">Lo que llevas contigo para siempre:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-slate-600 text-sm">
                <div>
                  <p className="mb-2">• Cada etapa del desarrollo tiene su propia sabiduría</p>
                  <p className="mb-2">• Los síntomas son mensajes, no enemigos</p>
                  <p className="mb-2">• La confianza del niño se gana, no se exige</p>
                </div>
                <div>
                  <p className="mb-2">• Los padres son aliados, no obstáculos</p>
                  <p className="mb-2">• La paciencia es tu herramienta más poderosa</p>
                  <p className="mb-2">• Cada niño que ayudas cambia el mundo</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-slate-100 rounded-lg">
              <p className="text-lg font-medium text-slate-800">
                Ahora vas preparado. Confía en tu conocimiento, sigue tu intuición y nunca olvides que 
                estás tocando vidas en su momento más formativo. Es un privilegio y una responsabilidad 
                extraordinaria.
              </p>
            </div>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default Module2Block5;
