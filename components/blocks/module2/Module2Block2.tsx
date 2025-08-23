import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Table, Beaker, Lightbulb, Sparkles } from 'lucide-react';
import CourseSection from '../../CourseSection';

const Module2Block2: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-12">
      <section className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-700 mb-3">Objetivo del Bloque</h2>
        <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Dominar las técnicas específicas de rastreo biomagnético para cada rango de edad (9-18 meses), adaptando 
          métodos, puntos de acceso y protocolos según la maduración neurológica del niño en su fase exploratoria.
        </p>
      </section>

      <CourseSection title="Fundamentos Teóricos" icon={<BookOpen />}>
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">La Etapa Exploratoria: Libertad con Base Segura</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Entre los 9 y 18 meses, el niño descubre un nuevo superpoder: puede alejarse de mamá y papá 
              y explorar el mundo, pero siempre sabe que puede regresar a sus brazos. Esta etapa marca el 
              equilibrio perfecto entre dependencia e independencia. El niño se convierte en un pequeño 
              explorador que usa a sus cuidadores como "base de operaciones".
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              Esta libertad recién descubierta trae nuevos desafíos energéticos. Algunos niños se vuelven 
              temerosos y no se alejan, otros se alejan demasiado y se pierden en la exploración. El 
              biomagnetismo nos ayuda a encontrar ese equilibrio perfecto entre seguridad y aventura.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Los Nuevos Conflictos de la Exploración</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Esta etapa introduce conflictos energéticos únicos relacionados con el equilibrio entre 
              seguridad y exploración. El niño debe aprender a confiar en su capacidad de movimiento 
              mientras mantiene el vínculo emocional con sus cuidadores:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Miedo a Alejarse</h4>
                <p className="text-sm text-slate-600">Ansiedad excesiva por separación</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Inseguridad territorial</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Exploración Compulsiva</h4>
                <p className="text-sm text-slate-600">No reconoce límites ni peligros</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Desconexión de base segura</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 shadow-sm">
                <h4 className="font-bold text-slate-700 text-lg mb-2">Frustración Motriz</h4>
                <p className="text-sm text-slate-600">Quiere hacer más de lo que puede</p>
                <p className="text-xs text-slate-500 mt-1">Conflicto: Desvalorización motora</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">El Desarrollo del Sistema Motor</h3>
            <p className="text-slate-700 leading-relaxed text-lg">
              Esta es la etapa donde el cuerpo se convierte en el mejor aliado del niño. Caminar, correr, 
              subir, bajar - cada nuevo logro motor es una victoria que aumenta su confianza y autonomía. 
              Pero también puede generar frustración cuando el deseo supera a la capacidad física.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mt-4">
              Los desequilibrios en esta etapa a menudo se manifiestan como retrasos motores, hiperactividad, 
              o al contrario, excesiva cautela física. El biomagnetismo puede optimizar la coordinación 
              neuromuscular y equilibrar la confianza corporal del niño.
            </p>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Pares Biomagnéticos para Exploración Segura" icon={<Beaker />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-4">Protocolo Exploratorio (9-18 meses)</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Para Miedo Excesivo a Alejarse</h5>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Bulbo Raquídeo (-) → Suprarrenal (+):</strong> Regula el sistema de alarma</li>
                  <li><strong>Pericardio (-) → Timo (+):</strong> Fortalece la confianza básica</li>
                  <li><strong>Plexo Solar (-) → Riñón Der (+):</strong> Libera ansiedad de separación</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-800 mb-3">Para Hiperactividad Exploratoria</h5>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li><strong>Temporal Izq (-) → Temporal Der (+):</strong> Equilibra la impulsividad</li>
                  <li><strong>Frontal (-) → Occipital (+):</strong> Mejora el autocontrol</li>
                  <li><strong>Suprarrenal (-) → Suprarrenal (+):</strong> Regula la activación</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white/70 rounded-lg p-4">
              <h6 className="font-semibold text-slate-800 mb-2">Aplicación Práctica:</h6>
              <p className="text-sm text-slate-600">
                Observa el patrón de exploración del niño durante 5 minutos. Si se aleja menos de 2 metros 
                del cuidador, usa el protocolo para miedo. Si ignora llamadas y no regresa espontáneamente, 
                usa el protocolo para hiperactividad.
              </p>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Protocolo de Rastreo Específico" icon={<Table />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Evaluación de la Exploración Segura</h3>
          <p className="text-slate-700 leading-relaxed text-lg mb-6">
            Para esta etapa, el rastreo debe centrarse en el equilibrio entre el sistema motor, el sistema 
            de apego y el sistema de alerta. Observa estos patrones clave:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Distancia de Exploración</h4>
                <p className="text-slate-700 leading-relaxed">
                  ¿Se aleja el niño de 2-5 metros del cuidador de forma espontánea? ¿Regresa periódicamente 
                  para "reconectarse"? Esta es la medida de una exploración saludable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Respuesta a Límites</h4>
                <p className="text-slate-700 leading-relaxed">
                  ¿Responde cuando le dicen "no" o "ven acá"? ¿Puede detenerse cuando hay peligro? 
                  Esta capacidad indica un sistema neurológico bien regulado.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-2">Confianza Motora</h4>
                <p className="text-slate-700 leading-relaxed">
                  ¿Intenta nuevos movimientos sin miedo excesivo? ¿Persiste ante dificultades motrices? 
                  La confianza corporal es clave para un desarrollo saludable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Casos Clínicos Reales" icon={<Lightbulb />}>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">C</span>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-xl mb-3">Carlos, 14 meses: "El Niño Velcro"</h5>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Carlos se aferraba a las piernas de su madre y lloraba si ella se alejaba más de un metro. 
                  No gateaba hacia juguetes ni exploraba espacios nuevos. En parques, se quedaba inmóvil 
                  en el regazo materno. Su desarrollo motor se había estancado por el miedo a la separación.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "El mundo es peligroso si no estoy pegado a mamá. Mi seguridad depende de la proximidad física"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Bulbo Raquídeo (-) → Suprarrenal (+) + Pericardio (-) → Timo (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> En 3 sesiones, Carlos comenzó a gatear hacia juguetes a 2-3 metros de distancia, manteniendo contacto visual con su madre.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 shadow-md border-l-4 border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-slate-700 font-bold text-lg">V</span>
              </div>
              <div>
                <h5 className="font-bold text-slate-800 text-xl mb-3">Valentina, 16 meses: "La Exploradora Sin Frenos"</h5>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Valentina corría sin mirar atrás, se subía a lugares peligrosos y no respondía cuando 
                  la llamaban. Sus padres vivían en estrés constante porque parecía no tener sentido del 
                  peligro. No regresaba espontáneamente donde sus cuidadores.
                </p>
                <div className="bg-white/70 rounded-lg p-4">
                  <p className="text-slate-600 text-sm mb-2"><strong>Su cuerpo hablaba:</strong> "La exploración es más importante que la seguridad. No necesito a nadie, puedo sola con todo"</p>
                  <p className="text-slate-600 text-sm mb-2"><strong>Intervención:</strong> Temporal Izq (-) → Temporal Der (+) + Frontal (-) → Occipital (+)</p>
                  <p className="text-slate-600 text-sm"><strong>El cambio:</strong> Valentina comenzó a voltear a ver a sus padres durante la exploración y a responder cuando la llamaban.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseSection>

      <CourseSection title="Reflexión Final" icon={<Sparkles />}>
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-8 shadow-md border-l-4 border-slate-200 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">El Equilibrio Perfecto</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              Esta etapa nos enseña que la verdadera independencia nace de la seguridad, no de la separación. 
              Un niño que confía en que su base segura estará ahí cuando la necesite, puede aventurarse 
              más lejos y aprender más sobre el mundo y sobre sí mismo.
            </p>
            <blockquote className="text-xl font-medium text-slate-800 italic mb-6">
              "La exploración saludable requiere raíces profundas y alas fuertes. 
              Las raíces están en el apego, las alas en la confianza."
            </blockquote>
            <div className="bg-white/70 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-slate-800 mb-2">Lo que recordarás siempre:</h4>
              <p className="text-slate-600 text-sm mb-2">• La exploración segura nace de una base segura, no de la independencia forzada</p>
              <p className="text-slate-600 text-sm mb-2">• Los miedos excesivos y la imprudencia son dos caras del mismo desequilibrio</p>
              <p className="text-slate-600 text-sm">• El biomagnetismo restaura el equilibrio natural entre seguridad y aventura</p>
            </div>
          </div>
        </div>
      </CourseSection>
    </div>
  );
};

export default Module2Block2;